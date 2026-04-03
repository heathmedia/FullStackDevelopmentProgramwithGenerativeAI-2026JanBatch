// let num =[1,6,2,3,4,5,7,8,9,10,78,56,45,34,23,12,11,90,87,65,43,21,32,54,76,98,100];
// console.log(num);// display the array as string format separated by comma
// console.log(num.join(" ")); // display the array as string format separated by space
// console.log(num.join("-")); // display the array as string format separated by hyphen
// console.log("The length of the array is: " + num.length); // display the length of the array
// console.log("The first element of the array is: " + num[0]);
// console.log("The last element of the array is: " + num[num.length - 1]);
// console.log("The element at index 5 is: " + num[5]);
// console.log("The element at index 10 is: " + num[10]);
// creating array with empty size and then adding elements to it
let arr = [];   // empty array created
console.log("size of array " + arr.length); // display the empty array
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr.push(4); // adding element to the end of the array
arr[1]= 5; // updating the element at index 1
// 0, 1, 2, 3,4
    arr.unshift(10); // adding element to the beginning of the array
console.log(arr); // display the array
arr.pop(); // removing the last element of the array
arr.shift(); // removing the first element of the array
console.log(arr); // display the array after removing elements
// 0    ,1  ,2, 3,  4,   indexes of the array
// 100,200,300,400,500  values 
// arr.unshift(10); adding the element to the beginning of the array
