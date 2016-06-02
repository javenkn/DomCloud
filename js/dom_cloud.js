var children = document.children;
var domCloud = {};

function getElements(elementArray){
  //base case statement
  if(elementArray.children === 0){
    return;
  }

  //iterates through the given input parameter array
  for(var i = 0; i < elementArray.length; i++){
    debugger;

    //creates the variable elementTag and assigns the tag name associated with
    //the child.
    var elementTag = elementArray[i].tagName;
    console.log(elementTag);

    //checks if elementTag is in the domCloud object.  If it is it increments by 1
    //if it isn't then it creates a key and sets the counter to 1.
    if(domCloud[elementTag]){
      domCloud[elementTag]++;
    }else{
      domCloud[elementTag] = 1;
    }

    //creates a childrenArray variable and sets it to equal the children
    //of elementArray[i]
    var childrenArray = elementArray[i].children;

    //calls the recursive function getElements to obtain the next children
    //elements
    getElements(childrenArray);
  }

}
getElements(children);
var objectKeys = Object.keys(domCloud);
for(var i = 0; i < objectKeys.length; i++){
  var childElement = document.createElement("header");
  var h2 = document.createElement("h2");
  h2.innerHTML = objectKeys[i] + ": " + domCloud[objectKeys[i]] + ", ";
  childElement.appendChild(h2);
  document.getElementById("dom_cloud_container").appendChild(childElement);
}
console.log(domCloud);