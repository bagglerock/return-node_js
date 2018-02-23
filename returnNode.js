//  Make temporary holders for the parent object names
var previous = "";  //  One place up
var veryPrevious = "";  //  To places up
var found = false;

//  The function to check if "item" is within "object"
function writeObj (obj , item) {
  //  For each of the keys within Object obj do something
  Object.keys(obj).forEach(function(key){
    //  Make a variable for the possible object within
    var inner = obj[key];  
    //  If whatever is inside is not an object and it matches the item to test then check for other things
    if ( inner.constructor !== Object && inner === item ) {
      //  If the non-object that matches is within an array, console log the name of the object two places up 
      if ( obj.constructor === Array ){
        console.log(inner + " is inside " + veryPrevious);
        //  Set found as true
        found = true;
        //  If the non-object that matches is within an object, console log the name of the object only one place up
      } else if ( obj.constructor === Object ) {
        console.log(inner + " is inside " + previous);
        //  Set found as true
        found = true;
      }
    }
    //  If whatever is inside the original object is another object, do the following things
    if (typeof(inner) === "object" ){
      //  Set the variable for the object name two places up
      veryPrevious = previous;
      // Set the variable for the object name one place up
      previous = key;
      // Do the function again with the object inside another object
      writeObj(inner, item);
    }
  });
}
var test = "headphones";
var obj = theCobWeb;

writeObj(obj, test);
if (!found){
      console.log(test + " is not within " + Object.keys(obj));
}
