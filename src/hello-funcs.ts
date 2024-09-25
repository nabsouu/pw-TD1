import type { Human } from './types';

export function helloworld () : string {
return "hello world!"; 
}; 

export function helloyou (name : string): string {

    if (name = "John") {
        return "hello" + " " + name; 
    } else {
        return "nom pas valide "; 
    }
}


export function helloHuman(human: Human): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - human.birthyear;
    return `Hello, ${human.firstname} ${human.lastname}! You are ${age} years old.`;
}


export function repeatHelloYou(n: number, name: string): string {
    let result = '';  
    while (n > 0) {  
        result += helloyou(name) + '\n';  
        n--; 
    }
    return result;  
}




