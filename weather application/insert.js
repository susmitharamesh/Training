var selectedRow=null
let count=1;
function loc()
{
  let location=document.getElementById('location').value;
  var table=document.getElementById('table');
  newRow=table.insertRow(-1);
  let cell1=newRow.insertCell(0)
  cell1.innerHTML=count;
  count++;
  let cell2=newRow.insertCell(1);
  let cell3=newRow.insertCell(2);
  cell2.innerHTML=location;
  cell3.innerHTML=`<button onclick"onshowup(this)">DISPLAY</button>
  <button onclick=onDelete(this)">REMOVE</button`;
}
