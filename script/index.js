
//document.getElementById('menu').
// mouseover / mouseout
// querySelector()
// object.addEventListener(event, function);

document.getElementById("menu").hidden = true;

let barMenu = document.getElementById("barMenu");

barMenu.addEventListener("mouseenter",() => {
    document.getElementById("menu").style.display = "block";  
});

barMenu.addEventListener("mouseleave", () => {
  document.getElementById("menu").style.dispaly = "none";
});


