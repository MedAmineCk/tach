function getShortMessage(myArray){
    var newArray = [];
    for(var i = 0; i < myArray.length;i++){
      if(myArray[i].length < 50){
        newArray.push(myArray[i]);
      }
    }
    return newArray;
  }
  var shortMessage = getShortMessage(["salut","cava","cette message est de longuer superieur a 50 cette message est de longuer superieur a 50 cette message est de longuer superieur a 50"]);
  console.log(shortMessage);
