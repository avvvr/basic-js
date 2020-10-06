const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.isStraight = isStraight;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //ряд - ключ
    //столбец - сообщение
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error;

    let result = ''; //строка, которую возвращаем
    let messageText = message.toUpperCase();
    let keyText = key.toUpperCase();
    let keyLetterIndex = 0;
    let currentAlphabet = this.alphabet; //алфавит, в котором будет сдфиг в соответствии с шифром
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < messageText.length; i++) { //проходка по всем буквам слова для шифрования
      //currentAlphabet = this.alphabet;

      for (let j = 0; j < 26; j++)
        currentAlphabet[j] = abc[j];

      for (let j = 0; j < (Math.abs(keyText[keyLetterIndex].charCodeAt() - 65 - 26)); j++) {
        currentAlphabet.unshift(currentAlphabet.pop()); //сдвигаем посимвольно
      }

      if (messageText[i].charCodeAt() > 64 && messageText[i].charCodeAt() < 91) { //проверяем, латиница или другие символы
        result += currentAlphabet[(messageText[i].charCodeAt() - 65)];

        if ((keyLetterIndex + 1) === keyText.length)
          keyLetterIndex = 0;
        else
          keyLetterIndex++;

      } else result += messageText[i];

    }

    if (this.isStraight) return result;
    else return result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error;

    if (message === undefined || key === undefined)
      throw new Error;

    let result = ''; //строка, которую возвращаем
    let messageText = message.toUpperCase();
    let keyText = key.toUpperCase();
    let keyLetterIndex = 0;
    let currentAlphabet = this.alphabet; //алфавит, в котором будет сдфиг в соответствии с шифром
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < messageText.length; i++) { //проходка по всем буквам слова для шифрования
      //currentAlphabet = this.alphabet;

      for (let j = 0; j < 26; j++)
        currentAlphabet[j] = abc[j];

      for (let j = 0; j < (Math.abs(keyText[keyLetterIndex].charCodeAt() - 65 - 26)); j++) {
        currentAlphabet.push(currentAlphabet.shift()); //сдвигаем посимвольно
      }

      if (messageText[i].charCodeAt() > 64 && messageText[i].charCodeAt() < 91) { //проверяем, латиница или другие символы
        result += currentAlphabet[(messageText[i].charCodeAt() - 65)];

        if ((keyLetterIndex + 1) === keyText.length)
          keyLetterIndex = 0;
        else
          keyLetterIndex++;

      } else result += messageText[i];

    }

    if (this.isStraight) return result;
    else return result.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;