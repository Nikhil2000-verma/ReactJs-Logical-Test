/*
********** Question 1 *************
Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

(function(){
    let arr = [1,2,3,4,5,6,7,8,9];
    arr.forEach(element => {
        if(element %2==0){
            console.log(element);
        }
    });
})();
*/


/*
********** Question 2 *************
Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

(function(){
    let arr = "1000010001".split('');
    let maxConsecutiveLength = 0;
    let tempValueConsecutive = 0;
    for(var i=0; i<arr.length; i++){
        if((arr[i]=='1') && arr[i-1]!='1' && arr[i+1]!='1' ){
            tempValueConsecutive = 1;
        }
        else if( (arr[i]=='1') && (arr[i-1]=='1' || arr[i+1]=='1') ) {
            tempValueConsecutive++;
        } else {
            tempValueConsecutive = 0;
        }
        if(maxConsecutiveLength<tempValueConsecutive) {
            maxConsecutiveLength = tempValueConsecutive;
        }
    };
    console.log('maxConsecutiveLength ==>', maxConsecutiveLength);

})();
*/


/*
********** Question 3 *************
Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

(function(){
    let arr = [0,1,2,3,4,5,6,7,7,8,9,10,11];
    let repeatedNum = null;
    for(var i=0; i<arr.length; i++) {
        if( (arr[i+1]-arr[i]!=1) ) {
            repeatedNum = arr[i];
            break;
        }
    }
    console.log('repeatedNum ==>', repeatedNum);
})();
*/


/*
********** Question 4 *************
Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.
(function(){
    fetch('https://www.example.com/api/get/1')
    .then(res => {
        console.log(res);
    })
})();
*/


/*
********** Question 5 *************
Assume there is a object of this format 
var obj = {
 "id : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
Write a code to sort the object by id 
I.e final output should have objected sort by id’s

(function(){
    var obj = [
        {"id" : 4, "nae" : "ab"},
        {"id" : 10, "nae" : "ab"},
        {"id" : 5, "nae" : "ab3"},
        {"id" : 6, "nae" : "ab5"}
    ]   
    let sortedObj = obj.sort((a,b) => a.id-b.id)
    console.log('sortedObj =>', sortedObj);
})();
*/




