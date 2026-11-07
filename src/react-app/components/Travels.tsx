import { useMemo, useRef, useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngBoundsExpression } from "leaflet";
import travels from "../data/travels.json";
import "./Travels.css";

type TravelEntry = Omit<(typeof travels.entries)[number], "photos"> & {
  photos: { src: string; alt: string }[];
};
const entries = travels.entries as TravelEntry[];
const sideTripIds = new Set(["seattle", "forks"]);

function MapViewport({
  entries,
  selectedId,
}: {
  entries: TravelEntry[];
  selectedId: string;
}) {
  const map = useMap();
  const selected = entries.find((entry) => entry.id === selectedId);

  if (selected) {
    map.flyTo(
      [selected.coordinates.lat, selected.coordinates.lng],
      Math.max(map.getZoom(), 6),
      { duration: 0.8 },
    );
  }

  return null;
}

function TravelsMap({
  entries,
  selectedId,
  onSelect,
}: {
  entries: TravelEntry[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const bounds = useMemo(
    () =>
      entries.map(
        (entry) =>
          [entry.coordinates.lat, entry.coordinates.lng] as [
            number,
            number,
          ],
      ) as LatLngBoundsExpression,
    [entries],
  );
  const mainRoute = entries
    .filter((entry) => !sideTripIds.has(entry.id))
    .map((entry) => [entry.coordinates.lat, entry.coordinates.lng] as [number, number]);
  const sideRoute = entries
    .filter((entry) => entry.id === "spokane" || sideTripIds.has(entry.id))
    .map((entry) => [entry.coordinates.lat, entry.coordinates.lng] as [number, number]);

  return (
    <MapContainer
      className="travels-map"
      bounds={bounds}
      boundsOptions={{ padding: [48, 48] }}
      scrollWheelZoom
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline
        positions={mainRoute}
        pathOptions={{ color: "#818cf8", weight: 3 }}
      />
      <Polyline
        positions={sideRoute}
        pathOptions={{ color: "#818cf8", dashArray: "7 10", weight: 3 }}
      />
      {entries.map((entry, index) => (
        <CircleMarker
          center={[entry.coordinates.lat, entry.coordinates.lng]}
          key={entry.id}
          pathOptions={{
            color: "#f8f1e4",
            fillColor: entry.id === selectedId ? "#818cf8" : "#05070f",
            fillOpacity: 1,
            weight: 3,
          }}
          radius={entry.id === selectedId ? 10 : 7}
          eventHandlers={{ click: () => onSelect(entry.id) }}
        >
          <span className="marker-number">{String(index + 1).padStart(2, "0")}</span>
        </CircleMarker>
      ))}
      <MapViewport entries={entries} selectedId={selectedId} />
    </MapContainer>
  );
}

function TravelCard({
  entry,
  index,
  isSelected,
  onSelect,
}: {
  entry: TravelEntry;
  index: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <article
      className={`travel-card ${isSelected ? "is-selected" : ""}`}
      id={`entry-${entry.id}`}
      onClick={() => onSelect(entry.id)}
    >
      <div className="travel-card-topline">
        <span className="travel-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="travel-date">{entry.date}</span>
      </div>
      <h2>{entry.location}</h2>
      <p className="travel-region">{entry.region}</p>
      <p className="travel-summary">{entry.summary}</p>
      <p className="travel-journal">{entry.journal}</p>
      <div className="travel-photos">
        {entry.photos.map((photo) => (
          <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
        ))}
      </div>
      <button
        className="map-pin-link"
        onClick={(event) => {
          event.stopPropagation();
          onSelect(entry.id);
        }}
        type="button"
      >
      </button>
    </article>
  );
}

export default function Travels() {
  const [selectedId, setSelectedId] = useState(entries[0].id);
  const listRef = useRef<HTMLDivElement>(null);

  const selectEntry = (id: string) => {
    setSelectedId(id);
    if (window.innerWidth < 800) {
      document.getElementById(`entry-${id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <main className="travels-page">
      <section className="travels-layout">
        <div className="travels-journal" ref={listRef}>
          <div className="travels-intro">
            <h1>{travels.title}</h1>
            <p>{travels.intro}</p>
          </div>
          <div className="travel-list">
            {entries.map((entry, index) => (
              <TravelCard
                entry={entry}
                index={index}
                isSelected={entry.id === selectedId}
                key={entry.id}
                onSelect={selectEntry}
              />
            ))}
          </div>
        </div>
        <div className="travels-map-shell">
          <TravelsMap entries={entries} selectedId={selectedId} onSelect={selectEntry} />
        </div>
      </section>
    </main>
  );
}
