
function HeightFeetChange(){
    let heightFeet = document.getElementById("rangeHeightFeet").value;
    document.querySelector(".lblHeightFeet1").innerHTML = heightFeet;
    document.querySelector(".lblHeightFeet2").innerHTML = heightFeet;
    BMI();
}

function HeightInchesChange(){
    let heightInch = document.getElementById("rangeHeightInches").value;
    document.querySelector(".lblHeightInches1").innerHTML = heightInch;
    BMI();
}
function WeightChange(){
    let weight = document.getElementById("rangeWeight").value;
    document.querySelector(".lblWeight1").innerHTML = weight;
    document.querySelector(".lblWeight2").innerHTML = weight;
    BMI();
}

//feet to meter 
//multiply the unit by 0.304
//inches to meter
//m = in × 0.0254
function BMI(){
    let heightMeter =(parseFloat((document.getElementById("rangeHeightFeet").value)*0.304) + parseFloat((document.getElementById("rangeHeightInches").value)*0.0254));
    console.log(heightMeter);
    let weight = document.getElementById("rangeWeight").value;
    let bmi = ((weight)/(heightMeter**2)).toFixed(1);
    console.log(bmi);
    document.querySelector(".bmi1").innerHTML = `<h5>${bmi}</h5>`;
    document.querySelector(".bmi2").innerHTML = bmi;
    document.getElementById("bmi3").innerHTML = bmi;
    var fill = document.getElementById("fill");
    var msg = document.getElementById("msg");
    if(bmi<18.5){
        msg.innerHTML = "Under Weight";
        msg.className ="text-warning";
        fill.className ="text-warning";
    }else if(bmi>=18.5 && bmi < 24.9){
        msg.innerHTML = "Normal Weight";
        msg.className ="text-success";
        fill.className ="text-success";
    }else if (bmi >= 25.0 && bmi < 29.9){
        msg.innerHTML = "Over Weight";
        msg.className="orange";
        fill.className="orange";
    }else if(bmi >= 30){
        msg.innerHTML = "Obese";
        msg.className ="text-danger";
        fill.className ="text-danger";
    }

}

// bmi < 18.0 => Under Weight  yellow
// bmi >= 18.0 && bmi <24.9 => Normal Weight   green
// bmi >= 25.0  && bmi < 29.9 => Over Weight     orange
// bmi >= 30 => Obese    red

    




function bodyload(){
    BMI();
}