const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  encrypt(target, key) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let encryptArray = []
    let fullKeyArray = []

    //набираем длину ключа
    for (let i = 0; i < Math.ceil(target.length / key.length); i++) {
      for (let s = 0; s < key.length; s++) {
        fullKeyArray.push(key[s])
      }
    }

    let correctTargetArray = target.toUpperCase().split('')

    //вставляем в ключ символы, которых нет в алфавите
    for (let i = 0; i < target.length; i++) {
      if (alphabet.findIndex(item => item === correctTargetArray[i]) === -1) {
        fullKeyArray.splice(i, 0, correctTargetArray[i])
      }
    }

    //обрезаем ключ по длинне шифруемого слова
    let correctFullKeyArray = fullKeyArray.slice(0, target.length).map(i => i.toUpperCase())


    for (let a = 0; a < target.length; a++) {

      let letterPosTarget = alphabet.findIndex(item => item === correctTargetArray[a]),
          letterPosKey = alphabet.findIndex(item => item === correctFullKeyArray[a])

      if (letterPosTarget === -1) {
        encryptArray.push(correctTargetArray[a])
      } else if (letterPosTarget + letterPosKey >= 26) {
        encryptArray.push(alphabet[(letterPosTarget + letterPosKey) - 26])
      } else if (letterPosTarget + letterPosKey < 26) {
        encryptArray.push(alphabet[letterPosTarget + letterPosKey])
      }
    }

    return encryptArray.join('')
  }


  decrypt(target, key) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let decryptArray = []
    let fullKeyArray = []

    for (let i = 0; i < Math.ceil(target.length / key.length); i++) {
      for (let s = 0; s < key.length; s++) {
        fullKeyArray.push(key[s])
      }
    }

    let correctTargetArray = target.toUpperCase().split('')

    for (let i = 0; i < target.length; i++) {
      if (alphabet.findIndex(item => item === correctTargetArray[i]) === -1) {
        fullKeyArray.splice(i, 0, correctTargetArray[i])
      }
    }

    let correctFullKeyArray = fullKeyArray.slice(0, target.length).map(i => i.toUpperCase())

    for (let a = 0; a < target.length; a++) {

      let letterPosTarget = alphabet.findIndex(item => item === correctTargetArray[a]),
          letterPosKey = alphabet.findIndex(item => item === correctFullKeyArray[a])

      if (letterPosTarget === -1) {
        decryptArray.push(correctTargetArray[a])
      } else if (letterPosTarget - letterPosKey < 0) {
        decryptArray.push(alphabet[(letterPosTarget - letterPosKey) + 26])
      } else if (letterPosTarget + letterPosKey >= 0) {
        decryptArray.push(alphabet[letterPosTarget - letterPosKey])
      }
    }

    return decryptArray.join('')
  }
}

module.exports = VigenereCipheringMachine;
