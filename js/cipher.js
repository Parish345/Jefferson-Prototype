var CURRENTCYPHER;
var LOCKEDCYPHER;

function uniqueValues(elements) {

    var values = {},
        len = elements.length,
        i = 0;

    for (; i < len; i++) {
        if (!values[elements[i].value]) values[elements[i].value] = true;
        else return false;
    }
    return true;
}

function validInput(elements) {
      var valid = true;

      for(i=0; i < elements.length; i++) {
        if (elements[i].value > 26 | elements[i].value < 1)
            valid = false;
      }
      return valid;
}

function init() {
  var wheel1 = [{value: 1, display:'I'}, {value: 2, display:'L'}, {value: 3, display:'B'}, {value: 4, display:'W'}, {value: 5, display:'H'}, {value: 6, display:'M'}, {value: 7, display:'T'}, {value: 8, display:'J'}, {value: 9, display:'X'}, {value: 10, display:'N'}, {value: 11, display:'U'}, {value: 12, display:'D'}, {value: 13, display:'E'}, {value: 14, display:'S'},  {value: 15, display:'R'}, {value: 16, display:'K'}, {value: 17, display:'C'}, {value: 18, display:'A'}, {value: 19, display:'Q'}, {value: 20, display:'Y'}, {value: 21, display:'F'}, {value: 22, display:'P'}, {value: 23, display:'G'}, {value: 24, display:'O'}, {value: 25, display:'V'}, {value: 26, display:'Z'}];

  var wheel2 = [{value: 1, display:'Y'}, {value: 2, display:'L'}, {value: 3, display:'T'}, {value: 4, display:'H'}, {value: 5, display:'M'}, {value: 6, display:'K'}, {value: 7, display:'C'}, {value: 8, display:'W'}, {value: 9, display:'D'}, {value: 10, display:'A'}, {value: 11, display:'U'}, {value: 12, display:'S'}, {value: 13, display:'N'}, {value: 14, display:'J'},  {value: 15, display:'O'}, {value: 16, display:'P'}, {value: 17, display:'B'}, {value: 18, display:'I'}, {value: 19, display:'V'}, {value: 20, display:'Q'}, {value: 21, display:'F'}, {value: 22, display:'Z'}, {value: 23, display:'E'}, {value: 24, display:'G'}, {value: 25, display:'X'}, {value: 26, display:'R'}];

  var wheel3 = [{value: 1, display:'A'}, {value: 2, display:'U'}, {value: 3, display:'R'}, {value: 4, display:'B'}, {value: 5, display:'J'}, {value: 6, display:'I'}, {value: 7, display:'G'}, {value: 8, display:'T'}, {value: 9, display:'Y'}, {value: 10, display:'L'}, {value: 11, display:'E'}, {value: 12, display:'Q'}, {value: 13, display:'P'}, {value: 14, display:'O'},  {value: 15, display:'Z'}, {value: 16, display:'C'}, {value: 17, display:'F'}, {value: 18, display:'W'}, {value: 19, display:'K'}, {value: 20, display:'S'}, {value: 21, display:'N'}, {value: 22, display:'D'}, {value: 23, display:'V'}, {value: 24, display:'X'}, {value: 25, display:'M'}, {value: 26, display:'H'}];

  var wheel4 = [{value: 1, display:'B'}, {value: 2, display:'H'}, {value: 3, display:'I'}, {value: 4, display:'M'}, {value: 5, display:'Q'}, {value: 6, display:'C'}, {value: 7, display:'P'}, {value: 8, display:'S'}, {value: 9, display:'K'}, {value: 10, display:'L'}, {value: 11, display:'F'}, {value: 12, display:'X'}, {value: 13, display:'U'}, {value: 14, display:'E'},  {value: 15, display:'V'}, {value: 16, display:'J'}, {value: 17, display:'Y'}, {value: 18, display:'G'}, {value: 19, display:'A'}, {value: 20, display:'D'}, {value: 21, display:'T'}, {value: 22, display:'N'}, {value: 23, display:'W'}, {value: 24, display:'R'}, {value: 25, display:'O'}, {value: 26, display:'Z'}];

  var wheel5 = [{value: 1, display:'E'}, {value: 2, display:'J'}, {value: 3, display:'A'}, {value: 4, display:'B'}, {value: 5, display:'S'}, {value: 6, display:'O'}, {value: 7, display:'P'}, {value: 8, display:'F'}, {value: 9, display:'N'}, {value: 10, display:'L'}, {value: 11, display:'G'}, {value: 12, display:'R'}, {value: 13, display:'K'}, {value: 14, display:'Z'},  {value: 15, display:'M'}, {value: 16, display:'W'}, {value: 17, display:'Q'}, {value: 18, display:'H'}, {value: 19, display:'C'}, {value: 20, display:'V'}, {value: 21, display:'U'}, {value: 22, display:'X'}, {value: 23, display:'I'}, {value: 24, display:'Y'}, {value: 25, display:'T'}, {value: 26, display:'D'}];

  var wheel6 = [{value: 1, display:'U'}, {value: 2, display:'P'}, {value: 3, display:'Y'}, {value: 4, display:'N'}, {value: 5, display:'K'}, {value: 6, display:'D'}, {value: 7, display:'H'}, {value: 8, display:'J'}, {value: 9, display:'S'}, {value: 10, display:'R'}, {value: 11, display:'X'}, {value: 12, display:'C'}, {value: 13, display:'V'}, {value: 14, display:'T'},  {value: 15, display:'A'}, {value: 16, display:'Z'}, {value: 17, display:'Q'}, {value: 18, display:'I'}, {value: 19, display:'O'}, {value: 20, display:'W'}, {value: 21, display:'B'}, {value: 22, display:'G'}, {value: 23, display:'F'}, {value: 24, display:'M'}, {value: 25, display:'L'}, {value: 26, display:'E'}];

  var wheel7 = [{value: 1, display:'D'}, {value: 2, display:'R'}, {value: 3, display:'N'}, {value: 4, display:'K'}, {value: 5, display:'U'}, {value: 6, display:'W'}, {value: 7, display:'G'}, {value: 8, display:'F'}, {value: 9, display:'B'}, {value: 10, display:'P'}, {value: 11, display:'A'}, {value: 12, display:'H'}, {value: 13, display:'X'}, {value: 14, display:'S'},  {value: 15, display:'E'}, {value: 16, display:'T'}, {value: 17, display:'Q'}, {value: 18, display:'Z'}, {value: 19, display:'V'}, {value: 20, display:'J'}, {value: 21, display:'L'}, {value: 22, display:'M'}, {value: 23, display:'Y'}, {value: 24, display:'I'}, {value: 25, display:'O'}, {value: 26, display:'C'}];

  var wheel8 = [{value: 1, display:'O'}, {value: 2, display:'J'}, {value: 3, display:'Y'}, {value: 4, display:'X'}, {value: 5, display:'I'}, {value: 6, display:'F'}, {value: 7, display:'U'}, {value: 8, display:'Z'}, {value: 9, display:'K'}, {value: 10, display:'W'}, {value: 11, display:'H'}, {value: 12, display:'G'}, {value: 13, display:'E'}, {value: 14, display:'B'},  {value: 15, display:'S'}, {value: 16, display:'A'}, {value: 17, display:'N'}, {value: 18, display:'V'}, {value: 19, display:'L'}, {value: 20, display:'M'}, {value: 21, display:'G'}, {value: 22, display:'T'}, {value: 23, display:'C'}, {value: 24, display:'P'}, {value: 25, display:'U'}, {value: 26, display:'R'}];

  var wheel9 = [{value: 1, display:'S'}, {value: 2, display:'P'}, {value: 3, display:'W'}, {value: 4, display:'I'}, {value: 5, display:'Y'}, {value: 6, display:'F'}, {value: 7, display:'B'}, {value: 8, display:'U'}, {value: 9, display:'M'}, {value: 10, display:'O'}, {value: 11, display:'R'}, {value: 12, display:'D'}, {value: 13, display:'L'}, {value: 14, display:'E'},  {value: 15, display:'Q'}, {value: 16, display:'V'}, {value: 17, display:'A'}, {value: 18, display:'T'}, {value: 19, display:'Z'}, {value: 20, display:'J'}, {value: 21, display:'C'}, {value: 22, display:'X'}, {value: 23, display:'N'}, {value: 24, display:'G'}, {value: 25, display:'K'}, {value: 26, display:'H'}];

  var wheel10 = [{value: 1, display:'C'}, {value: 2, display:'A'}, {value: 3, display:'T'}, {value: 4, display:'Q'}, {value: 5, display:'O'}, {value: 6, display:'I'}, {value: 7, display:'Z'}, {value: 8, display:'W'}, {value: 9, display:'E'}, {value: 10, display:'D'}, {value: 11, display:'R'}, {value: 12, display:'M'}, {value: 13, display:'K'}, {value: 14, display:'X'},  {value: 15, display:'V'}, {value: 16, display:'P'}, {value: 17, display:'N'}, {value: 18, display:'H'}, {value: 19, display:'B'}, {value: 20, display:'S'}, {value: 21, display:'L'}, {value: 22, display:'G'}, {value: 23, display:'J'}, {value: 24, display:'F'}, {value: 25, display:'U'}, {value: 26, display:'Y'}];

  var wheel11 = [{value: 1, display:'D'}, {value: 2, display:'Z'}, {value: 3, display:'R'}, {value: 4, display:'J'}, {value: 5, display:'X'}, {value: 6, display:'C'}, {value: 7, display:'H'}, {value: 8, display:'F'}, {value: 9, display:'A'}, {value: 10, display:'U'}, {value: 11, display:'O'}, {value: 12, display:'W'}, {value: 13, display:'N'}, {value: 14, display:'L'},  {value: 15, display:'T'}, {value: 16, display:'I'}, {value: 17, display:'E'}, {value: 18, display:'V'}, {value: 19, display:'S'}, {value: 20, display:'P'}, {value: 21, display:'B'}, {value: 22, display:'Q'}, {value: 23, display:'M'}, {value: 24, display:'K'}, {value: 25, display:'G'}, {value: 26, display:'Y'}];

  var wheel12 = [{value: 1, display:'B'}, {value: 2, display:'I'}, {value: 3, display:'J'}, {value: 4, display:'W'}, {value: 5, display:'T'}, {value: 6, display:'F'}, {value: 7, display:'G'}, {value: 8, display:'A'}, {value: 9, display:'X'}, {value: 10, display:'U'}, {value: 11, display:'D'}, {value: 12, display:'R'}, {value: 13, display:'Z'}, {value: 14, display:'V'},  {value: 15, display:'Q'}, {value: 16, display:'M'}, {value: 17, display:'Y'}, {value: 18, display:'K'}, {value: 19, display:'H'}, {value: 20, display:'N'}, {value: 21, display:'P'}, {value: 22, display:'E'}, {value: 23, display:'O'}, {value: 24, display:'S'}, {value: 25, display:'C'}, {value: 26, display:'L'}];

  var wheel13 = [{value: 1, display:'C'}, {value: 2, display:'O'}, {value: 3, display:'Y'}, {value: 4, display:'J'}, {value: 5, display:'P'}, {value: 6, display:'N'}, {value: 7, display:'V'}, {value: 8, display:'M'}, {value: 9, display:'A'}, {value: 10, display:'W'}, {value: 11, display:'U'}, {value: 12, display:'B'}, {value: 13, display:'F'}, {value: 14, display:'E'},  {value: 15, display:'T'}, {value: 16, display:'R'}, {value: 17, display:'Q'}, {value: 18, display:'D'}, {value: 19, display:'Z'}, {value: 20, display:'X'}, {value: 21, display:'K'}, {value: 22, display:'L'}, {value: 23, display:'S'}, {value: 24, display:'G'}, {value: 25, display:'I'}, {value: 26, display:'H'}];

  var wheel14 = [{value: 1, display:'C'}, {value: 2, display:'G'}, {value: 3, display:'K'}, {value: 4, display:'Q'}, {value: 5, display:'X'}, {value: 6, display:'E'}, {value: 7, display:'H'}, {value: 8, display:'U'}, {value: 9, display:'B'}, {value: 10, display:'S'}, {value: 11, display:'M'}, {value: 12, display:'W'}, {value: 13, display:'T'}, {value: 14, display:'I'},  {value: 15, display:'N'}, {value: 16, display:'J'}, {value: 17, display:'V'}, {value: 18, display:'Z'}, {value: 19, display:'F'}, {value: 20, display:'P'}, {value: 21, display:'A'}, {value: 22, display:'L'}, {value: 23, display:'Y'}, {value: 24, display:'D'}, {value: 25, display:'R'}, {value: 26, display:'O'}];

  var wheel15 = [{value: 1, display:'D'}, {value: 2, display:'X'}, {value: 3, display:'B'}, {value: 4, display:'A'}, {value: 5, display:'N'}, {value: 6, display:'O'}, {value: 7, display:'W'}, {value: 8, display:'R'}, {value: 9, display:'G'}, {value: 10, display:'K'}, {value: 11, display:'Y'}, {value: 12, display:'Q'}, {value: 13, display:'M'}, {value: 14, display:'H'},  {value: 15, display:'T'}, {value: 16, display:'P'}, {value: 17, display:'I'}, {value: 18, display:'J'}, {value: 19, display:'L'}, {value: 20, display:'Z'}, {value: 21, display:'C'}, {value: 22, display:'S'}, {value: 23, display:'U'}, {value: 24, display:'E'}, {value: 25, display:'V'}, {value: 26, display:'F'}];

  var wheel16 = [{value: 1, display:'A'}, {value: 2, display:'U'}, {value: 3, display:'T'}, {value: 4, display:'E'}, {value: 5, display:'C'}, {value: 6, display:'D'}, {value: 7, display:'P'}, {value: 8, display:'B'}, {value: 9, display:'W'}, {value: 10, display:'J'}, {value: 11, display:'M'}, {value: 12, display:'V'}, {value: 13, display:'S'}, {value: 14, display:'L'},  {value: 15, display:'K'}, {value: 16, display:'Q'}, {value: 17, display:'H'}, {value: 18, display:'N'}, {value: 19, display:'O'}, {value: 20, display:'I'}, {value: 21, display:'Z'}, {value: 22, display:'R'}, {value: 23, display:'X'}, {value: 24, display:'Y'}, {value: 25, display:'G'}, {value: 26, display:'F'}];

  var wheel17 = [{value: 1, display:'T'}, {value: 2, display:'I'}, {value: 3, display:'O'}, {value: 4, display:'B'}, {value: 5, display:'J'}, {value: 6, display:'P'}, {value: 7, display:'V'}, {value: 8, display:'Q'}, {value: 9, display:'M'}, {value: 10, display:'R'}, {value: 11, display:'H'}, {value: 12, display:'Y'}, {value: 13, display:'X'}, {value: 14, display:'A'},  {value: 15, display:'S'}, {value: 16, display:'F'}, {value: 17, display:'U'}, {value: 18, display:'Z'}, {value: 19, display:'W'}, {value: 20, display:'N'}, {value: 21, display:'E'}, {value: 22, display:'G'}, {value: 23, display:'D'}, {value: 24, display:'L'}, {value: 25, display:'C'}, {value: 26, display:'K'}];

  var wheel18 = [{value: 1, display:'U'}, {value: 2, display:'I'}, {value: 3, display:'L'}, {value: 4, display:'Y'}, {value: 5, display:'K'}, {value: 6, display:'C'}, {value: 7, display:'M'}, {value: 8, display:'V'}, {value: 9, display:'X'}, {value: 10, display:'D'}, {value: 11, display:'P'}, {value: 12, display:'F'}, {value: 13, display:'A'}, {value: 14, display:'E'},  {value: 15, display:'O'}, {value: 16, display:'G'}, {value: 17, display:'S'}, {value: 18, display:'H'}, {value: 19, display:'N'}, {value: 20, display:'Z'}, {value: 21, display:'W'}, {value: 22, display:'Q'}, {value: 23, display:'J'}, {value: 24, display:'T'}, {value: 25, display:'B'}, {value: 26, display:'R'}];

  var wheel19 = [{value: 1, display:'I'}, {value: 2, display:'M'}, {value: 3, display:'S'}, {value: 4, display:'Q'}, {value: 5, display:'G'}, {value: 6, display:'V'}, {value: 7, display:'Y'}, {value: 8, display:'P'}, {value: 9, display:'O'}, {value: 10, display:'U'}, {value: 11, display:'B'}, {value: 12, display:'N'}, {value: 13, display:'K'}, {value: 14, display:'A'},  {value: 15, display:'W'}, {value: 16, display:'H'}, {value: 17, display:'F'}, {value: 18, display:'E'}, {value: 19, display:'L'}, {value: 20, display:'D'}, {value: 21, display:'X'}, {value: 22, display:'T'}, {value: 23, display:'R'}, {value: 24, display:'C'}, {value: 25, display:'Z'}, {value: 26, display:'J'}];

  var wheel20 = [{value: 1, display:'J'}, {value: 2, display:'B'}, {value: 3, display:'E'}, {value: 4, display:'V'}, {value: 5, display:'P'}, {value: 6, display:'L'}, {value: 7, display:'S'}, {value: 8, display:'F'}, {value: 9, display:'Z'}, {value: 10, display:'Q'}, {value: 11, display:'M'}, {value: 12, display:'D'}, {value: 13, display:'C'}, {value: 14, display:'T'},  {value: 15, display:'I'}, {value: 16, display:'O'}, {value: 17, display:'K'}, {value: 18, display:'A'}, {value: 19, display:'Y'}, {value: 20, display:'X'}, {value: 21, display:'G'}, {value: 22, display:'U'}, {value: 23, display:'W'}, {value: 24, display:'R'}, {value: 25, display:'N'}, {value: 26, display:'H'}];

  var wheel21 = [{value: 1, display:'Q'}, {value: 2, display:'T'}, {value: 3, display:'Z'}, {value: 4, display:'U'}, {value: 5, display:'X'}, {value: 6, display:'O'}, {value: 7, display:'N'}, {value: 8, display:'J'}, {value: 9, display:'S'}, {value: 10, display:'K'}, {value: 11, display:'E'}, {value: 12, display:'W'}, {value: 13, display:'P'}, {value: 14, display:'V'},  {value: 15, display:'Y'}, {value: 16, display:'R'}, {value: 17, display:'A'}, {value: 18, display:'D'}, {value: 19, display:'H'}, {value: 20, display:'G'}, {value: 21, display:'B'}, {value: 22, display:'C'}, {value: 23, display:'F'}, {value: 24, display:'L'}, {value: 25, display:'I'}, {value: 26, display:'M'}];

  var wheel22 = [{value: 1, display:'S'}, {value: 2, display:'L'}, {value: 3, display:'E'}, {value: 4, display:'P'}, {value: 5, display:'R'}, {value: 6, display:'Z'}, {value: 7, display:'J'}, {value: 8, display:'Y'}, {value: 9, display:'Q'}, {value: 10, display:'N'}, {value: 11, display:'C'}, {value: 12, display:'X'}, {value: 13, display:'A'}, {value: 14, display:'H'},  {value: 15, display:'O'}, {value: 16, display:'G'}, {value: 17, display:'D'}, {value: 18, display:'F'}, {value: 19, display:'B'}, {value: 20, display:'V'}, {value: 21, display:'T'}, {value: 22, display:'I'}, {value: 23, display:'K'}, {value: 24, display:'W'}, {value: 25, display:'U'}, {value: 26, display:'M'}];

  var wheel23 = [{value: 1, display:'C'}, {value: 2, display:'J'}, {value: 3, display:'D'}, {value: 4, display:'R'}, {value: 5, display:'B'}, {value: 6, display:'T'}, {value: 7, display:'K'}, {value: 8, display:'F'}, {value: 9, display:'S'}, {value: 10, display:'E'}, {value: 11, display:'X'}, {value: 12, display:'P'}, {value: 13, display:'Q'}, {value: 14, display:'O'},  {value: 15, display:'Z'}, {value: 16, display:'G'}, {value: 17, display:'W'}, {value: 18, display:'Y'}, {value: 19, display:'M'}, {value: 20, display:'H'}, {value: 21, display:'L'}, {value: 22, display:'A'}, {value: 23, display:'I'}, {value: 24, display:'V'}, {value: 25, display:'N'}, {value: 26, display:'U'}];

  var wheel24 = [{value: 1, display:'J'}, {value: 2, display:'V'}, {value: 3, display:'X'}, {value: 4, display:'L'}, {value: 5, display:'D'}, {value: 6, display:'C'}, {value: 7, display:'W'}, {value: 8, display:'H'}, {value: 9, display:'A'}, {value: 10, display:'T'}, {value: 11, display:'I'}, {value: 12, display:'Y'}, {value: 13, display:'B'}, {value: 14, display:'E'},  {value: 15, display:'Q'}, {value: 16, display:'O'}, {value: 17, display:'R'}, {value: 18, display:'F'}, {value: 19, display:'N'}, {value: 20, display:'S'}, {value: 21, display:'Z'}, {value: 22, display:'U'}, {value: 23, display:'P'}, {value: 24, display:'K'}, {value: 25, display:'M'}, {value: 26, display:'G'}];

  var wheel25 = [{value: 1, display:'F'}, {value: 2, display:'R'}, {value: 3, display:'Y'}, {value: 4, display:'N'}, {value: 5, display:'P'}, {value: 6, display:'I'}, {value: 7, display:'H'}, {value: 8, display:'O'}, {value: 9, display:'A'}, {value: 10, display:'Z'}, {value: 11, display:'Q'}, {value: 12, display:'B'}, {value: 13, display:'E'}, {value: 14, display:'T'},  {value: 15, display:'C'}, {value: 16, display:'J'}, {value: 17, display:'M'}, {value: 18, display:'W'}, {value: 19, display:'D'}, {value: 20, display:'V'}, {value: 21, display:'X'}, {value: 22, display:'S'}, {value: 23, display:'L'}, {value: 24, display:'K'}, {value: 25, display:'G'}, {value: 26, display:'U'}];

  var wheel26 = [{value: 1, display:'Q'}, {value: 2, display:'I'}, {value: 3, display:'Y'}, {value: 4, display:'N'}, {value: 5, display:'T'}, {value: 6, display:'M'}, {value: 7, display:'J'}, {value: 8, display:'V'}, {value: 9, display:'O'}, {value: 10, display:'D'}, {value: 11, display:'K'}, {value: 12, display:'B'}, {value: 13, display:'C'}, {value: 14, display:'W'},  {value: 15, display:'R'}, {value: 16, display:'X'}, {value: 17, display:'S'}, {value: 18, display:'U'}, {value: 19, display:'F'}, {value: 20, display:'A'}, {value: 21, display:'H'}, {value: 22, display:'L'}, {value: 23, display:'P'}, {value: 24, display:'Z'}, {value: 25, display:'E'}, {value: 26, display:'G'}];


    var key = [];

    for (i = 1; i <= 26; i++){
      key.push(document.getElementById('pos' + i).value);
          document.getElementById("pos" + i).readOnly = true;
    }
    var newWheel = [];

    for (i = 0; i < 26; i++){
      switch(key[i]){
        case '26':
          newWheel.push(wheel26);
          break;
        case '25':
          newWheel.push(wheel25);
          break;
        case '24':
          newWheel.push(wheel24);
          break;
        case '23':
          newWheel.push(wheel23);
          break;
        case '22':
          newWheel.push(wheel22);
          break;
        case '21':
          newWheel.push(wheel21);
          break;
        case '20':
          newWheel.push(wheel20);
          break;
        case '19':
          newWheel.push(wheel19);
          break;
        case '18':
          newWheel.push(wheel18);
          break;
        case '17':
          newWheel.push(wheel17);
          break;
        case '16':
          newWheel.push(wheel16);
          break;
        case '15':
          newWheel.push(wheel15);
          break;
        case '14':
          newWheel.push(wheel14);
          break;
        case '13':
          newWheel.push(wheel13);
          break;
        case '12':
          newWheel.push(wheel12);
          break;
        case '11':
          newWheel.push(wheel11);
          break;
        case '10':
          newWheel.push(wheel10);
          break;
        case '9':
          newWheel.push(wheel9);
          break;
        case '8':
          newWheel.push(wheel8);
          break;
        case '7':
          newWheel.push(wheel7);
          break;
        case '6':
          newWheel.push(wheel6);
          break;
        case '5':
          newWheel.push(wheel5);
          break;
        case '4':
          newWheel.push(wheel4);
          break;
        case '3':
          newWheel.push(wheel3);
          break;
        case '2':
          newWheel.push(wheel2);
          break;
        case '1':
          newWheel.push(wheel1);
          break;
        }

    };


    CURRENTCYPHER = mobiscroll.scroller('#Cypher', {
        theme: 'ios',
        display: 'inline',
        width: 30,
        wheels: [
            [{
                label: 'Wheel 1',
                data: newWheel[0]
            },
            {
                label: 'Wheel 2',
                data: newWheel[1]
            },
            {
                label: 'Wheel 3',
                data: newWheel[2]
            },
            {
                label: 'Wheel 4',
                data: newWheel[3]
            },
            {
                label: 'Wheel 5',
                data: newWheel[4]
            },
            {
                label: 'Wheel 6',
                data: newWheel[5]
            },
            {
                label: 'Wheel 7',
                data: newWheel[6]
            },
            {
                label: 'Wheel 8',
                data: newWheel[7]
            },
            {
                label: 'Wheel 9',
                data: newWheel[8]
            },
            {
                label: 'Wheel 10',
                data: newWheel[9]
            },
            {
                label: 'Wheel 11',
                data: newWheel[10]
            },
            {
                label: 'Wheel 12',
                data: newWheel[11]
            },
            {
                label: 'Wheel 13',
                data: newWheel[12]
            },
            {
                label: 'Wheel 14',
                data: newWheel[13]
            },
            {
                label: 'Wheel 15',
                data: newWheel[14]
            },
            {
                label: 'Wheel 16',
                data: newWheel[15]
            },
            {
                label: 'Wheel 17',
                data: newWheel[16]
            },
            {
                label: 'Wheel 18',
                data: newWheel[17]
            },
            {
                label: 'Wheel 19',
                data: newWheel[18]
            },
            {
                label: 'Wheel 20',
                data: newWheel[19]
            },
            {
                label: 'Wheel 21',
                data: newWheel[20]
            },
            {
                label: 'Wheel 22',
                data: newWheel[21]
            },
            {
                label: 'Wheel 23',
                data: newWheel[22]
            },
            {
                label: 'Wheel 24',
                data: newWheel[23]
            },
            {
                label: 'Wheel 25',
                data: newWheel[24]
            },
            {
                label: 'Wheel 26',
                data: newWheel[25]
            }]
        ]
    });
}

function BuildCipher() {
  if (uniqueValues(document.getElementById('keys').getElementsByTagName('input')) == true & validInput(document.getElementById('keys').getElementsByTagName('input')) ==true) {
    document.getElementById("error").style.display = "none";
    document.getElementById("build").style.display = "none"
    document.getElementById("reset").style.display = "inline"
    document.getElementById("lock").style.display = "block";
    init();
  }
  else {
    document.getElementById("error").style.display = "block";
  }
}

function ResetCipher() {
  document.getElementById("build").style.display = "inline"
  document.getElementById("reset").style.display = "none"
  document.getElementById("send").style.display = "none"
  document.getElementById("lock").style.display = "none"

  for (i = 1; i <= 26; i++){
    document.getElementById("pos" + i).readOnly = false;
  }

  CURRENTCYPHER.destroy();
  LOCKEDCYPHER.destroy();
}

function lockCipher () {

  var wheel1 = [{value: 1, display:'I'}, {value: 2, display:'L'}, {value: 3, display:'B'}, {value: 4, display:'W'}, {value: 5, display:'H'}, {value: 6, display:'M'}, {value: 7, display:'T'}, {value: 8, display:'J'}, {value: 9, display:'X'}, {value: 10, display:'N'}, {value: 11, display:'U'}, {value: 12, display:'D'}, {value: 13, display:'E'}, {value: 14, display:'S'},  {value: 15, display:'R'}, {value: 16, display:'K'}, {value: 17, display:'C'}, {value: 18, display:'A'}, {value: 19, display:'Q'}, {value: 20, display:'Y'}, {value: 21, display:'F'}, {value: 22, display:'P'}, {value: 23, display:'G'}, {value: 24, display:'O'}, {value: 25, display:'V'}, {value: 26, display:'Z'}];

  var wheel2 = [{value: 1, display:'Y'}, {value: 2, display:'L'}, {value: 3, display:'T'}, {value: 4, display:'H'}, {value: 5, display:'M'}, {value: 6, display:'K'}, {value: 7, display:'C'}, {value: 8, display:'W'}, {value: 9, display:'D'}, {value: 10, display:'A'}, {value: 11, display:'U'}, {value: 12, display:'S'}, {value: 13, display:'N'}, {value: 14, display:'J'},  {value: 15, display:'O'}, {value: 16, display:'P'}, {value: 17, display:'B'}, {value: 18, display:'I'}, {value: 19, display:'V'}, {value: 20, display:'Q'}, {value: 21, display:'F'}, {value: 22, display:'Z'}, {value: 23, display:'E'}, {value: 24, display:'G'}, {value: 25, display:'X'}, {value: 26, display:'R'}];

  var wheel3 = [{value: 1, display:'A'}, {value: 2, display:'U'}, {value: 3, display:'R'}, {value: 4, display:'B'}, {value: 5, display:'J'}, {value: 6, display:'I'}, {value: 7, display:'G'}, {value: 8, display:'T'}, {value: 9, display:'Y'}, {value: 10, display:'L'}, {value: 11, display:'E'}, {value: 12, display:'Q'}, {value: 13, display:'P'}, {value: 14, display:'O'},  {value: 15, display:'Z'}, {value: 16, display:'C'}, {value: 17, display:'F'}, {value: 18, display:'W'}, {value: 19, display:'K'}, {value: 20, display:'S'}, {value: 21, display:'N'}, {value: 22, display:'D'}, {value: 23, display:'V'}, {value: 24, display:'X'}, {value: 25, display:'M'}, {value: 26, display:'H'}];

  var wheel4 = [{value: 1, display:'B'}, {value: 2, display:'H'}, {value: 3, display:'I'}, {value: 4, display:'M'}, {value: 5, display:'Q'}, {value: 6, display:'C'}, {value: 7, display:'P'}, {value: 8, display:'S'}, {value: 9, display:'K'}, {value: 10, display:'L'}, {value: 11, display:'F'}, {value: 12, display:'X'}, {value: 13, display:'U'}, {value: 14, display:'E'},  {value: 15, display:'V'}, {value: 16, display:'J'}, {value: 17, display:'Y'}, {value: 18, display:'G'}, {value: 19, display:'A'}, {value: 20, display:'D'}, {value: 21, display:'T'}, {value: 22, display:'N'}, {value: 23, display:'W'}, {value: 24, display:'R'}, {value: 25, display:'O'}, {value: 26, display:'Z'}];

  var wheel5 = [{value: 1, display:'E'}, {value: 2, display:'J'}, {value: 3, display:'A'}, {value: 4, display:'B'}, {value: 5, display:'S'}, {value: 6, display:'O'}, {value: 7, display:'P'}, {value: 8, display:'F'}, {value: 9, display:'N'}, {value: 10, display:'L'}, {value: 11, display:'G'}, {value: 12, display:'R'}, {value: 13, display:'K'}, {value: 14, display:'Z'},  {value: 15, display:'M'}, {value: 16, display:'W'}, {value: 17, display:'Q'}, {value: 18, display:'H'}, {value: 19, display:'C'}, {value: 20, display:'V'}, {value: 21, display:'U'}, {value: 22, display:'X'}, {value: 23, display:'I'}, {value: 24, display:'Y'}, {value: 25, display:'T'}, {value: 26, display:'D'}];

  var wheel6 = [{value: 1, display:'U'}, {value: 2, display:'P'}, {value: 3, display:'Y'}, {value: 4, display:'N'}, {value: 5, display:'K'}, {value: 6, display:'D'}, {value: 7, display:'H'}, {value: 8, display:'J'}, {value: 9, display:'S'}, {value: 10, display:'R'}, {value: 11, display:'X'}, {value: 12, display:'C'}, {value: 13, display:'V'}, {value: 14, display:'T'},  {value: 15, display:'A'}, {value: 16, display:'Z'}, {value: 17, display:'Q'}, {value: 18, display:'I'}, {value: 19, display:'O'}, {value: 20, display:'W'}, {value: 21, display:'B'}, {value: 22, display:'G'}, {value: 23, display:'F'}, {value: 24, display:'M'}, {value: 25, display:'L'}, {value: 26, display:'E'}];

  var wheel7 = [{value: 1, display:'D'}, {value: 2, display:'R'}, {value: 3, display:'N'}, {value: 4, display:'K'}, {value: 5, display:'U'}, {value: 6, display:'W'}, {value: 7, display:'G'}, {value: 8, display:'F'}, {value: 9, display:'B'}, {value: 10, display:'P'}, {value: 11, display:'A'}, {value: 12, display:'H'}, {value: 13, display:'X'}, {value: 14, display:'S'},  {value: 15, display:'E'}, {value: 16, display:'T'}, {value: 17, display:'Q'}, {value: 18, display:'Z'}, {value: 19, display:'V'}, {value: 20, display:'J'}, {value: 21, display:'L'}, {value: 22, display:'M'}, {value: 23, display:'Y'}, {value: 24, display:'I'}, {value: 25, display:'O'}, {value: 26, display:'C'}];

  var wheel8 = [{value: 1, display:'O'}, {value: 2, display:'J'}, {value: 3, display:'Y'}, {value: 4, display:'X'}, {value: 5, display:'I'}, {value: 6, display:'F'}, {value: 7, display:'U'}, {value: 8, display:'Z'}, {value: 9, display:'K'}, {value: 10, display:'W'}, {value: 11, display:'H'}, {value: 12, display:'G'}, {value: 13, display:'E'}, {value: 14, display:'B'},  {value: 15, display:'S'}, {value: 16, display:'A'}, {value: 17, display:'N'}, {value: 18, display:'V'}, {value: 19, display:'L'}, {value: 20, display:'M'}, {value: 21, display:'G'}, {value: 22, display:'T'}, {value: 23, display:'C'}, {value: 24, display:'P'}, {value: 25, display:'U'}, {value: 26, display:'R'}];

  var wheel9 = [{value: 1, display:'S'}, {value: 2, display:'P'}, {value: 3, display:'W'}, {value: 4, display:'I'}, {value: 5, display:'Y'}, {value: 6, display:'F'}, {value: 7, display:'B'}, {value: 8, display:'U'}, {value: 9, display:'M'}, {value: 10, display:'O'}, {value: 11, display:'R'}, {value: 12, display:'D'}, {value: 13, display:'L'}, {value: 14, display:'E'},  {value: 15, display:'Q'}, {value: 16, display:'V'}, {value: 17, display:'A'}, {value: 18, display:'T'}, {value: 19, display:'Z'}, {value: 20, display:'J'}, {value: 21, display:'C'}, {value: 22, display:'X'}, {value: 23, display:'N'}, {value: 24, display:'G'}, {value: 25, display:'K'}, {value: 26, display:'H'}];

  var wheel10 = [{value: 1, display:'C'}, {value: 2, display:'A'}, {value: 3, display:'T'}, {value: 4, display:'Q'}, {value: 5, display:'O'}, {value: 6, display:'I'}, {value: 7, display:'Z'}, {value: 8, display:'W'}, {value: 9, display:'E'}, {value: 10, display:'D'}, {value: 11, display:'R'}, {value: 12, display:'M'}, {value: 13, display:'K'}, {value: 14, display:'X'},  {value: 15, display:'V'}, {value: 16, display:'P'}, {value: 17, display:'N'}, {value: 18, display:'H'}, {value: 19, display:'B'}, {value: 20, display:'S'}, {value: 21, display:'L'}, {value: 22, display:'G'}, {value: 23, display:'J'}, {value: 24, display:'F'}, {value: 25, display:'U'}, {value: 26, display:'Y'}];

  var wheel11 = [{value: 1, display:'D'}, {value: 2, display:'Z'}, {value: 3, display:'R'}, {value: 4, display:'J'}, {value: 5, display:'X'}, {value: 6, display:'C'}, {value: 7, display:'H'}, {value: 8, display:'F'}, {value: 9, display:'A'}, {value: 10, display:'U'}, {value: 11, display:'O'}, {value: 12, display:'W'}, {value: 13, display:'N'}, {value: 14, display:'L'},  {value: 15, display:'T'}, {value: 16, display:'I'}, {value: 17, display:'E'}, {value: 18, display:'V'}, {value: 19, display:'S'}, {value: 20, display:'P'}, {value: 21, display:'B'}, {value: 22, display:'Q'}, {value: 23, display:'M'}, {value: 24, display:'K'}, {value: 25, display:'G'}, {value: 26, display:'Y'}];

  var wheel12 = [{value: 1, display:'B'}, {value: 2, display:'I'}, {value: 3, display:'J'}, {value: 4, display:'W'}, {value: 5, display:'T'}, {value: 6, display:'F'}, {value: 7, display:'G'}, {value: 8, display:'A'}, {value: 9, display:'X'}, {value: 10, display:'U'}, {value: 11, display:'D'}, {value: 12, display:'R'}, {value: 13, display:'Z'}, {value: 14, display:'V'},  {value: 15, display:'Q'}, {value: 16, display:'M'}, {value: 17, display:'Y'}, {value: 18, display:'K'}, {value: 19, display:'H'}, {value: 20, display:'N'}, {value: 21, display:'P'}, {value: 22, display:'E'}, {value: 23, display:'O'}, {value: 24, display:'S'}, {value: 25, display:'C'}, {value: 26, display:'L'}];

  var wheel13 = [{value: 1, display:'C'}, {value: 2, display:'O'}, {value: 3, display:'Y'}, {value: 4, display:'J'}, {value: 5, display:'P'}, {value: 6, display:'N'}, {value: 7, display:'V'}, {value: 8, display:'M'}, {value: 9, display:'A'}, {value: 10, display:'W'}, {value: 11, display:'U'}, {value: 12, display:'B'}, {value: 13, display:'F'}, {value: 14, display:'E'},  {value: 15, display:'T'}, {value: 16, display:'R'}, {value: 17, display:'Q'}, {value: 18, display:'D'}, {value: 19, display:'Z'}, {value: 20, display:'X'}, {value: 21, display:'K'}, {value: 22, display:'L'}, {value: 23, display:'S'}, {value: 24, display:'G'}, {value: 25, display:'I'}, {value: 26, display:'H'}];

  var wheel14 = [{value: 1, display:'C'}, {value: 2, display:'G'}, {value: 3, display:'K'}, {value: 4, display:'Q'}, {value: 5, display:'X'}, {value: 6, display:'E'}, {value: 7, display:'H'}, {value: 8, display:'U'}, {value: 9, display:'B'}, {value: 10, display:'S'}, {value: 11, display:'M'}, {value: 12, display:'W'}, {value: 13, display:'T'}, {value: 14, display:'I'},  {value: 15, display:'N'}, {value: 16, display:'J'}, {value: 17, display:'V'}, {value: 18, display:'Z'}, {value: 19, display:'F'}, {value: 20, display:'P'}, {value: 21, display:'A'}, {value: 22, display:'L'}, {value: 23, display:'Y'}, {value: 24, display:'D'}, {value: 25, display:'R'}, {value: 26, display:'O'}];

  var wheel15 = [{value: 1, display:'D'}, {value: 2, display:'X'}, {value: 3, display:'B'}, {value: 4, display:'A'}, {value: 5, display:'N'}, {value: 6, display:'O'}, {value: 7, display:'W'}, {value: 8, display:'R'}, {value: 9, display:'G'}, {value: 10, display:'K'}, {value: 11, display:'Y'}, {value: 12, display:'Q'}, {value: 13, display:'M'}, {value: 14, display:'H'},  {value: 15, display:'T'}, {value: 16, display:'P'}, {value: 17, display:'I'}, {value: 18, display:'J'}, {value: 19, display:'L'}, {value: 20, display:'Z'}, {value: 21, display:'C'}, {value: 22, display:'S'}, {value: 23, display:'U'}, {value: 24, display:'E'}, {value: 25, display:'V'}, {value: 26, display:'F'}];

  var wheel16 = [{value: 1, display:'A'}, {value: 2, display:'U'}, {value: 3, display:'T'}, {value: 4, display:'E'}, {value: 5, display:'C'}, {value: 6, display:'D'}, {value: 7, display:'P'}, {value: 8, display:'B'}, {value: 9, display:'W'}, {value: 10, display:'J'}, {value: 11, display:'M'}, {value: 12, display:'V'}, {value: 13, display:'S'}, {value: 14, display:'L'},  {value: 15, display:'K'}, {value: 16, display:'Q'}, {value: 17, display:'H'}, {value: 18, display:'N'}, {value: 19, display:'O'}, {value: 20, display:'I'}, {value: 21, display:'Z'}, {value: 22, display:'R'}, {value: 23, display:'X'}, {value: 24, display:'Y'}, {value: 25, display:'G'}, {value: 26, display:'F'}];

  var wheel17 = [{value: 1, display:'T'}, {value: 2, display:'I'}, {value: 3, display:'O'}, {value: 4, display:'B'}, {value: 5, display:'J'}, {value: 6, display:'P'}, {value: 7, display:'V'}, {value: 8, display:'Q'}, {value: 9, display:'M'}, {value: 10, display:'R'}, {value: 11, display:'H'}, {value: 12, display:'Y'}, {value: 13, display:'X'}, {value: 14, display:'A'},  {value: 15, display:'S'}, {value: 16, display:'F'}, {value: 17, display:'U'}, {value: 18, display:'Z'}, {value: 19, display:'W'}, {value: 20, display:'N'}, {value: 21, display:'E'}, {value: 22, display:'G'}, {value: 23, display:'D'}, {value: 24, display:'L'}, {value: 25, display:'C'}, {value: 26, display:'K'}];

  var wheel18 = [{value: 1, display:'U'}, {value: 2, display:'I'}, {value: 3, display:'L'}, {value: 4, display:'Y'}, {value: 5, display:'K'}, {value: 6, display:'C'}, {value: 7, display:'M'}, {value: 8, display:'V'}, {value: 9, display:'X'}, {value: 10, display:'D'}, {value: 11, display:'P'}, {value: 12, display:'F'}, {value: 13, display:'A'}, {value: 14, display:'E'},  {value: 15, display:'O'}, {value: 16, display:'G'}, {value: 17, display:'S'}, {value: 18, display:'H'}, {value: 19, display:'N'}, {value: 20, display:'Z'}, {value: 21, display:'W'}, {value: 22, display:'Q'}, {value: 23, display:'J'}, {value: 24, display:'T'}, {value: 25, display:'B'}, {value: 26, display:'R'}];

  var wheel19 = [{value: 1, display:'I'}, {value: 2, display:'M'}, {value: 3, display:'S'}, {value: 4, display:'Q'}, {value: 5, display:'G'}, {value: 6, display:'V'}, {value: 7, display:'Y'}, {value: 8, display:'P'}, {value: 9, display:'O'}, {value: 10, display:'U'}, {value: 11, display:'B'}, {value: 12, display:'N'}, {value: 13, display:'K'}, {value: 14, display:'A'},  {value: 15, display:'W'}, {value: 16, display:'H'}, {value: 17, display:'F'}, {value: 18, display:'E'}, {value: 19, display:'L'}, {value: 20, display:'D'}, {value: 21, display:'X'}, {value: 22, display:'T'}, {value: 23, display:'R'}, {value: 24, display:'C'}, {value: 25, display:'Z'}, {value: 26, display:'J'}];

  var wheel20 = [{value: 1, display:'J'}, {value: 2, display:'B'}, {value: 3, display:'E'}, {value: 4, display:'V'}, {value: 5, display:'P'}, {value: 6, display:'L'}, {value: 7, display:'S'}, {value: 8, display:'F'}, {value: 9, display:'Z'}, {value: 10, display:'Q'}, {value: 11, display:'M'}, {value: 12, display:'D'}, {value: 13, display:'C'}, {value: 14, display:'T'},  {value: 15, display:'I'}, {value: 16, display:'O'}, {value: 17, display:'K'}, {value: 18, display:'A'}, {value: 19, display:'Y'}, {value: 20, display:'X'}, {value: 21, display:'G'}, {value: 22, display:'U'}, {value: 23, display:'W'}, {value: 24, display:'R'}, {value: 25, display:'N'}, {value: 26, display:'H'}];

  var wheel21 = [{value: 1, display:'Q'}, {value: 2, display:'T'}, {value: 3, display:'Z'}, {value: 4, display:'U'}, {value: 5, display:'X'}, {value: 6, display:'O'}, {value: 7, display:'N'}, {value: 8, display:'J'}, {value: 9, display:'S'}, {value: 10, display:'K'}, {value: 11, display:'E'}, {value: 12, display:'W'}, {value: 13, display:'P'}, {value: 14, display:'V'},  {value: 15, display:'Y'}, {value: 16, display:'R'}, {value: 17, display:'A'}, {value: 18, display:'D'}, {value: 19, display:'H'}, {value: 20, display:'G'}, {value: 21, display:'B'}, {value: 22, display:'C'}, {value: 23, display:'F'}, {value: 24, display:'L'}, {value: 25, display:'I'}, {value: 26, display:'M'}];

  var wheel22 = [{value: 1, display:'S'}, {value: 2, display:'L'}, {value: 3, display:'E'}, {value: 4, display:'P'}, {value: 5, display:'R'}, {value: 6, display:'Z'}, {value: 7, display:'J'}, {value: 8, display:'Y'}, {value: 9, display:'Q'}, {value: 10, display:'N'}, {value: 11, display:'C'}, {value: 12, display:'X'}, {value: 13, display:'A'}, {value: 14, display:'H'},  {value: 15, display:'O'}, {value: 16, display:'G'}, {value: 17, display:'D'}, {value: 18, display:'F'}, {value: 19, display:'B'}, {value: 20, display:'V'}, {value: 21, display:'T'}, {value: 22, display:'I'}, {value: 23, display:'K'}, {value: 24, display:'W'}, {value: 25, display:'U'}, {value: 26, display:'M'}];

  var wheel23 = [{value: 1, display:'C'}, {value: 2, display:'J'}, {value: 3, display:'D'}, {value: 4, display:'R'}, {value: 5, display:'B'}, {value: 6, display:'T'}, {value: 7, display:'K'}, {value: 8, display:'F'}, {value: 9, display:'S'}, {value: 10, display:'E'}, {value: 11, display:'X'}, {value: 12, display:'P'}, {value: 13, display:'Q'}, {value: 14, display:'O'},  {value: 15, display:'Z'}, {value: 16, display:'G'}, {value: 17, display:'W'}, {value: 18, display:'Y'}, {value: 19, display:'M'}, {value: 20, display:'H'}, {value: 21, display:'L'}, {value: 22, display:'A'}, {value: 23, display:'I'}, {value: 24, display:'V'}, {value: 25, display:'N'}, {value: 26, display:'U'}];

  var wheel24 = [{value: 1, display:'J'}, {value: 2, display:'V'}, {value: 3, display:'X'}, {value: 4, display:'L'}, {value: 5, display:'D'}, {value: 6, display:'C'}, {value: 7, display:'W'}, {value: 8, display:'H'}, {value: 9, display:'A'}, {value: 10, display:'T'}, {value: 11, display:'I'}, {value: 12, display:'Y'}, {value: 13, display:'B'}, {value: 14, display:'E'},  {value: 15, display:'Q'}, {value: 16, display:'O'}, {value: 17, display:'R'}, {value: 18, display:'F'}, {value: 19, display:'N'}, {value: 20, display:'S'}, {value: 21, display:'Z'}, {value: 22, display:'U'}, {value: 23, display:'P'}, {value: 24, display:'K'}, {value: 25, display:'M'}, {value: 26, display:'G'}];

  var wheel25 = [{value: 1, display:'F'}, {value: 2, display:'R'}, {value: 3, display:'Y'}, {value: 4, display:'N'}, {value: 5, display:'P'}, {value: 6, display:'I'}, {value: 7, display:'H'}, {value: 8, display:'O'}, {value: 9, display:'A'}, {value: 10, display:'Z'}, {value: 11, display:'Q'}, {value: 12, display:'B'}, {value: 13, display:'E'}, {value: 14, display:'T'},  {value: 15, display:'C'}, {value: 16, display:'J'}, {value: 17, display:'M'}, {value: 18, display:'W'}, {value: 19, display:'D'}, {value: 20, display:'V'}, {value: 21, display:'X'}, {value: 22, display:'S'}, {value: 23, display:'L'}, {value: 24, display:'K'}, {value: 25, display:'G'}, {value: 26, display:'U'}];

  var wheel26 = [{value: 1, display:'Q'}, {value: 2, display:'I'}, {value: 3, display:'Y'}, {value: 4, display:'N'}, {value: 5, display:'T'}, {value: 6, display:'M'}, {value: 7, display:'J'}, {value: 8, display:'V'}, {value: 9, display:'O'}, {value: 10, display:'D'}, {value: 11, display:'K'}, {value: 12, display:'B'}, {value: 13, display:'C'}, {value: 14, display:'W'},  {value: 15, display:'R'}, {value: 16, display:'X'}, {value: 17, display:'S'}, {value: 18, display:'U'}, {value: 19, display:'F'}, {value: 20, display:'A'}, {value: 21, display:'H'}, {value: 22, display:'L'}, {value: 23, display:'P'}, {value: 24, display:'Z'}, {value: 25, display:'E'}, {value: 26, display:'G'}];

  var key = [];
  document.getElementById("build").style.display = "none";
  document.getElementById("reset").style.display = "inline";

  var messageValue = [];
  messageValue = CURRENTCYPHER.getArrayVal();

  var newMegaWheel = [];

  for (i = 1; i <= 26; i++){
    key.push(document.getElementById('pos' + i).value);
  }

  for (i = 0; i < 26; i++){

    var tempWheel = [];
    switch(key[i]){
      case '26':
        tempWheel = wheel26;
        break;
      case '25':
        tempWheel = wheel25;
        break;
      case '24':
        tempWheel = wheel24;
        break;
      case '23':
        tempWheel = wheel23;
        break;
      case '22':
        tempWheel = wheel22;
        break;
      case '21':
        tempWheel = wheel21;
        break;
      case '20':
        tempWheel = wheel20;
        break;
      case '19':
        tempWheel = wheel19;
        break;
      case '18':
        tempWheel = wheel18;
        break;
      case '17':
        tempWheel = wheel17;
        break;
      case '16':
        tempWheel = wheel16;
        break;
      case '15':
        tempWheel = wheel15;
        break;
      case '14':
        tempWheel = wheel14;
        break;
      case '13':
        tempWheel = wheel13;
        break;
      case '12':
        tempWheel = wheel12;
        break;
      case '11':
        tempWheel = wheel11;
        break;
      case '10':
        tempWheel = wheel10;
        break;
      case '9':
        tempWheel = wheel9;
        break;
      case '8':
        tempWheel = wheel8;
        break;
      case '7':
        tempWheel = wheel7;
        break;
      case '6':
        tempWheel = wheel6;
        break;
      case '5':
        tempWheel = wheel5;
        break;
      case '4':
        tempWheel = wheel4;
        break;
      case '3':
        tempWheel = wheel3;
        break;
      case '2':
        tempWheel = wheel2;
        break;
      case '1':
        tempWheel = wheel1;
        break;
      }
      var startPoint = messageValue[i] - 1;
      for (j = 0; j < 26; j++) {
        if (i === 0) {
          newMegaWheel[j] = tempWheel[startPoint];
          newMegaWheel[j].value = j + 1;
          newMegaWheel[j].display = newMegaWheel[j].display + " ";
        }else{
          newMegaWheel[j].display = newMegaWheel[j].display + tempWheel[startPoint].display + " ";
        }
        startPoint = startPoint + 1;
        if (startPoint === 26){
          startPoint = 0;
        }
      }
      tempWheel = [];

  }
  CURRENTCYPHER.destroy();
  LOCKEDCYPHER = mobiscroll.scroller('#megaCypher', {
      theme: 'ios',
      display: 'inline',
      width: 1000,
      wheels: [
          [{
              label: 'Combined Wheel',
              data: newMegaWheel
          }]
      ]
  });

  document.getElementById("lock").style.display = "none";
  document.getElementById("send").style.display = "block";
  newMegaWheel = [];

  //var wheel12 = [{value: 1, display:'B'}, {value: 2, display:'I'}, {value: 3, display:'J'}, {value: 4, display:'W'}, {value: 5, display:'T'}, {value: 6, display:'F'}, {value: 7, display:'G'}, {value: 8, display:'A'}, {value: 9, display:'X'}, {value: 10, display:'U'}, {value: 11, display:'D'}, {value: 12, display:'R'}, {value: 13, display:'Z'}, {value: 14, display:'V'},  {value: 15, display:'Q'}, {value: 16, display:'M'}, {value: 17, display:'Y'}, {value: 18, display:'K'}, {value: 19, display:'H'}, {value: 20, display:'N'}, {value: 21, display:'P'}, {value: 22, display:'E'}, {value: 23, display:'O'}, {value: 24, display:'S'}, {value: 25, display:'C'}, {value: 26, display:'L'}];
}
