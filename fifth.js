console.log("Question No. 1");
var ab = +prompt("Enter Week Number(1-7):");
switch (ab) {
    case 1:
    console.log("Day " + ab + " Monday "); 
        break;
    case 2:
    console.log( "Day " + ab + " Tuesday " );
        break;
        case 3:
    console.log( "Day " + ab + " Wednesday " );
        break;
        case 4:
    console.log( "Day " + ab + " Thursday " );
     break;
    case 5:
     console.log("Day " + ab + " Friday " );
     break;
     case 6:
    console.log("Day " + ab + " Saturday " );
     break;
     case 7:
        console.log( "Day " + ab + " Sunday " );
         break;                                    

    default:
console.log("Choose Again. Invalid input!")
        break;
}
// /-------------------------------------------------------------------------/ 
console.log("Question No. 2");
var cd = +prompt("Enter Month Number(1-12):");
switch (cd) {
    case 1:
        console.log(" January 31 days")
        break;
    case 2:
    console.log(" February 28/29 days")
     break;    
     case 3:
    console.log(" Mar 31 days")
    break; 
    case 4:
     console.log(" April 30 days")
    break;  
    case 5:
    console.log(" May 31 days")
    break;    
    case 6:
     console.log(" June 30 days")
    break;     
     case 7:
    console.log(" July 31 days")
    break; 
    case 8:
     console.log(" August 31 days")
    break;
    case 9:
     console.log(" September 30 days")
    break; 
    case 10:
        console.log(" October 31 days")
       break; 
       case 11:
        console.log("November 30 days")
       break;
       case 12:
        console.log(" December 31 days")
       break;
    default:
        console.log("Invalid Input!")
        break;
}
// ----------------------------------------------------------------//
console.log("Question No. 3");
var eg = prompt("Enter an alphabet to check whether is vowel or consonant:");
switch (eg) {
    case "A":
        console.log(eg + " Vowel")
        break;
    case "E":
        console.log(eg + " Vowel")
        break;
    case "I":
        console.log( eg + " Vowel")
        break;
    case "O":
        console.log( eg + " Vowel")
        break;
    case "U":
        console.log( eg + " Vowel")
        break;
    case "a":
        console.log( eg + " Vowel")
        break;
    case "e":
        console.log(eg + " Vowel")
        break;
    case "i":
        console.log( eg + " Vowel")
        break;
    case "o":
        console.log(eg + " Vowel ")
        break;
    case "u":
        console.log(eg + " Vowel" )
        break;
    default:
        console.log( eg + " consonant ")
        break;
}
// ==============================================//
console.log("Question No. 4");
var nm = +prompt("Enter a Number:");
var max = +prompt("Enter another Number:");
switch (true) {
    case (nm > max):
        console.log( nm + " Num1 is max " )
        break;
    case (nm < max):
        console.log(max + " Num2 is max " )
        break;
    case (nm == max):
        console.log("Num1 is equal to Num2");
        break;

    default:
        console.log("Invalid Input")
        break;
}
// =========================================================//
console.log("Question No. 5");
var eve = +prompt("Enter a Number:");
switch (true) {
    case (eve % 2 == 0):
        console.log("Number is even " + eve)
        break;
    case (eve % 2 == 1):
        console.log("Number is odd " + eve)
        break;
    default:
        console.log("Invalid Input")
        break;
}
// =====================================================//
console.log("Question No. 6");
var ck = +prompt("Enter a Number:")
switch (true) {
    case (ck > 0):
        console.log("Number is Positive " + ck)
        break;
    case (ck < 0):
        console.log("Number is Negative " + ck)
        break;
    case (ck == 0):
        console.log("Number is zero " + ck)
        break;

    default:
        console.log("Invalid Number")
        break;
}
// ========================================================//
console.log("Question No. 7 ");
var a = +prompt("Enter Number for a:");
var b = +prompt("Enter Number for b:");
var c = +prompt("Enter Number for c:");
let d = b * b - 4 * a * c;
let sqrt_val = Math.sqrt(Math.abs(d));
switch (true) {
    case (d > 0):
        console.log("Roots are real and different ");
        console.log((-b + sqrt_val) / (2 * a) + "\n" + (-b - sqrt_val) / (2 * a));
        break;
    case (d == 0):
        console.log("Roots are real and same ");
        console.log(-b / (2 * a) + "\n" + -b / (2 * a));
        break;

    default:
        console.log("Roots are complex ");
        console.log(-b / (2 * a) + " + i" + sqrt_val + " \n " + -b / (2 * a) + " - i" + sqrt_val);

        break;
}
// ======================================================================================//
console.log("Question No. 8");

const a = parseFloat(prompt("Enter a Number:"));
const op = prompt("choose any operator(+,-,*,/,%)");
const b = parseFloat(prompt("Enter another Number"));
var c;
switch (op) {
    case '+':
        c = a + b;
        console.log(`${a} + ${b} = ${c}`);
        break;
    case '-':
        c = a - b;
        console.log(`${a} - ${b} = ${c}`);
        break;
    case '/':
        c = a / b;
        console.log(`${a} / ${b} = ${c}`);
        break;
    case '*':
        c = a * b;
        console.log(`${a} * ${b} = ${c}`);
        break;
    case '%':
        c = a % b;
        console.log(`${a} % ${b} = ${c}`);
        break;
    default:
        console.log("Invalid Input")
        break;
}

// =================================================================

console.log("Question No. 9");

var ch = prompt("Enter any Character:");
if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
    console.log(`${ch} is alphabet.`);
}
else if (ch >= '0' && ch <= '9') {
    console.log(`${ch} is Digit.`);
}
else {
    console.log(`${ch} is Special Character.`);
}

// ===========================================================================
console.log("Question No. 10");
var xp = prompt("Enter any Character:");
if (xp >= 'a' && xp <= 'z') {
    console.log(`${xp} is lower alphabet`)
}
else if (xp >= 'A' && xp <= 'Z') {
    console.log(`${xp} is Upper alphabet`)
}
else {
    console.log("Invalid Character")
}
// ============================================================================
console.log("Question No. 11");
var week = parseFloat(prompt("Choose Week Day(1-7):"));
if (week == 1) {
    console.log("Monday!");
}
else if (week == 2) {
    console.log("Tuesday!");
} else if (week == 3) {
    console.log("Wednesday!");
} else if (week == 4) {
    console.log("Thrusday!");
} else if (week == 5) {
    console.log("Friday!");
} else if (week == 6) {
    console.log("Saturday!");
} else if (week == 7) {
    console.log("Sunday!");
}
else {
    console.log("Invalid Input")
}
// ====================================================================
console.log("Question No. 12");
var mnth = parseFloat(prompt("Choose Month Number(1-12):"));
if (mnth == 1) {
    console.log("January 31 days!")
} else if (mnth == 2) {
    console.log("February 28/29 days!")
} else if (mnth == 3) {
    console.log("March 31 days!")
} else if (mnth == 4) {
    console.log("April 30 days! ")
} else if (mnth == 5) {
    console.log("May 31 days!")
} else if (mnth == 6) {
    console.log("June 30 days!")
} else if (mnth == 7) {
    console.log("July 31 days!")
} else if (mnth == 8) {
    console.log("August 31 days!")
} else if (mnth == 9) {
    console.log("September 30 days!")
} else if (mnth == 10) {
    console.log("October 31 days!")
} else if (mnth == 11) {
    console.log("November 30 days!")
} else if (mnth == 12) {
    console.log("December 31 days!")
} else {
    console.log("Invalid Input")
}
// =======================================================================
console.log("Question No. 13");
var amount = +prompt("Enter Amount");
let notes = [5000,1000,2000, 500, 200, 100, 50, 20, 10, 5, 1];
let noteCounter = Array(11).fill(0);
console.log("Amount is " + amount);
for (let i = 0; i < 11; i++) {
    if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount - noteCounter[i] * notes[i];
    }
}
for (let i = 0; i < 11; i++) {
    if (noteCounter[i] != 0) {
        console.log(notes[i] + " : " + noteCounter[i]);
    }
}

// ========================================================================//
console.log("Question No. 14");

var a = +prompt("Enter value of a")
var b = +prompt("Enter value of b")
var c = +prompt("Enter value of c")
if (a + b + c == 180 && a != 0 && b != 0 && c != 0) {
    console.log("Valid");
}
else {
    console.log("Invalid");
}
// ========================================================================//
console.log("Question No. 15");
var a = +prompt("Enter value of a")
var b = +prompt("Enter value of b")
var c = +prompt("Enter value of c")
if (a + b > c || a + c > b || b + c > a) {
    console.log("Valid");
}
else {
    console.log("Invalid");
}

// =====================================================================//
console.log("Question No. 16");
var x = +prompt("Enter value of x");
var y = +prompt("Enter value of y");
var z = +prompt("Enter value of z");
if (x == y && y == z && x == z) {
    console.log("Triangle is Equilateral")
} else if (x == y || x == z) {
    console.log("Triangle is isosceles")
} else {
    console.log("Triangle is scalene")
}
// ===================================================================//
console.log("Question No. 17");
var a = +prompt("Enter value of a");
var b = +prompt("Enter value of b");
var c = +prompt("Enter value of c");
let d = b * b - 4 * a * c;
let sqrt_val = Math.sqrt(Math.abs(d));
if (d > 0) {
    console.log("Roots are real and different ");
    console.log((-b + sqrt_val) / (2 * a) + "\n" + (-b - sqrt_val) / (2 * a));
}
else if (d == 0) {
    console.log("Roots are real and same ");
    console.log(-b / (2 * a) + "\n" + -b / (2 * a));
}
else {
    console.log("Roots are complex ");
    console.log(-b / (2 * a) + " + i" + sqrt_val + " \n " + -b / (2 * a) + " - i" + sqrt_val);
}
// ========================================================================//
console.log("Question No. 18");
var cost = +prompt("Enter Cost Price:");
var selling = +prompt("Enter selling price");
let loss, profit;
if (selling == cost) {
    console.log("No profit Not loss!")
} else if (selling > cost) {
    console.log(profit = selling - cost + " Profit")
} else {
    console.log(loss = cost - selling + " loss")
}
// ==========================================================================
console.log("Question No. 19");
var bio = +prompt("Enter Bio Marks:");
var chem = +prompt("Enter Chem Marks:");
var phy = +prompt("Enter Phy Marks:");
var math = +prompt("Enter Math Marks:");
var computer = +prompt("Enter Computer Marks:");
var result = (bio + chem + phy + math + computer) / 500 * 100;
console.log("Bio" + " " + bio + " \n" + "chem " + " " + chem + "\n" + "Phy " + " " + phy + "\n" + "Math " + " " + math + "\n" + "Computer " + " " + computer + "\n");
var total = bio + chem + phy + math + computer;
console.log("Total " + total)
var aver = total / 500;
console.log("Average " + aver);
var peri = aver * 100;
console.log("Percentage " + peri);
if (result > 100) {
    console.log("Invalid Input")
} else if (result >= 90 && result <= 100) {
    console.log("Your grade is A");
} else if (result >= 80 && result < 90) {
    console.log("Your grade is B ");
} else if (result >= 70 && result < 80) {
    console.log("Your grade is C");
} else if (result >= 60 && result < 70) {
    console.log("Your grade is D");
} else if (result >= 40 && result < 60) {
    console.log("Your grade is E");
} else {
    console.log("Your grade is F");
}
// =========================================================================
console.log("Question No. 20");
var salary = +prompt("Enter Salary:");
let hra, da,tot;
if(salary <= 10000){
   hra = 0.2 * salary;
   da = 0.8 * salary;
   tot = hra + da + salary;
    console.log("The Gross Salary of the Employee is " + tot )
}else if(salary <= 20000){
    hra = 0.25 * salary;
    da = 0.8 * salary;
    tot = hra + da + salary;
     console.log("The Gross Salary of the Employee is " + tot )
}else if(salary > 20000){
    hra = 0.30 * salary;
    da = 0.95 * salary;
    tot = hra + da + salary;
     console.log("The Gross Salary of the Employee is " + tot )
}else{
    console.log("Have no Salary")
}
// =========================================================================
console.log("Question No. 21");
var unit = +prompt("Enter Total Consumed Units:");
var amount, charge, total;
if (unit <= 50) {
    amount = unit * 0.50;
    charge = amount * 0.2;
    total = amount + charge;
    console.log("Your Total bill is Rs " + total);
} else if (unit <= 150) {
    amount = 25 + ((unit-50) * 0.75);
    charge = amount * 0.2;
    total = amount + charge;
    console.log("Your Total bill is Rs " + total);
} else if (unit <= 250) {
    amount = 100 + ((unit-150) * 1.20);
    charge = amount * 0.2;
    total = amount + charge;
    console.log("Your Total bill is Rs " + total);
} else {
    amount = 220 + ((unit-250) * 1.50);
    charge = amount * 0.2;
    total = amount + charge;
    console.log("Your Total bill is Rs " + total);
}


