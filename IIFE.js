// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`D COnnected`);
})(); 
// ; is important to use so that the function
        // can stop working and next function can execute now


( () => {
    console.log("DB COnnected Two")
})();

( (namr) =>{
    console.log(`Db COnnected ${namr}`)
})("hitesh")