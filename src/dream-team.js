const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let names = members.map(item => typeof(item) == 'string' ? item.trim() : false);

  let dreamTeam = [];
  
  names.forEach(item => {
    if (item) {
      dreamTeam.push(item[0].toUpperCase());
    }
  })

  return dreamTeam.sort().join(''); 
};

