// fetches data
import fetch from 'node-fetch';

// returns json response data
const fetchJSON = async(API_URL) => {
    let response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let responseData = await response.json();
    return responseData;
}

export { fetchJSON };
