class person {
    constructor(name, age ){
        this.name=name;
        this. age= age;

    }
     describe(){
        return `${this.name} is ${this.age} year old`
     }

     celebrateBirthday(){
        this.age+=1
        console.log(`happy birhtday ${this.name} ! now you are  ${this.age} year old`);
        
     }
     
     fullName(){
   this.name='sameer ojha '
      console.log(` ojha your full name is ${this.name } and age ${this.age}`);
      
     }
}

   const person1=new person('shiva',25)
   const person2=new person('ojhs',22)
   console.log(person1.describe());
   console.log(person2.describe());
   
  person2.fullName();
   
   person1.celebrateBirthday();
   
