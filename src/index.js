module.exports = 
function check(str, configBrakets) {
  // your solution
  let arrCount = [];
  for (let i = 0; i < configBrakets.length; i++) {
    arrCount[i] = 0;      
  }

  let typeBracket = [];
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < configBrakets.length; j++) {
          if (str[i] === configBrakets[j][0]) {
            if ((str[i] === configBrakets[j][0]) && (str[i] === configBrakets[j][1]) && (arrCount[j] === 1)) {
              
            } else {
              typeBracket[i] = 'open';
              arrCount[j]++;               
            }
          }

          if (str[i] === configBrakets[j][1]) {
              if (arrCount[j] < 1) {
                  return false;
              }

              if ((str[i] === configBrakets[j][0]) && (str[i] === configBrakets[j][1]) && (typeBracket[i] === 'open')) {
                
              } else {
                typeBracket[i] = 'close';
                arrCount[j]--;   
                
                if ((typeBracket[i - 1] === 'open') && (str[i - 1] !== configBrakets[j][0])) {
                  return false;
                }                
              }
          }   
      }      
  }

  return arrCount.join('') == 0;
}
