import React, { useEffect, useState } from 'react';

const OpenData = () => {

    const url = 'https://random-data-api.com/api/v2/beers';
    
    // State variables to hold beer data , and alcohol servings
    const [beerData, setBeerData] = useState(null);
    const [alcoholServings, setAlcoholServings] = useState(0);

    // Function to fetch beer data
    const getData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setBeerData(json);

            
            // Converts the alcohol percentage from a string to a number
            const alcohol = parseFloat(json.alcohol.replace('%', '')); 
            const servings = (alcohol / 5).toFixed(2); // 5% alcohol = 1 serving
            setAlcoholServings(servings);
    };

    // Fetch beer data when component loads
    useEffect(() => {
        getData();
    }, []);

   return (
        <div>
            <h1>Random Beer</h1>
            {/* Check if beerData is available before rendering */}
            {beerData && (
                <div>
                    <p><strong>Brand:</strong> {beerData.brand}</p>
                    <p><strong>Name:</strong> {beerData.name}</p>
                    <p><strong>Style:</strong> {beerData.style}</p>
                    <p><strong>Malts:</strong> {beerData.malts}</p>
                    <p><strong>Alcohol Content:</strong> {beerData.alcohol}%</p>
                    <p><strong>Alcohol Servings:</strong> {alcoholServings} servings</p>
                </div>
            )}
            <button onClick={getData}>Get Another Beer</button>
        </div>
    );
}

export default OpenData;