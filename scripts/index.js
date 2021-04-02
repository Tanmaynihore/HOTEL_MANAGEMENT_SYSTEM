function onclick(){
    var x=document.getElementById('viewmore');
    if(x.textContent === "View More"){
        document.getElementById('ViewMoreTora').style.display="flex";
        x.innerText="View Less";
    }
    else{
        document.getElementById('ViewMoreTora').style.display="none";
        x.innerText="View More";
    }

}