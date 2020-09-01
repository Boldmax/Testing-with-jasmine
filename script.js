// (1)	Write a function called replaceWith that takes in a string, 
// a character to replace and a character to replace it with and returns the 
// string with the replacements. Write tests to make sure this is case sensitive 
// "awzsomz" replaceWith( " Foo",  " F",  " B")   // "Boo" 
// replaceWith( " awesome",  " e" , " z")   

function replaceWith(arg,a,b){
    let result = "";
for (let i = 0; i < arg.length; i++){
    if (arg[i] === a){
     result += b
    }
    else{
        result += arg[i]
    }
    
}
return result  
};

// (2)	Write a function called expand which takes an array and a number
// and returns a copy of the array with as many numbers as specified 
// [1,2,3,1,2,3,1,2,3] expand([" foo",  " test"] ,1)   ["foo","test"] 
// expand( [1 , 2 , 3 ] ,3)   

function expand(arr,times){
    let newArray = [];
    for (let i =0; i < times; i++){
    newArray = newArray.concat(arr)
    }
    return newArray;
    };

 // (3)	Write a function called a cceptNumbersOnly which takes in any number of 
 // arguments and returns true if all of them are numbers. Watch out for NaN - it
 // is a typeof "number"!  
// acceptNumbersOnly( 1 , " foo")  / / false acceptNumbersOnly( 1  ,2 , 3 , 4 , 5	, 6 , 7	)   
// true acceptNumbersOnly( 1 , 2 , 3 , 4 , 5	, 6 , N aN)  / / false 


function acceptNumbersOnly(array){
    for (let x = 0; x < array.length; x++){
    if(typeof array[x] === 'number' && !isNaN()){
    return true
    }
    else{return false
    }
    }
    }

/* (4) 	Write a function called mergeArrays which takes in two arrays and 
 returns one array with the values sorted 
 mergeArrays( [2  ,1 ] ,[3 , 4 ] )   [1,2,3,4] */


function mergeArrays(arr1,arr2){
    let merge;
    merge = arr1.concat(arr2);
    return merge.sort((a,b)=>{
    if (a > b) return 1;
    if (a < b) return -1;
     return 0;
    })
    }

/* (5)	Write a function called mergeObjects which takes in two objects and 
 return an object with the keys and values combined. If the second parameter has 
 the same key - it should override first one. There is a built in function called 
 Object.assign - research it, but do not use it, try to do this on your own! 
 var obj1=  {name:  " Foo", num:33} 
 var  obj2 = {test: "thing", num:55} mergeObjects( obj1, obj2)  
 {name:"Foo", test:"thing",num: 55 } */


    function mergeObjects(obj1,obj2){
        let merge2 = {...obj1, ...obj2};
        return merge2
        };
     var obj1 = {
         name: "thing",
         num: 33
     };
     var obj2 = {
        test: "thing",
        num: 55
    }   

