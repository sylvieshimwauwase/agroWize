import React, {useState} from "react";
// import axios from "axios";
import "../Search/SearchBar.css"

const SearchBar = () => {
  
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = async () => {
  //   try {
  //     // Make a GET request to your backend API with the search term
  //     const response = await axios.get(`/api/search?term=${searchTerm}`);
  //     setSearchResults(response.data.results); // Assuming your API returns an object with a results array
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //     // Handle error (e.g., show error message to user)
  //   }
  // };
  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        type="text"
        placeholder="Search"
        // value={searchTerm}
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src="/iconSearch.png" alt="image" />
       {/* <div className="searchResults">
        {searchResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
    </div> */}
    </div>
  );
};

export default SearchBar;
