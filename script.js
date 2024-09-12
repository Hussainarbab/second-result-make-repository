
function add() {
    const name = document.getElementById("name").value;
    const father = document.getElementById("father").value;
    const classl = document.getElementById("classl").value;
    const roll = document.getElementById("roll").value;
    const total = document.getElementById("total").value;
    const obtain = document.getElementById("obtain").value;

    
    if (!name || !father || !classl || !roll || !total || !obtain) {
        alert("Please fill out all the fields before adding.");
        return; 
    }

    document.getElementById("show").innerHTML += `Name :${name} <br> Father Name :${father} <br>
    Class : ${classl} <br> Roll Number : ${roll} <br> Total Marks : ${total} <br>
    Obtain Marks : ${obtain} <br><br>`;

    
    ["name", "father", "classl", "roll", "total", "obtain"].forEach(asaf => document.getElementById(asaf).value = "");
}
