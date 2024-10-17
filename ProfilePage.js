

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