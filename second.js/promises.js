const onePromise=new Promise((resolve, reject) => {
        setTimeout(()=>{
          let error = false;
          if (!error) {
            resolve(
                     {
                        username:'shiva ojha ',
                        userId: 'Async_shiva',
                        userEmail:'ojhashiva139@gmail.com'
                     }
            )
          }
          else{
            reject('error: something went wrong')
          }
        },1000)
}) 

onePromise.then(function(user){
    return user.userId
        
}).then(function(userId){
    console.log(userId);
    
}).catch(function(error){
    console.log(error);
    
})