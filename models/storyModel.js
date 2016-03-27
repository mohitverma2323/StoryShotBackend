var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storyModel = new Schema({
	
	title: {type: String},
	author: {type: String},
	content: {type: String},
	time: {type:String,
		   enum:['1','3','5','7']},
	genre: {type:String},
	
});

module.exports = mongoose.model('Story', storyModel);