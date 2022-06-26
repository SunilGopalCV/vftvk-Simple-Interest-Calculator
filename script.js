function compute()
{
    //principal value
    var principal = parseInt(document.getElementById("principal").value);

    if(document.getElementById("principal").value == ''){
        alert('Enter the principal amount, it cannot be blank');
        document.getElementById("principal").focus();
        return;
    }

    //validation for principal textbox if value entered is zero or negative.
    if(principal <= 0 ){
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return;
    }
    //rate value
    var rate = parseInt(document.getElementById("rate").value);
    //years value
    var years = parseInt(document.getElementById("years").value);

    //variable to hold the simple interest
    var interest = (principal * years * rate) /100;

    var year = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}
  
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+'%';
} 
