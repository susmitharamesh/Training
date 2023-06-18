
let formContainer = document.getElementById("form");
let tableContainer = document.getElementById("table");
let location=document.getElementById("location")

fetch("./component/form.html")
  .then((response) => response.text())
  .then((html) => {
    formContainer.innerHTML = html;
  });
fetch("./component/table.html")
  .then((response) => response.text())
  .then((html) => {
    tableContainer.innerHTML = html;
  });

let form = document.getElementById("form");
form.addEventListener("button", (event) => {
  try {
    event.preventDefault();

    let locationInput = document.getElementById("form");
   
    let location = locationInput.value;
   

    if (location==target) {
      
      console.log("form", location);
      displayList();
    }
  } catch (error) {
    alert(`App Error: ${error.message}`);
  }
});
// var table=document.getElementById("form").onclick=function(add)
// {
//     document.getElementById("table").style.display="block";
//     var table=document.getElementById("table");
//     var row=table.insertRow(-1)
// locationInput.value=row;
// }
