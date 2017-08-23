var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	q_text: String,
	desc: String,
	_answers: [{type:mongoose.Schema.Types.ObjectId, ref:'Answer'}],
})

mongoose.model('Question', QuestionSchema);