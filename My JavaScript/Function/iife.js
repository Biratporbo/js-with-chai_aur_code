//(IIFE => Immediately Invoked Function Expressions)

(function chai(){
    console.log(`DB CONNECTED`);
})();                       //IIFE using in function

( () => {
    console.log(`DB CONNECTED TWO`);
})();                           //Unknown IIFE

((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('birat');                       //parameter passing

