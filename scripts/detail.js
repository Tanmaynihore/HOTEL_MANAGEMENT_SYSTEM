function onclick(){
    var adultnum=document.getElementById('adult').value;
    var todate=new Date(document.getElementById('todate').value);
    var fromdate=new Date(document.getElementById('fromdate').value);
    return parseInt((todate-fromdate)/(24*3600*1000))*adultnum*1000;
}
function Func(){
    if(document.getElementById('todate')){
        document.getElementById('price').value=onclick();
    }
}