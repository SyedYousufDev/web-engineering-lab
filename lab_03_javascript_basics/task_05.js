

    let languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];

   
    let dropdown = document.getElementById("myDropdown");

    
    languages.forEach(function(item) {
      let opt = document.createElement("option"); 
      opt.value = item;                           
      opt.innerHTML = item;                       
      dropdown.appendChild(opt);                 
    });