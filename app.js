// 1
var name = prompt ("Please enter your name");
var weight = Number (prompt("please enter your weight in kg") );



function add (name,weight) {
    let convertedWeight = (weight * 2.2);
   
    let result =(`Your name is ${name} and you weigh ${convertedWeight} pounds`);
    return result;
};

let finalResult = add(name, weight);
console.log(finalResult);

window.alert(finalResult);
