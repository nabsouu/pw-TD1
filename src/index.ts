/*3
import { helloworld } from "./hello-funcs";
var message : string = helloworld(); 
console.log(helloworld()); */

/*4
import {helloyou} from "./hello-funcs"; 
console.log(helloyou("John")); */


import  {helloHuman}from './hello-funcs';
import type { Human } from './types';
import {helloyou} from "./hello-funcs"; 
import { repeatHelloYou } from "./hello-funcs";


/*console.log(repeatHelloYou(5,"nabou"));*/

const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
};

/*console.log(helloHuman(johnDoe)); */



try {
    console.log(helloyou("Alice"));
  } catch (error) {
    console.error("Error in helloYou:", error);
  }
  
  try {
    console.log(helloHuman(johnDoe));
  } catch (error) {
    console.error("Error in helloHuman:", error);
  }
  
  try {
    console.log(repeatHelloYou(3,"John"));
  } catch (error) {
    console.error("Error in repeatHelloYou:", error);
  }
  
