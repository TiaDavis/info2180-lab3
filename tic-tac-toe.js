window.addEventListener('load',function(){
    var xOro=false;
    var xcount=0;
    var ocount=0;
    var showboard= document.querySelectorAll('body #board div');
    for(let i=0;i<showboard.length;i++){
        showboard[i].classList.add('square');
    }

    for(let i=0;i<showboard.length;i++){
        showboard[i].addEventListener('click', marksqr);
    }
