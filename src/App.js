import './App.css';
import "./index.css";
import {BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";

function App() {
    const routes = useRoutes(true);

  return (
      <Router>
      <>
          <section className="h-screen w-full flex justify-center items-center">
              {routes}
          </section>
      </>
      </Router>
  )
}

export default App
