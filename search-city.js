import "./styles.css";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import { useEffect, useState } from "react";

const cities = ["Jaipur", "Delhi", "Bangalore", "Pune"];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const results = cities.filter((person) =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const showModal = () => {
    console.log("asf");
    setModal(true);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => {
          return (
            <>
              <li onClick={showModal}>{item}</li>
              <SweetAlert
                title={item}
                show={modal}
                text="SweetAlert"
                onConfirm={() => setModal(false)}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}
