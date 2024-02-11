async function apiCaller(url, method, data) {

    let completeUrl = "http://127.0.0.1:3000/" + url;

    try {
        const response = await fetch(completeUrl, {
            method: method, // or 'GET', 'PUT', 'DELETE', etc. depending on your API
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers required by your API
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json(); // Parse response JSON
        // Do something with the response data
        return responseData;
    } catch (error) {
        // Handle errors here
        console.error('Error:', error);
        throw error; // Re-throw the error for the caller to handle if needed
    }
}

export default apiCaller;