import { useEffect, useRef } from "react";

const DEAD = 0;
const DYING = 1;
const ALIVE = 2;
const CELL_SIZE = 10;
const FRAMERATE = 10;

export default function BriansBrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  const accumulatorRef = useRef<number>(0);

  // State refs to avoid re-renders causing resets
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const patternRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const generateRandom = (w: number, h: number, percentAlive: number) => {
      const p = new Array(w * h).fill(DEAD);
      for (let i = 0; i < w * h; i++) {
        if (Math.random() * 100 < percentAlive) {
          p[i] = ALIVE;
        }
      }
      return p;
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssWidth = window.innerWidth;
      const cssHeight = window.innerHeight;

      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      canvas.width = Math.ceil(cssWidth * dpr);
      canvas.height = Math.ceil(cssHeight * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const newWidth = Math.floor(cssWidth / CELL_SIZE);
      const newHeight = Math.floor(cssHeight / CELL_SIZE);

      let newPattern = new Array(newWidth * newHeight).fill(DEAD);

      // Preserve old pattern if possible
      if (
        patternRef.current.length > 0 &&
        widthRef.current > 0 &&
        heightRef.current > 0
      ) {
        const xOffset = Math.floor((newWidth - widthRef.current) / 2);
        const yOffset = Math.floor((newHeight - heightRef.current) / 2);

        for (let y = 0; y < heightRef.current; y++) {
          for (let x = 0; x < widthRef.current; x++) {
            const val = patternRef.current[y * widthRef.current + x];
            const nx = x + xOffset;
            const ny = y + yOffset;
            if (nx >= 0 && nx < newWidth && ny >= 0 && ny < newHeight) {
              newPattern[ny * newWidth + nx] = val;
            }
          }
        }
      } else {
        newPattern = generateRandom(newWidth, newHeight, 20);
      }

      widthRef.current = newWidth;
      heightRef.current = newHeight;
      patternRef.current = newPattern;
    };

    const generateNext = (pattern: number[], width: number, height: number) => {
      const nextPattern = new Array(pattern.length).fill(DEAD);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const cellIndex = y * width + x;
          const cellValue = pattern[cellIndex];

          // Neighbors with wrapping
          const neighbors = [
            pattern[
              ((y - 1 + height) % height) * width + ((x - 1 + width) % width)
            ],
            pattern[((y - 1 + height) % height) * width + x],
            pattern[((y - 1 + height) % height) * width + ((x + 1) % width)],
            pattern[y * width + ((x - 1 + width) % width)],
            pattern[y * width + ((x + 1) % width)],
            pattern[((y + 1) % height) * width + ((x - 1 + width) % width)],
            pattern[((y + 1) % height) * width + x],
            pattern[((y + 1) % height) * width + ((x + 1) % width)],
          ];

          if (cellValue === DYING) {
            nextPattern[cellIndex] = DEAD;
          } else if (cellValue === ALIVE) {
            nextPattern[cellIndex] = DYING;
          } else {
            const aliveNeighbors = neighbors.filter((n) => n === ALIVE).length;
            if (aliveNeighbors === 2) {
              nextPattern[cellIndex] = ALIVE;
            } else {
              nextPattern[cellIndex] = DEAD;
            }
          }
        }
      }
      return nextPattern;
    };

    const drawBoard = (pattern: number[], width: number, height: number) => {
      // Clear with a dark background that matches the theme
      ctx.fillStyle = "#05070f";
      ctx.fillRect(
        0,
        0,
        canvas.width / (window.devicePixelRatio || 1),
        canvas.height / (window.devicePixelRatio || 1)
      );

      const maxY = Math.min(
        height,
        Math.floor(canvas.height / (window.devicePixelRatio || 1) / CELL_SIZE)
      );
      const maxX = Math.min(
        width,
        Math.floor(canvas.width / (window.devicePixelRatio || 1) / CELL_SIZE)
      );

      for (let y = 0; y < maxY; y++) {
        for (let x = 0; x < maxX; x++) {
          const idx = y * width + x;
          const cellValue = pattern[idx];

          if (cellValue === DYING) {
            ctx.fillStyle = "rgba(128, 0, 128, 0.6)"; // Dimmer purple
            ctx.fillRect(
              x * CELL_SIZE,
              y * CELL_SIZE,
              CELL_SIZE - 1,
              CELL_SIZE - 1
            );
          } else if (cellValue === ALIVE) {
            ctx.fillStyle = "rgba(0, 255, 0, 0.5)"; // Dimmer green
            ctx.fillRect(
              x * CELL_SIZE,
              y * CELL_SIZE,
              CELL_SIZE - 1,
              CELL_SIZE - 1
            );
          }
        }
      }
    };

    const calculateLivePercentage = (pattern: number[]) => {
      let liveCount = 0;
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === ALIVE) liveCount++;
      }
      return (liveCount / pattern.length) * 100;
    };

    const addRandomLiveCells = (pattern: number[], count: number) => {
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * pattern.length);
        pattern[randomIndex] = ALIVE;
      }
    };

    const update = () => {
      if (
        !patternRef.current ||
        widthRef.current <= 0 ||
        heightRef.current <= 0
      )
        return;

      patternRef.current = generateNext(
        patternRef.current,
        widthRef.current,
        heightRef.current
      );

      const livePercentage = calculateLivePercentage(patternRef.current);
      if (livePercentage < 1) {
        addRandomLiveCells(
          patternRef.current,
          Math.floor(patternRef.current.length * 0.01)
        );
      }

      drawBoard(patternRef.current, widthRef.current, heightRef.current);
    };

    const animate = (time: number) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time;
      }
      const deltaTime = time - previousTimeRef.current;
      previousTimeRef.current = time;

      accumulatorRef.current += deltaTime;

      const frameInterval = 1000 / FRAMERATE;

      if (accumulatorRef.current > 1000) accumulatorRef.current = frameInterval;

      while (accumulatorRef.current >= frameInterval) {
        update();
        accumulatorRef.current -= frameInterval;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    requestRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
