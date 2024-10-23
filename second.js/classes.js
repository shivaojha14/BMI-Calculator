      function user (userName,logginCount,isLoggedIn){
             this.userName=userName;
             this.logginCount=logginCount;
             this.isLoggedIn=isLoggedIn;
             return this
      }
       const use1=new user('shiva',13,true)
       console.log(use1);
       const use2= new user('ojhaji',14,false);
       console.log(use2);
       const user3 = new user ('hello',15,true);
       console.log(user3);
       
       