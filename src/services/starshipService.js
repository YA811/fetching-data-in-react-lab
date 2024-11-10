
const BASE_URL = 'https://swapi.dev/api/starships/';

//Create a service function to retrieve a list of starships. In your service function, use your BASE_URL when making a fetch() request.
const getStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.starships;
  } catch (error) {
    console.error('Error:', error);
  }
};

export {getStarships};



