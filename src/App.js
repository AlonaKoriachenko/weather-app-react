import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://cosmic-khapse-25c262.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Alona Koriachenko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AlonaKoriachenko/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
