function openNav() {
    document.getElementById("mySidenav").style.width = "auto";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function scroll() {
    hamburger = document.getElementById("topnav");
    title = document.getElementById("topnavTxt");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        hamburger.style.width="fit-content";
        hamburger.style.backgroundColor = "transparent";
        hamburger.style.fontSize = "1.5vmax";
        title.style.display="none";}
       
    else {
        hamburger.style.width="100%";
        hamburger.style.backgroundColor = "#ffc30b";
        hamburger.style.fontSize = "2.5vmax";
        title.style.display="inline";}
}