    // this the example of reduce function
    /*
       reduce function is used to apply a function to each element 
        of the  array to reduce the array of a single value .
    */

    //map-: map function is used to tranform to
    // each element of a collection (like an array or list )
    //by applying a function to it
        
        /*

let addREducesNumbers = [12,12,33,55,44,78,99]
.reduce(function(accumulator,currentvalue){
        return accumulator+currentvalue

})
console.log(addREducesNumbers);*/
/*
let user=[{
        userName:'shiva ojha ',
        userId:'Async_shiva ',
        userPassword:'22222444',
        userMobileNumber:'7991701068'
}]

let userAccesProperty=user.map(function(userItems){
        return userItems.userMobileNumber

})
console.log(userAccesProperty);

*/
/*
const double= [2,3,4,5].map(function(num){
      return num*2

})
console.log(double);*/
/*
const numbers = [1,2,3,4,5,6]
     const evenNumbers=numbers.filter(( num,index)=>{
        return index%2===0

     })
        console.log(evenNumbers);
        */

           /* for of loop */
           
          /*const name={
                aName:'shiva',
                age:'22',

          }

          for (const key of Object.name) {
                console.log(key);
          }*/

                const redNumber=[2,3,5,6,8].reduce((accumulator,currentvalue)=>{
                                 return accumulator+currentvalue
                },0)

                console.log(`reduced number is = ${redNumber}`);
                