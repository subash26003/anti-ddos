document.getElementById('sendRequestButton').addEventListener('click', function() {
    fetch('http://localhost:3000/')
        .then(response => {
            if (response.status === 429) {
                document.getElementById('responseMessage').textContent = 'Rate limit exceeded. Please try again later.';
            } else if (response.status === 403) {
                document.getElementById('responseMessage').textContent = 'Your IP has been blocked.';
            } else if (response.status === 200) {
                document.getElementById('responseMessage').textContent = 'Request successful!';
            }
        })
        .catch(error => {
            document.getElementById('responseMessage').textContent = 'An error occurred.';
        });
});
