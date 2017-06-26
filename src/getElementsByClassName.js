// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var nodesArr = [];
  var findNodes = function(element) {
    if (_.contains(element.classList, className)) {
      nodesArr.push(element);
    }

    _.each(element.childNodes, function(child) {
      findNodes(child);
    });
  };
  
  findNodes(document.body);
  return nodesArr;
};
