//-----------------------------------------//
// #1: Creating Dictionaty Objects
let names = {
    fname: "Sami",
    lname: "Haroon"
}
console.log(names.fname); // true
console.log("Object.hasOwnProperty(): ", names.hasOwnProperty("mname")); // false
// --- on console expand  ` __proto__ ` to see the class properties and fucntions
//-----------------------------------------//


//-----------------------------------------//
// #2: using Object.create()
function DogObject(name, age){
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){return "I can speak"}
}
let bingo = DogObject("Bingo", 54);
console.log("Object.create(): ", bingo); // name = Bingo, age = 54, speak()
// --- on console expand  ` __proto__ ` to see the class properties and fucntions
//-----------------------------------------//


//-----------------------------------------//
// 3: New Keyword // Prototypical Inheritance
function DoggyObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.prototype.speak = function() {
    return "I am a dog";
}
let john = new DoggyObject("John", 45);
console.log("New Keyword: ", john); // name = John, age = 45, speak()

//-----------------------------------------//
function Animals(name, specie) {
    this.name = name; // root property
    this.specie = specie; // root property
}
Animals.prototype.sing = function(){
    return `${this.name} can sing`;
}
Animals.prototype.dance = function() {
    return `${this.name} can dance`;
}
let Bingo = new Animals("Bingo", "Hairy");
console.log("Protypical: ", bingo);
// --- on console expand  ` __proto__ ` to see the class properties and fucntions
//-----------------------------------------//



//-----------------------------------------//
// #4: Creating Class 
class Makhlook {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }
    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }
}
let mingo = new Makhlook("Bingo", "Hairy");
console.log("Class: ", mingo); // name = Bingo, specie = Hairy
// --- on console expand  ` __proto__ ` to see the class properties and fucntions
//-----------------------------------------//



//-----------------------------------------//
// #4: Sub-classing 
class Janwar{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        return true;
    }

    breathe(){
        return true;
    }
}

class Billi extends Janwar{

    constructor(hairColor, name, age){
        super(name, age);
        this.hairColor = hairColor;
    }

    getHairColor(){
        return this.hairColor;
    }
}   
let billi = new Billi("White", "Tom", 5);
console.log("Sub-classes: ", billi);
//-----------------------------------------//
