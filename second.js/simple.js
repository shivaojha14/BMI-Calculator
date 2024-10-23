/*let x=10;
let y=20;
let z=30;
x=y=z;
console.table(typeof[x,y,z]);*/
     
    /*console.log(null>0);
    console.log(null==0);
    console.log(null>=0);
    console.log(typeof null);*/
    
    //compression 
  /*console.log(undefined>0);
  console.log(undefined==0);
  console.log(undefined>=0);
  console.log(typeof undefined);
   console.log(true);
   console.log(-true);
   let incrementNumber=100;
   console.log(++incrementNumber)*/

   // there are two types of operator in jvascript
   // primitive and non-primitive
   /*
   1- number
   2-string
   3- boolean
   4-bigInt
   5-null
   6-symbol
   7-undefined
   
   */ 

  /* let age=22;
   let ageNumber=String(age);
   console.log(typeof
    ageNumber);

   
  let name="";
  let booleanNumber=Boolean(name );
  console.log(typeof booleanNumber);
  let aNumber="123"
  let numerIs=Number(aNumber);
  console.log(typeof numerIs);
  */
/*
let id=Symbol('123')
let anotherId=Symbol('123')
console.log(id===anotherId);

*/
/*
let incrementNumber=100;
incrementNumber++
console.log(incrementNumber)*/
/*
let number =123;
let numberTwo=number;
numberTwo=237;
console.log(number);
console.log(numberTwo);*/
 
/*
const name=new String(`shiva`);
console.log(`my name is ${name}`);
console.log(typeof name);*/
/*
    const newName='shiva'
    const newString=newName.substring(0,3);
    console.log(`result is here ${newString}`);
    const anotherString=newName.slice(-3,0);
    console.log(anotherString);
    const name="    shiva.    "
    console.log(name);
    console.log(name.trim());

    let score=100;
    console.log(score);
    let newScore=new Number(score);
    console.log(newScore.toFixed(2));
    */
    
  /*  let myDateIs= new Date();
    console.log(myDateIs);
    console.log(myDateIs.toLocaleString());
    console.log(myDateIs.toDateString());
    
    console.log(myDateIs.toString());
    console.log(typeof myDateIs);


    */
    //console.log(myDateIs.toLocaleDateString());
    /*
     let myCreatedDate=new Date();
     console.log(myCreatedDate.toLocaleString(2024,0,12, 5,5));
  
    *//*
      const myArray=[1,2,3,4];
      const mySecondArray=myArray.join();
      console.log( typeof mySecondArray);
      
     console.log(mySecondArray.includes(6));
     console.log(mySecondArray.indexOf(1));
     
     *//*
     const myFriends=['shubham','shivam','suresh','ganesh'];

     const yourFriends=['devansh','shivansh','kartik','mahesh'];
     const myBook=['computer','Grammer','english','hindi'];
    // const allFriends=[...myFriends,...yourFriends,...myBook];
    // console.log(typeof allFriends);
    const allFriends=myFriends.concat(yourFriends);
    console.log(allFriends);
    */   /*

    const user = {
      userName: 'shiva ojha',
      userPassword: 'S@hiva123ojha',
      userLogin: 'Welcome you are succesfully logedin',
    };
    
    const userTwo = {
      userName: 'shiva',
      userPassword: 'S@hivam123',
      userEmail: 'shivam@google.com',
      userLoggedIn: 'user succesfully loged in',
    };
    
    const allUsers = [user, userTwo]; // Combining objects into an array
    
    console.log('all users are here...', allUsers);

    const {userPassword:password}=userTwo;
    console.log(password);
    
    
    */
     
   // Impecit return 
   /*
   const addTwoNumbers=(num1,num2)=>num1+num2
   console.log("executing two numbers with function",addTwoNumbers(4,5));
   */
/*
   const myObject=()=>
    ({
      userName:'shiva ojha'
    })

   
   console.log("........",myObject());
   
  */
 // iifee function 
  /* let myPassword = '2314'; // Corrected to string type
   let loggedIn = ' ';
   
   const myFunction =( () => {
     if (myPassword === '2314' && loggedIn) { // Check if password matches
   
       console.log(`Welcome! You are successfully logged in.`);
   
     } else {
       console.log(`Sorry, you entered an incorrect password.`);
     }
   }) ();
   
   //console.log('Function invoked:');
   //myFunction(); // Call the function
   */
    /*
   const coding=[

    {
      language:'javaScript',
      languageFile:'object.js'
      
    },

    {
      language:'java',
      languageFile:'object.java'
      
    },

    {
      language:'python',
      languageFile:'object.py'
      
    },

   ];

   coding.forEach((item) => {
    //return item.language
     console.log(item.language);
     
     
    
   });*/
   
    
    /* const shiva= function(){
         console.log(typeof shiva);
         console.log(shiva,'shiva ojha ');
        // console.log(typeof shiva);
         
         
      }
        setTimeout( shiva ,3000);*/

        // promises
 
        /* let onePromise= new Promise(function(resolve,reject){
          setTimeout(() => {
            console.log('your task is executed ');
            resolve();
          },2000);
         });
         onePromise.then(function(){
          console.log('this task alse be resolved ');
          
         })
        
            new Promise(function(resolve,reject){
              setTimeout(() => {
                console.log('Async task is completed');
                
                resolve();
              }, 2000);
            }).then(function(){
              console.log('resolved is consumed ');
              
            })
            
            // promise no-3

            const promiseThree= new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log('Async task 3');
                resolve(
                  {
                    userName: 'shiva ojha ',
                    useId: 'Async_shiva',
                    userEmail:'ojhashiva@gmail.com',
                  }
                )
              }, 2000);
            })

            promiseThree.then(function(user){
              console.log(user);
              

            })

            // promise no-: 4*/
/*
            const fourPromise= new Promise(function(resolve, reject) {
                 let error=false;
                 if(!error){
                  resolve(
                    {
                      userName: 'shiva ojha ',
                      useId: 'Async_shiva',
                      userEmail:'ojhashiva@gmail.com',
                    }
            )}
               else{
                reject(
                  'ERROR-: something went wrong  '
                )}

            }).then(function(user){
                return user.userName;
            }).then(function(userName){
              console.log(userName);
              
            }).catch(function(error){
                   console.log(error);
                   
            })*/

                /*   console.log('Start');
setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);
console.log('End');
*/

let number =123;
let numberTwo=number;
numberTwo=237;
console.log(number);
console.log(numberTwo)