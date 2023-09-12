// -------------------------First code----------------------------

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = 0;
sum1 = 0;

for (var index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        // console.log((array[index]));
        sum += array[index];
    }
    if (array[index] < 5) {
        sum1 += array[index];
    }
}
console.log(sum);
document.write(sum + "<hr>");

console.log(sum1);
document.write(sum1 + "<hr>");

//other mind: (else if) instead of (if) 

// for (var index = 0; index < array.length; index++) {
//     if (array[index] % 2 == 0) {
//         console.log((array[index]));
//         sum += array[index];
//     }
//     if (array[index] < 5) {
//         sum1 += array[index];
//     }
// }
// console.log(sum);
// console.log(sum1);



// -----------------------------second code---------------------------


var data = { Name: "Mohammad Alkurdy", Num: 1, Age: 24, Email: "mohammadkurdy@gmail.com" };

console.log(data);

document.write(data + "<hr>");


console.log(data["Name"]);
document.write(data["Name"] + "<hr>");

console.log(data.Num);
document.write(data.Num + "<hr>");

console.log(data.Age);
document.write(data.Age + "<hr>");

console.log(data.Email);
document.write(data.Email + "<hr>");
