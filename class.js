//const schoolFees = 1200000;
//const level = "level100";
//const percent = 25/100;

//const percentDiscount = percent * schoolFees;
//const discountFee = schoolFees - percentDiscount;
//console.log(discountFee);
//level 100 = 25
//level 200 = 30
//level 300 = 35
//level 400 = 40
//level 500 = 45
//
//







const studentName = prompt("Enter your name")
const schoolFees = 1200000;
const level = prompt("What level are you currently in? 100 or 200 ...")
//let percent 
let percentDiscount;
let discountFee;


function calDiscount(percent) {
     percentDiscount = percent * schoolFees;
     discountFee = schoolFees - percentDiscount;
     return discountFee;
}

if(level == "100"){
    console.log(level);
    let percent = 25/100;
    calDiscount(percent);
alert(`Hello ${studentName},the discounted fees for ${level}level is now: N${discountFee}`);
} else if(level == "200") {
    percent = 30/100
    calDiscount(percent);
    alert(`Hello ${studentName},the discounted fees for ${level}level is now: N${discountFee}`);
} else if(level == "300") {
    let percent = 35/100
    calDiscount(percent);
    alert(`Hello ${studentName},the discounted fees for ${level}level is now: N${discountFee}`);
} else if(level == "400") {
    let percent = 40/100
    calDiscount(percent);
    alert(`Hello ${studentName},the discounted fees for ${level}level is now: N${discountFee}`);
} else if(level == "500") {
    let percent = 45/100
    calDiscount(percent);
    alert(`Hello ${studentName},the discounted fees for ${level}level is now: N${discountFee}`);
} else {
    alert("you are not a student  getout!!!!");
}

percentDiscount = percent * schoolFees;
discountFee = schoolFees - percentDiscount;
console.log(discountFee);








const today = new Date();
const h = today.getHours();
console.log(h);

if (h < 12) {
    if (h === 6) {
        console.log("Alarm!!!!; Wake Up");
        }
    console.log('Good Morning');
} else if (h < 16) {
    console.log('Good Afternoon')
} else if (h < 20) {
    console.log('Good Evening')
} else {
    console.log('Good Night')
}

