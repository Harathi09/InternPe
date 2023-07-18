function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    var displayValue = document.getElementById('display').value;
    var result;
  
    try {
      result = eval(displayValue);
    } catch (error) {
      result = 'Invalid input';
    }
  
    document.getElementById('display').value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  function removeOne() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }
  
  function calculatePi() {
    var result = Math.PI;
    document.getElementById('display').value = result;
  }
  function calculateLog() {
    var inputValue = parseFloat(document.getElementById('display').value);
    var result;
  
    if (isNaN(inputValue)) {
      result = 'Invalid input';
    } else if (inputValue <= 0) {
      result = 'Invalid value for logarithm';
    } else {
      result = Math.log10(inputValue);
    }
  
    document.getElementById('display').value = result;
  }
  function calculateSquareRoot() {
    var inputValue = parseFloat(document.getElementById('display').value);
    var result;
    if(inputValue<0){
        result="invalid value for square root";
    }
    else{
        result=Math.sqrt(inputValue);
    }
  
    document.getElementById('display').value = result;
  }
      
  
  function setDefaultDisplay() {
    updateDisplay('0');
  }
  
