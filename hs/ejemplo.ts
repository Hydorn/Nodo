'use strict';
let variable1: string; // can store only strings
let variable2 = "hola"; // implicit type definition
let variable3: Array<number>;


//type objecets
interface PersonaType{
    name?: string,  // whit ? it becomes an optional property
    edad: number,
    lastName: string
}

type PersonaType2 = {
    name?: string,  // whit ? it becomes an optional property
    edad: number,
    lastName: string,
    //[key:string] for future properties?? Research ++
}

let objeto1:PersonaType = {name:"Carlos",edad:39,lastName:"Becchio"};

function getNumber():number{
    return 2;
} //function returns number

//multiple types (can have two or more types)
let varX: string | number;
let arrX: Array<string | number>;

//concatenate types
type Programador = {
    lenguaje: string,
} & PersonaType

// generic type, often used in fuctions.
type Generic<T>  = {
    propiedad: T,
    otraPropiedad: string,
}