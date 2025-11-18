import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="hero-section">
        <div className="glass-box hero-box">
          <div className="hero-header-content">
            <div className="hero-text">
              <h1 className="main-title">Holden Vail</h1>
              <p className="subtitle">Full Stack Software Engineer</p>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/214561203?v=4"
              alt="Holden Vail"
              className="profile-image"
            />
          </div>
          <p className="summary-text">
            I'm a Full Stack Engineer who loves building scalable microservices
            and modern web applications. I've got experience with cloud-native
            development using AWS and GCP, .NET ecosystems, and React-based
            frontends. I'm dedicated to creating efficient, user-centric
            solutions for complex technical challenges.
          </p>
          <div className="contact-links">
            <a href="mailto:holdenjvail@gmail.com">
              <FaEnvelope /> holdenjvail@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/holden-v"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/HoldenV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <div className="glass-box">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <h3>
                University of Kansas{" "}
                <span className="location">- Lawrence, KS</span>
              </h3>
              <p className="degree">Bachelor of Science in Computer Science</p>
              <p className="date">Expected Graduation: December 2025</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="glass-box">
            <h2 className="section-title">Technical Proficiency</h2>

            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <ul className="skills-list">
                  <li>TypeScript / JavaScript</li>
                  <li>C# / .NET</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>SQL (Postgres)</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Frontend</h3>
                <ul className="skills-list">
                  <li>React.js & Redux</li>
                  <li>HTML5 / CSS3</li>
                  <li>Material UI</li>
                  <li>Flutter / Dart</li>
                  <li>ElectronJS</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Backend & Cloud</h3>
                <ul className="skills-list">
                  <li>Microservices</li>
                  <li>RESTful APIs</li>
                  <li>AWS (SES, EC2)</li>
                  <li>Google Cloud Platform</li>
                  <li>Firebase / Firestore</li>
                </ul>
              </div>

              <div className="skill-category">
                <h3>Tools & DevOps</h3>
                <ul className="skills-list">
                  <li>Git / GitHub</li>
                  <li>CI/CD Pipelines</li>
                  <li>Docker / Containers</li>
                  <li>Agile / Scrum</li>
                  <li>Linux / Bash</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="glass-box">
            <h2 className="section-title">Professional Experience</h2>

            <div className="experience-item">
              <h3>Associate Software Engineer</h3>
              <p className="company">Shamrock Trading Corporation</p>
              <p className="date">Starting Early 2026</p>
              <ul>
                <li>
                  Incoming full-time Associate Software Engineer following
                  graduation.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Software Engineer Co-op (Part-Time)</h3>
              <p className="company">Shamrock Trading Corporation</p>
              <p className="date">Present</p>
              <ul>
                <li>
                  Integrated fully with the core engineering team to deliver
                  production features and bug fixes.
                </li>
                <li>
                  Optimized database queries and backend performance for
                  high-traffic services.
                </li>
                <li>
                  Deployed full-stack enhancements to production environments
                  using CI/CD pipelines.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Software Engineer Intern</h3>
              <p className="company">Shamrock Trading Corporation</p>
              <p className="date">Summer 2025</p>
              <ul>
                <li>
                  Architected and developed scalable microservices using C# and
                  .NET to support high-volume internal operations.
                </li>
                <li>
                  Engineered a responsive, modern frontend dashboard using
                  React, Redux, and Material UI, significantly improving team
                  workflow efficiency.
                </li>
                <li>
                  Collaborated in an Agile environment to deliver robust
                  features, ensuring code quality through rigorous testing and
                  CI/CD practices.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Freelance Software Consultant</h3>
              <p className="date">Summer 2024</p>
              <ul>
                <li>
                  Designed and deployed cloud-native solutions on AWS,
                  leveraging SES for automated bulk email campaigns.
                </li>
                <li>
                  Developed high-performance RESTful API integrations to drive
                  real-time engagement dashboards.
                </li>
                <li>
                  Optimized web performance by implementing SSL, advanced
                  caching strategies, and speculative loading for sub-second
                  render times.
                </li>
                <li>
                  Automated critical business workflows using Python scripts,
                  reducing manual data entry time by 90%.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Sales Advisor</h3>
              <p className="company">Best Buy</p>
              <p className="date">October 2022 - Present</p>
              <ul>
                <li>
                  Consulted with clients to identify technical requirements and
                  recommend tailored hardware solutions.
                </li>
                <li>
                  Consistently exceeded sales targets while fostering a
                  collaborative and positive team environment.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>IT Intern</h3>
              <p className="company">Vinita Public Schools</p>
              <p className="date">Summer 2023</p>
              <ul>
                <li>
                  Developed a custom secure password generator using Python to
                  enhance district-wide security compliance.
                </li>
                <li>
                  Automated device provisioning using Windows shell scripts,
                  streamlining the deployment of 500+ workstations.
                </li>
                <li>
                  Diagnosed and resolved complex network configuration issues
                  using Wireshark packet analysis.
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Research Extension Agent</h3>
              <p className="company">K-State</p>
              <p className="date">Summer 2022</p>
              <ul>
                <li>
                  Developed and taught curriculum on digital logic and block
                  programming
                </li>
                <li>Collected, pruned, and presented data for stakeholders</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="glass-box">
            <h2 className="section-title">Featured Projects</h2>

            <div className="project-item">
              <h3>Flavr - Food Recommendation Platform</h3>
              <a
                href="https://github.com/HoldenV/flavr"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                github.com/HoldenV/flavr
              </a>
              <ul>
                <li>
                  Engineered a serverless backend architecture using Firebase
                  and Python Cloud Functions for scalability and low
                  maintenance.
                </li>
                <li>
                  Developed a cross-platform mobile application using Flutter
                  and Material Design 3, ensuring a consistent UX across
                  devices.
                </li>
                <li>
                  Implemented a custom collaborative filtering algorithm to
                  deliver personalized recommendations based on user behavior.
                </li>
                <li>
                  Integrated third-party REST APIs for real-time restaurant data
                  and geolocation services.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>SimWall - Cellular Automaton Engine</h3>
              <a
                href="https://github.com/HoldenV/simWall"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                github.com/HoldenV/simWall
              </a>
              <ul>
                <li>
                  Built a high-performance desktop application using Electron
                  and React to simulate complex cellular automata.
                </li>
                <li>
                  Optimized rendering algorithms to handle large-scale grid
                  simulations at 60+ FPS.
                </li>
                <li>
                  Designed a modular architecture allowing for easy
                  implementation of new automaton rules and visualization modes.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Noteably - AI-Powered Note Taking</h3>
              <a
                href="https://devpost.com/software/noteably"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                devpost.com/software/noteably
              </a>
              <ul>
                <li>
                  <strong>Awarded Best Use of Google Cloud</strong> at
                  Hackathon.
                </li>
                <li>
                  Leveraged Google Cloud Speech-to-Text API to transcribe audio
                  lectures in real-time.
                </li>
                <li>
                  Integrated a custom NLP model to summarize transcripts and
                  automatically generate structured study notes.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Quash - UNIX Shell Emulator</h3>
              <a
                href="https://github.com/HoldenV/quash"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                github.com/HoldenV/quash
              </a>
              <ul>
                <li>
                  Implemented a custom Unix-like shell in C++ supporting piping,
                  redirection, and background processes.
                </li>
                <li>
                  Designed efficient process management and job control systems
                  using low-level system calls.
                </li>
                <li>
                  Demonstrated strong understanding of operating system
                  concepts, memory management, and concurrency.
                </li>
              </ul>
            </div>

            <div className="project-item">
              <h3>Battleship Spin-Off</h3>
              <a
                href="https://github.com/JSpenJS17/EECS581_Project1"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                github.com/JSpenJS17/EECS581_Project1
              </a>
              <ul>
                <li>
                  Contributed as an individual developer on a 5-person Agile
                  Scrum team
                </li>
                <li>
                  Developed GUI with PyGame and manipulated data using Pandas
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="glass-box">
            <h2 className="section-title">Notable Coursework</h2>
            <ul className="skills-list">
              <li>Software Engineering</li>
              <li>Data Structures & Algorithms</li>
              <li>Embedded Systems</li>
              <li>Computer Architecture</li>
              <li>Operating Systems</li>
              <li>Communication Networks</li>
              <li>Database Systems</li>
              <li>Introduction to Artificial Intelligence</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="glass-box">
            <h2 className="section-title">Notable Achievements</h2>
            <ul className="skills-list">
              <li>Google Data Analytics Certification</li>
              <li>
                SkillsUSA 2022 State Champion: IoT and Electronics Technology
              </li>
              <li>SkillsUSA 2022 National Champion: IoT</li>
              <li>Kansas Honors Scholar and Governor’s Scholar</li>
              <li>Spanish Club Scholarship Recipient</li>
            </ul>
          </div>
        </section>

        <footer className="footer">
          <div className="glass-box">
            <p>
              The background animation is an implementation of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Brian%27s_Brain"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brian's Brain
              </a>
              , a cellular automaton.
            </p>
            <p className="last-updated">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
