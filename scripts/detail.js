
function GetDays(){
    var adultNumber =document.getElementById("adults").value;
    var toDate= new Date(document.getElementById("toDate").value);
    var fromDate = new Date(document.getElementById("fromDate").value);
    return parseInt((toDate - fromDate) / (24 * 3600 * 1000))*adultNumber*1000;
}

function cal(){

if(document.getElementById("toDate")){
document.getElementById("total").value=GetDays();
}  
}

