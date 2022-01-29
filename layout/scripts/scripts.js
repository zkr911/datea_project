function myFunctionMenu(x){
    x.classList.toggle("change");
}

function myFunctionPrueba() {
    var x = document.getElementById("myNavegacion");
        if (x.className === "navegacion") {
            x.className += " responsive";
        } 
        else 
        {
            x.className = "navegacion";
        }
}