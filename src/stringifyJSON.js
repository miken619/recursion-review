// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
   var typeOf = typeof obj;
   if(typeOf === "number" || typeOf  === "boolean" || obj === null){
    return "" + obj;
   }

   if(typeOf === "string"){
      return '"' + obj + '"';
   }

   if(Array.isArray(obj)){
      var arr = [];
      var length = obj.length;
      
      for(var i = 0; i < length; ++i){
         arr.push(stringifyJSON(obj[i]));
      }

      return "[" + arr.join(",") + "]";

   }

   if(typeOf === "object"){
      var arr = [];
      
      for(var key in obj){
         var element = obj[key]; 
         if(typeof element === "function" || element === undefined){
            continue;
         }
         arr.push(stringifyJSON(key) + ":" + stringifyJSON(element));
       
      }
      
      return "{" + arr.join(",") + "}";

   }
};
