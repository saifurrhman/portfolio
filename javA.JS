<script>
  // Function to handle form submission
  function handleFormSubmit(event) 
    event.preventDefault(); // Prevent form submission

    // Get the email input value
    var emailInput = document.getElementById("mail").value;

    // Perform basic email validation
    if (emailInput.trim() === "") {
      alert("Please enter your email.")
      
    }

    // Show a success message if the email input is valid
    alert("Thank you! Let's get started!");
    document.getElementById("mail").value = "";

    // Return true to indicate that the form is valid
    return true;
  

  // Add an event listener to the form submit button
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
</script>