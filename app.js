// --------------------Array--------------

// question 1 
// var arr = []


// question 3 
// var arr = ["Saad"]
// console.log(arr)


// question 4 
// var arr = [18]
// console.log(arr)


// question 5
// var arr = [true , false]
// console.log(arr)


// question 6
// var arr = ["Saad","Khan" , 18 , true , null]
// console.log(arr) 


// question 7


// var arr = ["SSC"," HSC"," BCS", "BS", "BCOM"," MS", "M.Phil" , "PhD"]

// document.write("<h1>Qualifications :</h1>");
// document.write(arr);


// question 8 
// var stdName = ["Saad" , "Sufyan" , "Talha"]
// var stdScore = [320 ,230 , 480]

// document.write("Score of " + stdName[0] + " is " + stdScore[0] + "." + "Percentage:"+stdScore[0] / 500 *100 + "%" + "<br />")
// document.write("Score of " + stdName[1] + " is " + stdScore[1] + "." + "Percentage:"+stdScore[1] / 500 *100 + "%" + "<br />")
// document.write("Score of " + stdName[2] + " is " + stdScore[2] + "." + "Percentage:"+stdScore[2] / 500 *100 + "%" + "<br />")


// question 9
// var colorName = []
// var firstValue = prompt("enter color name to beginning")
// colorName.unshift(firstValue)
// console.log(colorName)

// var secondValue = prompt("enter color name to end")
// colorName.push(secondValue)
// console.log(colorName)

// var firstColor = prompt("enter first color")
// var secondColor = prompt("enter second color")
// colorName.unshift(firstColor , secondColor)
// console.log(colorName)

// colorName.shift()
// console.log(colorName)

// colorName.pop()
// console.log(colorName)



// question 10 
// var stdScore = [320 , 280 , 480 , 120]

// let points = [320, 230, 480, 120];
// points.sort(function(a, b){return a-b});
// console.log(points)


// question 11

// var citiesArr = ["Karachi","Lahore","Islamabad","Multan","Quetta"]
// console.log(citiesArr)

// citiesArr.shift()
// citiesArr.shift()
// citiesArr.pop()
// console.log(citiesArr)



// question 12

// var arr = [This, is ,my , cat]
// console.log("This" , "is" , "my" , "cat")


// question 15

// var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + arr[0] + "</option>");
// document.write("<option>" + arr[1] + "</option>");
// document.write("<option>" + arr[2] + "</option>");
// document.write("<option>" + arr[3] + "</option>");
// document.write("<option>" + arr[4] + "</option>");
// document.write("<option>" + arr[5] + "</option>");

// document.write("</select>");


// -----------------array and loops---------------

// question 1

// var arr = [ [] , [] , [] ]
// console.log(arr)


// question 2

// var arr = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ]
// console.log(arr)


// question 3

// for(var i=1; i<=10; i++){
//     document.write(i + "<br />")
// }


// question 4

// var tableName = prompt("enter table name")
// var tableLength = prompt("enter table length")

// if(tableLength){
//     tableName = tableName
// }else{
//     tableName = 2
// }
// if(tableLength){
//     tableLength = tableLength
// }else{
//     tableLength = 10
// }
// for(var i=1; i<=tableLength; i++){
//     document.write(tableName + " " + " x " + i + " = "  +  tableName * i + "<br />")
// }


// question 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// document.write("Element at index 0 is " + fruits[0] + "<br />")
// document.write("Element at index 0 is " + fruits[1] + "<br />")
// document.write("Element at index 0 is " + fruits[2] + "<br />")
// document.write("Element at index 0 is " + fruits[3] + "<br />")
// document.write("Element at index 0 is " + fruits[4] + "<br />")



// question 6

// var counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// document.write("<h1>Counting</h1>" + counting + "<br />")
// counting.pop()
// counting.pop()
// counting.pop()
// counting.pop()
// counting.pop()
// counting.reverse()
// document.write("<h1>Reverse counting </h1>" +counting)


// question 7

// var userInput = prompt("what do you want")
// var A = ['cake', "apple pie", "cookie", "chips", "patties"]

//  for (var i = 0; i < A.length; i++) {
//    if (userInput === A[0]) {
//      isCityMatch = true;
//      document.write("cookie is available at index 0 at bakery")
//       break
//    }

//    if (userInput === A[1]) {
//     isCityMatch = true;
//     document.write("cookie is available at index 1 at bakery")
//      break
//   }

//   if (userInput === A[2]) {
//     isCityMatch = true;
//     document.write("cookie is available at index 2 at bakery")
//      break
//   }

//   if (userInput === A[3]) {
//     isCityMatch = true;
//     document.write("cookie is available at index 3 at bakery")
//      break
//   }

//   if (userInput === A[4]) {
//     isCityMatch = true;
//     document.write("cookie is available at index 4 at bakery")
//      break
//   }
//  }

//  if (isCityMatch === false) {
//    document.write(A + "is not available")
//  }




// question 8

// var A = [24, 53, 78, 91, 12]
// document.write(A + "<br />")
// document.write("the largest number is "+ A[3])


// question 9

// var A = [24, 53, 78, 91, 12]
// document.write(A + "<br />")
// document.write("the smallest number is "+ A[4])


// question 10

// for(var i=1; i<=20; i++){
//     document.write("5 x " + i + " = " + "5" * i + "<br />")
// }
