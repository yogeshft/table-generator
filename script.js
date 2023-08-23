const addDataButton = document.getElementById("add-data-button");
const formContainer = document.getElementById("form-container");
const dataForm = document.getElementById("data-form");
const dataTableBody = document.querySelector("#data-table tbody");
const deleteBtn = document.getElementById("delete-btn");

addDataButton.addEventListener("click", () => {
    formContainer.classList.remove("hidden");
    deleteBtn.style.display = "none";
});

dataForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const mobileNumber = document.getElementById("mobile-number").value;
    const emailAddress = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const color = document.getElementById("color").value;
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${mobileNumber}</td>
        <td>${emailAddress}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td><span style="background-color: ${color}; width: 20px; height: 20px; display: inline-block;"></span></td>
    `;
    dataTableBody.appendChild(newRow);
    dataForm.reset();
    formContainer.classList.add("hidden");
    deleteBtn.style.display = "inline";
});

function deleteRows() {
    let rowCount = dataTableBody.rows.length;
    if (rowCount > 1) {
        dataTableBody.deleteRow(rowCount - 1);
        rowCount--;
    } else {
        alert("There should be at least two row");
    }
}
// Cancel button functionality
const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => {
    formContainer.classList.add("hidden");
    deleteBtn.style.display = "inline";
    overlay.style.display = "none"; 
});  
