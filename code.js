//buttons id
document.getElementById('convert').onclick = tempConvert;
document.getElementById('reset').onclick = resetForm;
/**********************************************/
//Convert function
function tempConvert() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = document.getElementById("celsius").value; 
    if (fahrenheit) {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}
/************************************************/
//Reset function
function resetForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}
/**************************************************/