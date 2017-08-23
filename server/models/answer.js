var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	user: String,
	a_text: String,
	details: String,
	likes: Number,
	_question: {type:mongoose.Schema.Types.ObjectId, ref: 'Question'}
})

mongoose.model('Answer', AnswerSchema);