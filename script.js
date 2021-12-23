'use strict';
document.getElementById('enter').addEventListener('click', function(){
    let name=document.getElementById('name');
    let pincode=document.getElementById('pincode');
    let state=document.getElementById('state');
    let country=document.getElementById('country');
    let table=document.getElementById('tabledata');
    let count=table.rows.length;
    let row=table.insertRow(count);
    row.insertCell(0).innerHTML=name.value;
    row.insertCell(1).innerHTML=pincode.value;
    row.insertCell(2).innerHTML=state.value;
    row.insertCell(3).innerHTML=country.value;

});
