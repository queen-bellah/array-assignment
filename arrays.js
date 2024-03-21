//question one

let arr1 = [3,7,34,90,12];
let  arr2 = [true,"green","where",12,56];
let last=arr1.pop();
let last2=arr2.pop();
console.log(last);
console.log(last2);

//question2

stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let joined = stringmyPets.join();
console.log(joined);

//question3

itemsvaarr3 =[-5,9,5,3,2,-3,6,8,4,1];
let sorted = itemsvaarr3.sort();
console.log(sorted);

//question4

let arr = [["boy", "man", "girl","school", "girl", "woman"]];
let removeDuplicates = [];
let duplicates = [];
arr.forEach(f =>{
    if (!removeDuplicates.includes(f)){ //The includes() method checks if an array contains a specified element or not.
        removeDuplicates.push(f); //Adds elements to end of array & returns its length
    }
    else(duplicates.push(f));
});
console.log({removeDuplicates});
console.log({duplicates});

//question5

let arr5 = ["the", "way", "x", 4];
let text = "way";
let textIndex = arr5.indexOf(text);
if (text== arr5["way"]){
    console.log({text})
}
else{
    console.log("The search was not found ")
}

//question 6


let str=  "renniw";
function newSort (word) {
    return word.split("")
            .sort()
            .join("");
}
console.log(newSort(str));

//question7

let fruits=["Apple","Orange","Banana","Mango","Pear","Watermelon","Grape","Strawberry","Lemons","Papayas"]
fruits.splice(5, 0, "Tomato");
console.log({fruits});