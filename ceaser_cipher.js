function rot13(str) { // LBH QVQ VG!
  
  var charCode;
  var encodedStr ="";
  for(var i=0; i<str.length; i++)
  {
    charCode = str.charCodeAt(i);
    if(charCode >= 65 && charCode <=  90) 
    {
      encodedStr += String.fromCharCode((charCode - 65 + 13) % 26 + 65);  
    }
    else  
      {
        encodedStr += str.charAt(i);
      }
  }
  
  return encodedStr;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
