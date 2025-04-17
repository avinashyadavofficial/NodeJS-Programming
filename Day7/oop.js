
//Declaring class  
var emp=class   
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method      
detail()  
    {  
  console.log(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new emp(101,"Martin Roy");  
var e2=new emp(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
  
//Re-declaring class  
var emp=class   
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  console.log(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new emp(103,"James Bella");  
var e2=new emp(104,"Nick Johnson");  
e1.detail(); //calling method  
e2.detail();  
