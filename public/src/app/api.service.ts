import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
	user = {
		name: "cqanda"
	}
  constructor(private _http: Http) { }

  login(user){
  	this.user = user;
  }
  getUser(){
  	return this.user;
  }

  getAllQuestions(){
  	return this._http.get('/questions')
  	.map(data => data.json())
  	.toPromise();
  }

  createQuestion(question){
  	this._http.post('/questions', question)
  	.map(data => data.json())
  	.toPromise();
  }

  getQuestion(id){
  	return this._http.get('/questions/' + id)
  	.map(data => data.json())
  	.toPromise()
  }

  createAnswer(answer, id){
  	this._http.post('/answers/'+id, answer)
  	.map(data => data.json())
  	.toPromise()
  }

  getAllAnswers(question_id){
  	return this._http.get('/answers/'+question_id)
  	.map(data => data.json())
  	.toPromise();
  }

  addLike(answer_id){
  	this._http.get('/answerslike/'+answer_id)
  	.map(data => data.json())
  	.toPromise()
  }
}





