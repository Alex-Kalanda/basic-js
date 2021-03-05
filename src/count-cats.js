module.exports = function countCats(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].filter(item => item === '^^').length
    }
    return count
}
