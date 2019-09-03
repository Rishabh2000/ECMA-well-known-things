 //############################### JSON Parser method : START ###############################
 
 // Currently works only for nested objects.
  let jsonPath = []; //for defining path of any JSON key
  let attributeName = []; //for defining name of any JSON key
  let attributeType = []; //for defining data type of value of any JSON key
  let temp_name = "";
  
 jsonParser(json) {
    let key_arr = Object.keys(JSON.parse(json));
    let value_arr = Object.values(JSON.parse(json));
    for (let i = 0; i < key_arr.length; i++) {
      if (!(value_arr[i] instanceof Object)) {
        jsonPath.push(temp_name != "" ? temp_name + "." + key_arr[i] : key_arr[i]); 
        attributeName.push(key_arr[i]);
        attributeType.push(typeof (value_arr[i]));
      } else {
        temp_name = temp_name == "" ? key_arr[i].toString() : temp_name + "." + key_arr[i];
        jsonParser(JSON.stringify(value_arr[i]));
        temp_name = "";
      }
    }
    return;
  }
  
   //############################### JSON Parser method  : END ###############################
