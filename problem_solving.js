// Problem Solving-1 
//a function that takes a positive number and returns a positive number after doing some mathematical operations
function mindGame(number){
    if(number>=0){
        return ((((number*3)+10)/2)-5);
    }
    else{
        return 'Give Valid Input, Please';
    }
}
// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));
// console.log(mindGame(-20));


// Problem Solving-2
//a function that takes a string as input and returns even or odd as a result depending on the length of the string
function evenOdd(word){
    if(typeof word === 'string'){
        len = word.length;
        if(len % 2 == 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
    else{
        return 'Give Valid Input, Please';
    }
}
// console.log(evenOdd('Phero'));
// console.log(evenOdd('Batch7'));
// console.log(evenOdd('chatgpt'));
// console.log(evenOdd(79.9));



// Problem Solving-3
//a function that takes a number as input and gives either the difference of the input number with seven if the difference is lesser than seven or the double of the input number if the difference is greater than seven as output
function isLGSeven(inputNum){
    if(typeof inputNum === 'number'){
        diff = inputNum - 7;
        if(diff < 7){
            return diff;
        }
        else{
            return (inputNum*2);
        }
    }
    else{
        return 'Give Valid Input, Please';
    }
}
// console.log(isLGSeven(6));
// console.log(isLGSeven(-15));
// console.log(isLGSeven(15));
// console.log(isLGSeven('hahahahaha'));



// Problem Solving-4
const arr = [1,2,5];
const arr1 = [2,-5,-7,-13];
const arr2 = [-4,-9,-5,-33,-55];
//a function that takes an array as input and returns the count of negative numbers in that array as bad data
function findingBadData(inArray){
    let sum = 0;
    for(let i=0; i<= inArray.length; i++){
        const element = inArray[i];
        if(element<0){
            sum++;
        }
        else{
            continue;
        }
    }
    return sum;
}
// console.log(findingBadData(arr));
// console.log(findingBadData(arr1));
// console.log(findingBadData(arr2));



//Problem Solving-5
//a function that takes the number of gems of three friends and returns either the count of remaining diamonds after subtraction between total diamonds and 2000 if the total diamond quantity is greater than 2000 or returns the count of total diamond.
function gemsToDiamond(friend1, friend2, friend3){
    let friendGemPow1 = 21;
    let friendGemPow2 = 32;
    let friendGemPow3 = 43;
    let totalDiamond = (friendGemPow1*friend1)+(friendGemPow2*friend2)+(friendGemPow3*friend3);
    if(totalDiamond > 2000){
        return (totalDiamond = totalDiamond-2000);
    }
    else{
        return totalDiamond;
    }
}
// console.log(gemsToDiamond(1,1,1));
// console.log(gemsToDiamond(20,200,50));
// console.log(gemsToDiamond(100,5,1));