document.getElementById('complaintForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const complaintData = {
    id: document.getElementById('id').value.trim(),
    busNumber: document.getElementById('busNumber').value.trim(),
    busTitle: document.getElementById('busTitle').value.trim(),
    busDescription: document.getElementById('busDescription').value.trim()
  };

  // Validate form data (check for empty fields)
  if (!complaintData.id || !complaintData.busNumber || !complaintData.busTitle || !complaintData.busDescription) {
    alert('Please fill out all fields.');
    return;  // Prevent the submission if any field is empty
  }

  // Send the data via a POST request
  fetch('http://localhost:5000/complaints', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(complaintData)
  })
  
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // If response is successful, process the JSON data
    })
    .then(data => {
      console.log('Success:', data);
      // Provide feedback to the user about the success
      alert('Complaint submitted successfully!');
      // Clear form fields only after successful submission
      document.getElementById('complaintForm').reset();
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      // Provide user-friendly error feedback
      alert('There was an issue submitting the complaint. Please try again later.');
    });
});
