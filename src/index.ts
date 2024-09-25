/*3
import { helloworld } from "./hello-funcs";
var message : string = helloworld(); 
console.log(helloworld()); */

/*4
import {helloyou} from "./hello-funcs"; 
console.log(helloyou("John")); */

/*5
import { helloHuman } from './hello-funcs';
import type { Human } from './types';

const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
};

console.log(helloHuman(johnDoe)); */

import { repeatHelloYou } from "./hello-funcs";
console.log(repeatHelloYou(5,"nabou")); 
