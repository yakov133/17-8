//targil 1
const button = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");


button.addEventListener("click",function(){
    button.innerText = "I was click";
})


//targil 2
btn1.addEventListener("click",function(){
    alert(`button 1 was click`)
})
btn2.addEventListener("click",function(){
    alert(`button 2 was click`)
})
btn3.addEventListener("click",function(){
    alert(`button 3 was click`)
})
btn4.addEventListener("click",function(){
    alert(`button 4 was click`)
})

//targil 3
const arrClasses = document.getElementsByClassName("targil3");

for(let i = 0; i < arrClasses.length; i++){
    arrClasses[i].addEventListener("click",function(){
        console.log( arrClasses[i].innerText );
    })
}

// targil 4 And targil 5
let counter = 0;
const screen = document.getElementById("screen");
const add = document.getElementById("Add");
const omit =  document.getElementById("Omit");

add.addEventListener("click", function(){
    counter++;
    screen.innerText = counter;
})

omit.addEventListener("click",function(){
    counter--;
    screen.innerText = counter;
})

//targil 7
let arrOfObjects = [
    {
        name:"book",
        price:100,
        description:"lala"
    },
    {
        name:"macbook",
        price:500,
        description:"computer"
    },
    {
        name:"iphone",
        price:400,
        description:"cell phone"
    },
    {
        name:"car",
        price:2000,
        description:"vehicle"
    },
    {
        name:"Bikes",
        price:250,
        description:"vehicle"
    },
    {
        name:"motorcycle",
        price:5000,
        description:"cool vehicle"
    },
];

function mostExpensive(arrOfObjects){
    let expensivePrice = 0;
    for(let i = 0; i < arrOfObjects.length; i++){

        if(arrOfObjects[i].price > expensivePrice){
            expensivePrice = arrOfObjects[i].price;
        }
    }
    console.log(`The most expensive price is ${expensivePrice}`);
}

function theCheapest(arrOfObjects){
    let cheapestPrice = Number.MAX_VALUE;
    for(let i = 0; i < arrOfObjects.length; i++){

        if(arrOfObjects[i].price < cheapestPrice){
            cheapestPrice = arrOfObjects[i].price;
        }
    }
    console.log(`The most cheapest price is ${cheapestPrice}`);
}

function discount(arrOfObjects){
    for(let i = 0; i < arrOfObjects.length; i++){
        arrOfObjects[i].price *= 0.7;
    }
    
}
console.log(arrOfObjects);
mostExpensive(arrOfObjects);
theCheapest(arrOfObjects);
discount(arrOfObjects)
console.log(arrOfObjects);