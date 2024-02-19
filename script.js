function fetchJoke() {
  // API URL
  const apiUrl = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

  // Fetch request
  fetch(apiUrl)
    .then(response => {
      // Check response status
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then(data => {
      // Check if the response contains a joke
      if (data.type === 'single') {
        console.log('Joke:', data.joke);
      } else if (data.type === 'twopart') {
        console.log('Setup:', data.setup);
        console.log('Delivery:', data.delivery);
      } else {
        console.log('Unexpected response format');
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Error fetching joke:', error.message);
    });
}

// Call the function to fetch and display a joke
fetchJoke();
