const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();


  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  // const condtion = document.querySelector('#condtion');



  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a  valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight ${weight}`;
  } 
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = ''; 
    if(bmi<18.6)
      category = "you are under weight";
      // console.log("you are under weight")
    
    else if(bmi>=18.6 && bmi<=24.9){
      // console.log("you are in normal range ");
      category = "you are in normal range";
    }
    else{
      // console.log("overweight");
      category = "you are overweight";
      
      
    }
    result.innerHTML = `<span>${bmi}</span><br><span>${category}</span>`;

  }
    
});

