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

function toggle(c,n) {
    var className = document.getElementsByClassName(c);
    var i;
    for (i=0;i<className.length;i++) {
        className[i].style.display = "none";
    }
    className[n-1].style.display = "block";
    className[n-1].scrollIntoView ({behavior:"smooth"})
}