
// Create an object
let person = {
    firstName: "abc",
    lastName: "xyz",
    age: 22
};

// Get table reference
let table = document.getElementById("infoTable");

// Loop through object keys and values
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = key;
        cell2.innerHTML = person[key];
    }
}
