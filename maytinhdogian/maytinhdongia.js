let number = "";
let operator = "";
let Array = []  ;
function Number(Value) {
    number = document.getElementById("result").value;
    document.getElementById("result").value = number+""+ Value;
    number = Value;
    Array.push(number);
}
function Operator(Value) {
    operator = document.getElementById("result").value;
    document.getElementById("result").value = operator +""+Value;
    operator = Value;
    Array.push(operator);
}
function Result() {
    var result="";
    for(let i = 0;i<Array.length;i++)
    {
        result+=Array[i];
        console.log(result);
    }
    result = eval(result);
    document.getElementById("result").value=result;
}
function Clear() {
    number = "";
    operator = "";
    Array = [];
    document.getElementById("result").value="";
}