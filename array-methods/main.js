// ADD / REMOVE ITEMS

let items = [12, "apple", "orange", 23, 53];

console.log(items.push("strawberry")); //returns new total length
console.log(items);

console.log(items.pop());           //returns last element

console.log(items.shift());         //returns first element

console.log(items.unshift(45));     //returns new total length

console.log(items);

items = [12, "apple", "orange", 23, 53];
let items2 = [12, "potate", "tomate", 79, 94];

console.log(items.slice())          //returns a copy from the original array
console.log(items.splice(1, 1, "banana"))   // returns elements removed
console.log(items);
console.log(items.concat(items2));



//SEARCHING IN ARRAY