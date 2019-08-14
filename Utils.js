
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


//############################# CONVERT TABLE DATA TO JSON #############################
 public static tableToJSON(table, numOfColumnToFetch?: number, dataFromComboBox?: boolean, readColIndexFrom?: number, jumpToColIndexBy?: number): any {//begin function
    var keyName;
    var keyNames = [];
    var objectArray = "";
    var numOfCols;

    if (numOfColumnToFetch != undefined) {
      numOfCols = numOfColumnToFetch;
    } else {
      numOfCols = table.rows[0].cells.length;
    }

    var numOfRows = table.rows.length;
    objectArray = objectArray.concat("[");
    // console.log(numOfRows + " ------")

    if (readColIndexFrom != undefined && jumpToColIndexBy == undefined) {
      for (var i = readColIndexFrom; i < numOfCols; i++) {//begin for loop
        keyName = table.rows[0].cells[i].id;
        // console.log("key= " + (table.rows[0].cells[i].id))
        keyNames.push(keyName);
      }
    }

    if (jumpToColIndexBy != undefined && readColIndexFrom == undefined) {
      for (var i = 0; i < numOfCols; i = i + jumpToColIndexBy) {//begin for loop
        keyName = table.rows[0].cells[i].id;
        // console.log("key " + (table.rows[0].cells[i].id))
        keyNames.push(keyName);
      }
    }

    if (jumpToColIndexBy != undefined && readColIndexFrom != undefined) {
      for (var i = readColIndexFrom - 1; i < numOfCols; i = i + jumpToColIndexBy) {//begin for loop
        keyName = table.rows[0].cells[i].id;
        // console.log("key ==== " + table.rows[0].cells[i].id)
        keyNames.push(keyName);
      }
    }
    // alert(jumpToColIndexBy +" "+ readColIndexFrom)
    if (jumpToColIndexBy == undefined && readColIndexFrom == undefined) {
      for (var i = 0; i < numOfCols; i++) {//begin for loop
        keyName = table.rows[0].cells[i].id;
        console.log("key ==== " + table.rows[0].cells[i].id)
        keyNames.push(keyName);
      }
    }

    // console.log("key " + keyNames)
    for (var i = 1; i < numOfRows; i++) {
      objectArray = objectArray.concat("{");
      for (var j = 0; j < numOfCols; j++) {
        var inputObj;

        if (dataFromComboBox == true && (j == numOfCols - 1)) {
          inputObj = table.rows[i].cells[j].children[0].children[0];
        } else {
          inputObj = table.rows[i].cells[j].children[0];
        }
        var inputValue = inputObj.value;
        // var inputValue = inputObj;
        //store the object keyNames and its values
        objectArray = objectArray.concat("\"" + keyNames[j] + "\"" + ":" + "\"" + inputValue + "\"");
        //if j less than the number of columns - 1(<-- accounting for 0 based arrays)
        if (j < (numOfCols - 1)) {//begin if then
          //add the , seperator
          objectArray = objectArray.concat(",");
        }//end if then
      }//end inner for loop
      //if i less than the number of rows - 1(<-- accounting for 0 based arrays)
      if (i < (numOfRows - 1)) {//begin if then
        //add the closing } object bracket followed by a , separator
        objectArray = objectArray.concat("},");
      } else {
        //add the closing } object bracket
        objectArray = objectArray.concat("}");
      }
      // console.log(objectArray);
    }
    //add the closing ] array bracket
    objectArray = objectArray.concat("]");
    return objectArray;
  }

//############################# FOR COPYING DATA TO CLIPBOARD #############################
  public static copyMessage(textToCopy) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = textToCopy;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

