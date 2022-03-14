const mystring: string = "some string";
const mynumber: number = 1234545;
const myboolean: boolean = true;

const myArray1: string[] = [ "string 01", "string 012" ];
const myArray2: Array<number> = [1, 2];

const myTuple: [ string, number, string, boolean ] = [ "string", 2, "string 2", true ];


enum Color {
    Red,
    Green = "Green",
    Blue = "Blue",
}

Color.Red;

let myAny: any = "String";
myAny = 1;

myAny = "string 02";
// myAny = true;
(myAny as string).length;

function add(x: number, y: number): number {
    return x + y;
}

const myAdd: (x: number, y: number) => number = (x, y) => x + y;

console.log(myAdd(1 ,2));

import IAnimal, { myNumber, myString } from "./Animal";

class Animal implements IAnimal {
    // public name: string = "Tier";
    private age: number;

    get animalAge() { return this.age }
    set animalAge(value) { this.age = value; }

    constructor(private name: string) {
        this.age = 5;
    }

    move(distance: number): void {
        // console.log(this.name + " moved " + distance + "m");
        console.log(`${this.name} moved ${distance}m`);
    }
}

const animal = new Animal("Tier");
animal.move(22);

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distance: number) {
        console.log("Bark and move");
        super.move(distance);
    }
}

const dog = new Dog("Max");
dog.move(33);
dog.animalAge = 10;
console.log(dog.animalAge);


interface MyInterface {
    label: string;
    value?: number;
}

const obj: MyInterface = {
    label: "some label",
    value: 1
}

// const defaultObj: object = { label: "label" }

const objs: MyInterface[] = [
    { label: "first" },
    { label: "second", value: 2},
] 


