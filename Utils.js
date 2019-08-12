
//############################# ARRAY METHODS START #############################

const addElementToArrayUniquely = (element, array) => {
  //will not add element, if it already exists
  let elementAlreadyExist = false;
  array.map(data => {
    if (data.id == element.id) {
      elementAlreadyExist = true;
    }
  });
  if (!elementAlreadyExist) {
    array.push(element);
  }
  return array;
};

const deleteElementFromArray = (element, elementArray) => {
  let newElementArray = [];

  elementArray.filter(data => {
    if (data.id != element.id) {
      newElementArray.push(data);
    }
  });
  return newElementArray;
};

const checkIfElementExistsInArray = (element, elementArray) => {
  let exists = false;
  elementArray.map(data => {
    if (data.id == element.id) exists = true;
  });
  return exists;
};

//############################# ARRAY METHODS STOP #############################




const checkIfStringContainsPattern = (string, pattern) => {
    string += "";
    pattern += "";
    string = string.toUpperCase();
    pattern = pattern.toUpperCase();

    return string.includes(pattern);
}
// Eg: checkIfStringContainsPattern("apple" , "app" ) , will return TRUE.
