let eid = 100;
let ename = "John Doe";
let esalary = 50000;
let isActive = true;
let department = "Engineering";
let skills = ["JavaScript", "Python", "Java"];
let address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
};
document.getElementById("employeeInfo").innerHTML = `
Employee ID: ${eid}<br>
Employee Name: ${ename}<br>
Employee Salary: $${esalary}<br>
Active Employee: ${isActive}<br>
Department: ${department}<br>
Skills: ${skills.join(", ")}<br>
Address: ${address.street}, ${address.city}, ${address.state} ${address.zip}`;