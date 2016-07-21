var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;
    
var PortSchema = new Schema({  
  engine:{
    hp:{type:Number},
    cc:{type:Number},
  },
  doors:{type:Number},
  fuel:{type:Number}
});

module.exports = PortSchema; 
