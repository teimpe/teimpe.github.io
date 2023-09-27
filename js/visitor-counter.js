        // Function to increment and display the visitor count
        function incrementVisitorCount() {
            // Send an AJAX request to the server to log the visitor's IP address
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'log-visitor.php', true);
            xhr.send();

            // Increment and display the visitor count
            var visitorCountElement = document.getElementById('visitorCount');
            var currentCount = parseInt(visitorCountElement.textContent);
            visitorCountElement.textContent = currentCount + 1;
        }

        // Call the incrementVisitorCount function when the page loads
        window.onload = incrementVisitorCount;