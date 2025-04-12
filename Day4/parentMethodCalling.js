const animal={
    speak(sound){
        console.log(`${this.name} sounds like ${sound}`);
    }
};
const dog={name: "aa"};
animal.speak.call(dog,"bhau");// aa sounds like bhau
const cat={name:"bb", sound:"meow"};
animal.speak.call(cat);//bb sounds like undefined
animal.speak.call(); //undefined sounds like undefined
