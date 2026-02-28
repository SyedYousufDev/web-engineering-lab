function calculateGrade() {
      // 1. Collect Personal Info
      let reg = prompt("Enter Registration Number:");
      let name = prompt("Enter Student Name:");
      let sem = prompt("Enter Semester:");
      // 2. Collect Marks (using Number() for math)
      let web = Number(prompt("Marks for Web Engineering:"));
      let cp = Number(prompt("Marks for Computer Programming:"));
      let oop = Number(prompt("Marks for Object Oriented Programming:"));
      let dsa = Number(prompt("Marks for Data Structures:"));
      let ai = Number(prompt("Marks for Artificial Intelligence:"));
      // 3. Calculations
      let total = web + cp + oop + dsa + ai;
      let percent = (total / 500) * 100;
      let grade;

      // 4. Grading Criteria
      if (percent >= 80) grade = "A";
      else if (percent >= 70) grade = "B";
      else if (percent >= 60) grade = "C";
      else if (percent >= 50) grade = "D";
      else grade = "F";
      // 5. Display in Tabular Format
      let output = `
        <table>
          <tr>
            <th>Reg No</th><th>Name</th><th>Sem</th>
            <th>Web</th><th>CP</th><th>OOP</th><th>DSA</th><th>AI</th>
            <th>Obtained</th><th>Grade</th>
          </tr>
          <tr>
            <td>${reg}</td><td>${name}</td><td>${sem}</td>
            <td>${web}</td><td>${cp}</td><td>${oop}</td><td>${dsa}</td><td>${ai}</td>
            <td>${total} / 500</td><td><strong>${grade}</strong></td>
          </tr>
        </table>`;

      document.getElementById("tableArea").innerHTML = output;
    }