import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  // State variable to store the random beer
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    // Function to fetch a random beer
    const fetchRandomBeer = async () => {
      try {
        // Make a GET request to the /beers/random endpoint
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        // Update the randomBeer state with the response data
        setRandomBeer(response.data);
      } catch (error) {
        console.error("Error fetching random beer:", error);
      }
    };

    // Call the fetchRandomBeer function when the component mounts
    fetchRandomBeer();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Random Beer</h1>
      {/* Display the details of the random beer */}
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.description}</p>
    </div>
  );
}

export default RandomBeerPage;
