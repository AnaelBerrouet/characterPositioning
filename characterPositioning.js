function countLetters(inputStr) {
  var output = {};

  inputStr = inputStr.split(""); //get rid of spaces and make it into and array

  inputStr.forEach( function(element, index){
      if (element in output) {
        output[element].push(index);
      } else {
        output[element] = [index];
      }
  });

  delete output[" "];

  return output;
}

console.log(countLetters("lighthouse in the house"));