const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, opt ) {
  str+=''
  opt.addition = opt.addition===undefined ? '' : opt.addition+=''
  opt.additionRepeatTimes = opt.additionRepeatTimes===undefined ? 1 : Number(opt.additionRepeatTimes)
  opt.repeatTimes = opt.repeatTimes===undefined ? 1 : Number(opt.repeatTimes)
  let additionArr = [],
      fullArr = []
  for (let i=0; i<opt.repeatTimes; i++) {fullArr.push(str)}
  for (let i=0; i<opt.additionRepeatTimes; i++) {additionArr.push(opt.addition)}
  return fullArr.map(i=>i+additionArr.join(opt.additionSeparator||'|')).join(opt.separator||'+')
}