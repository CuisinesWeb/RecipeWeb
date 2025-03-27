import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import CuisineCards from "./components/CuisineCards";
import Footer from "./components/footer";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/hello") // Call Flask API
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />
      <CuisineCards />
      <h2>{message ? message : "Loading..."}</h2> {/* Display API message */}
      <Footer />
    </div>
  );
}

export default App;
