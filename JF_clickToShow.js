function changeTxt(name){
    var id = name.id;
    document.getElementById(id).innerHTML =id;
}

function show(name){
    var id = name.id + 'Txt';
    document.getElementById(id).style.display = "block";
}

function showCell(name){
    document.getElementById(name).style.display = "block";
}