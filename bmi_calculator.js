window.onload = () => {
    let button = document.querySelector("#btn");
    console.log(button);
    button.addEventListener("click", calculateBmi);
};
function calculateBmi(){
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result_bmi");
    if(height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid height !";
    else if(weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid weight !";
    else{
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
        console.log(bmi);
        if(bmi < 18.6) result.innerHTML = 
        `Under weight:${bmi}`;
        else if(bmi > 18.6 && bmi < 24.9)
          result.innerHTML = 
        `Normal:${bmi}`;
        else result.innerHTML = 
        `Overweight:${bmi}`;
    }
}