module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
   let obj = { turns: 0, seconds: 0,}
   if (disksNumber>0){
     obj.turns = 1
     for (let i=2; i<=disksNumber; i++) {
       obj.turns *= 2
       obj.turns += 1
     }
     obj.seconds = Math.floor(obj.turns/ (turnsSpeed/3600))
   }
   return obj
};
