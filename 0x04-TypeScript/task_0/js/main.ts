// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "Amadu",
  lastName: "Hamza",
  age: 40,
  location: "Salaga",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 37,
  location: "Ghana",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create table and tbody elements
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Set table background color
table.style.background = "pink";
table.appendChild(tbody);

// Iterate over studentsList and create rows with name and location cells
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  // Set cell text content
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Apply cell styling
  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  // Append cells to the row
  row.appendChild(nameCell);
  row.appendChild(locationCell);

  // Append the row to the tbody
  tbody.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
