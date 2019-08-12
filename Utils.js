
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



//############################# DOWNLOAD FILE START #############################

// DOWNLOAD FILE in the same page 
//this can be used to download a file, without the need to open new-tab.
const downloadURI = (fileURL, fileName ) => {
    var link = document.createElement("a");
    link.download = fileName;
    link.href = fileURL;
    link.click();
}


function downloadPDF(pdfBase64Data, fileName) {
      /*This method will download a PDF.*/
    const linkSource = `data:application/pdf;base64,${pdfBase64Data}`;
    downloadURI(linkSource, fileName);
}

function downloadPng(pngImageBase64Data, fileName) {
    /*This method will download a png-image.*/
    const linkSource = `data:image/png;base64, ${pngImageBase64Data}`;
    downloadURI(linkSource, fileName);
}

function downloadJpg(jpgImageBase64Data, fileName) {
    /*This method will download a jpeg-image.*/
    const linkSource = `data:image/jpeg;base64, ${jpgImageBase64Data}`;
    downloadURI(linkSource, fileName);
}

//############################# DOWNLOAD FILE STOP #############################
