const object1 = {  
    a: 1,  
    b: 2,  
    c: 8  
  };  
  
  console.log(object1);
  const object2 = Object.assign({a: 3,c: 4, d: 5,g: 23,}, object1);  
  console.log(object2);
  console.log(object1);
    
  console.log(object2.c, object2.d,object2.g,object2.a); 

  