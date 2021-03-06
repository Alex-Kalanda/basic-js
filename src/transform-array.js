module.exports = function transform( arr ) {
  let outputArray = []
  for (let i=0; i<arr.length; i++){
    switch (arr[i]) {
      case '--discard-next':
        if(i===arr.length-1){break}
        i++
        break
      case '--discard-prev':
        if(i===0 || arr[i-2] === '--discard-next'){break}
        outputArray.pop()
        break
      case '--double-next':
        if(i===arr.length-1){break}
        outputArray.push(arr[i+1])
        break
      case '--double-prev':
        if(i===0 || arr[i-2] === '--discard-next'){break}
        outputArray.push(arr[i-1])
        break
      default:
        outputArray.push(arr[i])
    }
  }
  return outputArray
};
