/*
*
*
*       Complete the handler logic below
*       
*       
*/
function ConvertHandler() {
  this.getNum = function(input) {
    if (input[0].match(/[a-z]/i)){return false};
    let i = 0;
    for (i = 0; i < input.length; i++){
      if(input[i].match(/[a-z]/i)){break}
    }
    let result = input.slice(0, i);
    if (result.match(/^\d+\.?\d*\/\d+\.?\d*$/)){return eval(result)}
    return Number(result);
  };
  this.getUnit = function(input) {
    let i = 0;
    for (i = 0; i < input.length; i++){
      if(input[i].match(/[a-z]/i)){break}
    }
    let result = input.slice(i, input.length);
    if (['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'].indexOf(result) > -1){return result}
    return false;
  };
  this.getReturnUnit = function(initUnit) {
    if (!initUnit){return ''}
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var returnUnits = ['l','gal','km','mi','kg','lbs','L','GAL','KM','MI','KG','LBS']
    return returnUnits[units.indexOf(initUnit)].toLowerCase();
  };
  this.spellOutUnit = function(unit) {
    if (!unit){return ''}
    let input = unit.toLowerCase();
    switch(input){
      case 'gal':
        return 'gallon';
      case 'l':
        return 'liter';
      case 'mi':
        return 'mile';
      case 'km':
        return 'kilometer';
      case 'lbs':
        return 'pound';
      case 'kg':
        return 'kilogram';
                }
  };
  this.convert = function(initNum, initUnit) {
    if (!initUnit){return ''};
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let input = initUnit.toLowerCase();
    switch(input){
      case 'gal':
        return (initNum * galToL).toFixed(4);
      case 'l':
        return (initNum / galToL).toFixed(4);
      case 'mi':
        return (initNum * miToKm).toFixed(4);
      case 'km':
        return (initNum / miToKm).toFixed(4);
      case 'lbs':
        return (initNum * lbsToKg).toFixed(4);
      case 'kg':
        return (initNum / lbsToKg).toFixed(4); 
                }
  };
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let initString = this.spellOutUnit(initUnit) + (initNum != 1?"s":"");
    let returnString = this.spellOutUnit(returnUnit) + (returnNum != 1?"s":"");
    return `${initNum} ${initString} converts to ${returnNum} ${returnString}`;
  };
}
module.exports = ConvertHandler;
