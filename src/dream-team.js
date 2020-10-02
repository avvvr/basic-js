const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let teamName = [];
  let namesCounter = 0;

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      if (members[i][0] !== ' ') {
        teamName[namesCounter] = members[i][0];
        namesCounter++;
      } else {
        let j = 0;
        do {
          if (members[i][j + 1] !== ' ') {
            teamName[namesCounter] = members[i][j + 1];
            namesCounter++;
            break;
          } else j++;
        } while (members[i][j] === ' ')
      }
    }
  }

  let sortedTeamName = '',

  sortedTeamName = teamName.sort(function (a, b) {
    return a.localeCompare(b);
  }).join('');

  return sortedTeamName.toUpperCase();
};