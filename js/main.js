// set up text to print, each item in array is a new line
var aText = new Array(
    "THE FUTURE OF IOT IS HERE"
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this position
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
  
  var iTextPos = 0; // initialize text position
  var sContents = ''; // initialize contents variable
  var iRow; // initialize current row
  
  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
  
    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "";
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }
  
  typewriter();
  