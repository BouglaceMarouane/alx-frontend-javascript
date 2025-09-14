// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  
  const locationCell: HTMLTableCellElement = document.createElement('td');
  locationCell.textContent = student.location;
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
