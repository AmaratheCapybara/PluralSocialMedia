//navbar

// Get the link and notification elements
const notificationLink = document.getElementById('notificationLink');
const notification = document.getElementById('notification');

// Add a click event listener to the link
notificationLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action

    // Toggle the visibility of the notification dropdown
    notification.classList.toggle('show');
});

// Optional: Auto-hide the notification dropdown after 5 seconds
setTimeout(() => {
    notification.classList.remove('show');
}, 5000); // Auto-hide after 5 seconds (optional)

//post block

/// Trigger file input when the icon is clicked
document.getElementById('uploadIcon').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

// Optional: Handling the file input change event
document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    console.log('File selected:', file.name);
    // You can add more logic here to handle the uploaded file
  }
});