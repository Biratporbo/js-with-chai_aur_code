var c = 300               //And code executions define global scope
let a = 300
if(true){                       //--------
    a = 10                      //|
    const b = 20               //|inner loop define => block scope 
    console.log("Inner: ", a);  //|
}                               //---------
// c = 150
// a =90

// console.log(a);
// console.log(b);
// console.log(c);

//[Part - 2] ----------------------------------------------------------------

function one(){
    const username = "Birat"
    function two(){
        const website = "Github"
        console.log(username);
    }
    two()
}
one()

if(true){                                    //|    
    const username = "birat"                 //| the condintion define nested if;
    if(username === "birat"){                //| this is will be scope
        const anothername = "porbo"          //| 
        console.log(username + anothername); //|
    }
}


// +++++++++++++++++++++++++++++++++++++++ interesting!

console.log(addone(5));
function addone(num){            // this called Hosting!
    return num + 1
}