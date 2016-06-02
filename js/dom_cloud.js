var children = document.children;
var domCloud = {};

function getElements(elementArray){
  //base case statement
  if(elementArray.children === 0){
    return;
  }

  //iterates through the given input parameter array
  for(var i = 0; i < elementArray.length; i++){

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
var sortedArray = [];

//sorts through the object
for(var i = 0; i < objectKeys.length; i++){
  //inputs the objectKeys and the values into an array
  //ex. [[HTML, 1]]
  sortedArray.push([objectKeys[i], domCloud[objectKeys[i]]]);
}
//sorts the sortedArray by decreasing order
sortedArray.sort(function(a, b){return b[1]-a[1];});
console.log(sortedArray);
var valuesSoFar = [];
for(var index = 0; index < sortedArray.length; index++){
  //creates element for div
  var childElement = document.createElement("div");

  //creates a specific id for each childEleemnt div
  childElement.setAttribute("id", "Div" + index);


  //sets the information into element through innerHTML
  childElement.innerHTML = sortedArray[index][0] + ": " + sortedArray[index][1];

  //appends childElement into the element div of id: dom_cloud_container
  document.getElementById("dom_cloud_container").appendChild(childElement);

}

var sizeOfFont = 21; //starting font
var dupArray = []; //duplicate array

for(var k = 0; k < 20; k++){
  //if the index of sortedArray[k][1] is not found
  // the size of the font stays the same
  if(dupArray.indexOf(sortedArray[k][1]) !== -1){
    sizeOfFont = sizeOfFont;
  }else{
    //else the value gets pushed into the duplicate array
    //and the size of the font decreases by 1
    dupArray.push(sortedArray[k][1]);
    sizeOfFont = sizeOfFont - 1;
  }

  //this gets the specific div and changes the fontsize according to the
  //variable sizeOfFont
  document.getElementById("Div" + k).style.fontSize = Math.round(sizeOfFont) + "px";
}