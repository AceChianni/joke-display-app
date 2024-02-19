"use strict"

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
      const jokeContent = document.getElementById('joke-content');
      // Check if the response contains a joke
      if (data.type === 'single') {
        jokeContent.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === 'twopart') {
        jokeContent.innerHTML = `<strong>${data.setup}</strong><br>${data.delivery}`;
      } else {
        jokeContent.innerHTML = '<p>Unexpected response format</p>';
      }
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Error fetching joke:', error.message);
    });
}

// Call the function to fetch and display a joke
fetchJoke();
