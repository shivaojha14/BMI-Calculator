const users= [
   
     { userId: 1, name:'shiva'},
     { userId: 2, name:'tanamay'},
     { userId: 3, name:'prabhansh'},
     { userId: 4, name:'shivansh'},
      { userId: 5, name:'ved'}

]

const newUser= users.map(function(user){
     return user.name

})
console.log(newUser);


