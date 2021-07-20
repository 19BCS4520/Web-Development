//function in javascript
function avg(a,b){
    return(a+b)/2;

}
c1=avg(5,7);
c2=avg(12,67);
console.log(c1,c2);
//Conditiional Statement 
var age=4
if(age>15)
{
    console.log("not kid")
}
else{
    console.log("kid")
}
//else-if
var a=13
if(a==10){  
    console.log("a is equal to 10");  
    }  
    else if(a==15){  
    console.log("a is equal to 15");  
    }  
    else if(a==20){  
console.log("a is equal to 20");  
    }  
    else{  
    console.log("a is not equal to 10, 15 or 20");  
    }  
    //for loops
    var arr=[1,2,3,4,5,6,7,8,9]
    for(var i=0;i<arr.length;i++){
        console.log("Value of the intration",arr[i])
    }
    //while loop
    let j=0;
    var arr1=[1,2,3,4,5,6,7,8,9]
    
while(j<arr1.length
    ){
    console.log(arr1[j]);
    j++;}

//Break and Continue Statements
var arr3=[1,2,3,4,5,6,7,8,9]
    for(var i=0;i<arr3.length;i++){
        if(i==2){
          //  break;
          continue;
        }
        console.log("Value of the intration",arr3[i])
    }
//