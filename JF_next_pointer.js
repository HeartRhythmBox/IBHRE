
//nextBlk
function next(n) {
    var block = document.getElementsByClassName("block");
    block[n].scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
            }

//pointer
function pointer() {
    var x = event.clientX;
    var y = event.clientY;
    var p = document.getElementsByClassName("pointer");
    p[0].style.display = "inline";
    p[0].style.left = x+"px"; 
    p[0].style.top = y+"px";
    }
