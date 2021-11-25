function generate (){
    let number1 = document.getElementById("field1").value;
    let number2 = document.getElementById("field2").value;
    
    let anountofrandomNumbers = parseInt(number1) ;

    let randomNumber = Math.floor(Math.random() * anountofrandomNumbers) + parseInt(number1);
    document.getElementById("randomNumber").value = randomNumber;
}