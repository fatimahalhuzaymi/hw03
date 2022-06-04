
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

//1

function countString(str, letter) {
    let count = 0;

    
    for (let i = 0; i < str.length; i++) {

        
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');


const result = countString(string, letterToCheck);
console.log(result);


//3
let persons = [  
    {
        Name:'Maram',age:25,job:'project manegar' ,hobby:'swimming',
    print: function(){
        console.log(this.Name+""+this.age+""+this.job+""+this.hobby);
          
    }
    },
    
    { 
        Name:'khalid',age:30,job:'engineer' ,hobby:'chess',
    print: function(){
        console.log(this.Name+""+this.age+""+this.job+""+this.hobby);
        }
    },
    
    {Name:Mohammed,age:20,job:'accountent' ,hobby:'eating',
    print: function(){
        console.log(this.Name+""+this.age+""+this.job+""+this.hobby);
        }
    }
]



