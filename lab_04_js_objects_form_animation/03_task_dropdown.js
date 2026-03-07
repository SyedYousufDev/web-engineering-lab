const dropdown = document.getElementById("myDropdown");
const textbox = document.getElementById("myTextbox");
const button = document.getElementById("newEntryBtn");

function showTextbox() {
    button.style.display = "none";        
    dropdown.style.display = "none";      
    textbox.style.display = "inline";     
    textbox.focus();                       
}


textbox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const value = textbox.value.trim();
        if (value) {
            const option = document.createElement("option");
            option.text = value;
            dropdown.add(option);        
            textbox.value = "";           
            textbox.style.display = "none"; 
            dropdown.style.display = "inline"; 
            button.style.display = "inline"; 
            
        }
    }
});