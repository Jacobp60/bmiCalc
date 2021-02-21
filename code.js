let myRules = {

    weight:
        {
            required: true,

            min: 88,

            max: 353,

            digits: true
        },
    height:
        {
            required: true,

            min: 59,

            max: 79,

            digits: true

        },
    username:
        {
            required:true,


        }
};
let myMessage =
    {
        weight:
            {
                required: "Please Enter weight!",

                min: "Value is to small",

                max: "Value is to big",

                digits: "Please Enter valid digit number!"

            },
        height:
            {
                required: "Please Enter height!",

                min: "Value is to small",

                max: "Value is to big",

                digits: "Please Enter valid digit number!"

            },
        username:{
            required:"Please Enter your name!"


        }

    };

$(document).ready(function (event){

   $("form").submit(calcBMI);


});

function calcBMI(event){

    event.preventDefault();

    let category;

    let name = $("input#name").val();

    let weight = $("input#weight").val();

    let height = $("input#height").val();

    var bmi = (weight/(height * height)) * 703;

    bmi = bmi.toFixed(1);

    if(bmi <= 18.5 && bmi >= 15){

        category = "Underweight";

    }else if(bmi > 18.5 && bmi <= 25){

        category = "Healthy Weight"
    }else if (bmi > 25 && bmi <= 30){

        category = "Over Weight"
    }else if (bmi > 25 && bmi <= 30){

        category = "Obese Class I"
    }else if (bmi > 30 && bmi <= 40){

        category = "Obese Class II"
    }else if (bmi > 40){

        category = "Obese Class III"
    }else{
        category = "Severely underweight"
    }


    $("p#message").text(`${name}, your Body Mass Index is ${bmi} which falls into the category of ${category}.`);


}

