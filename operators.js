
//checking weather someone is eligible to both
var gender = "female";
var gender2 ="male";
var age = 18;


if(gender == "female" && age >= 18){
    console.log("you can bet");
}

else{
    console.log("you can't bet");
}


//or

if (gender == "female" || gender2 == "male"){
    console.log("you can register");
}

else{
    console.log("you are a robot")
}

//student object
const Student = {
    //properties of the object
    names:"John",
    age:20,
    city:"New yolk",

//method of the object
sayHello:function (){
    console.log("Hello");
}
};
console.log(Student.names);
console.log(Student.city);
console.log(Student.age);


console.log(Math.floor(Math.random()*10));


let calculator = { 
    add: function(a,b){
        return a + b;
    },
    substract : function(a,b){
        return a - b;
    },

};

console.log(calculator.substract(5,3));
console.log(calculator.add(12,3));