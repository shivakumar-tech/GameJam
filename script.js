let registrations = [];

// Function to handle form submission
function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const category = document.getElementById("category").value;

    if (name && email && category) {
        // Add data to registrations array
        registrations.push({
            Name: name,
            Email: email,
            Category: category
        });

        alert("Thank you for registering, " + name + "!");
        document.getElementById("registrationForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to export registrations to Excel
function exportToExcel() {
    if (registrations.length === 0) {
        alert("No data available to export.");
        return;
    }

    // Convert the data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(registrations);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

    // Export the workbook
    XLSX.writeFile(workbook, "GameJam_Registrations.xlsx");
}
