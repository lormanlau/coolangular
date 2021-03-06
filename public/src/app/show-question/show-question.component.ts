import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
	question = {
		_id: 0,
		q_text: "",
		desc: "",
    _answers: []
	}
  constructor(private _api: ApiService, private _route: ActivatedRoute, private route: Router) {

  }

  ngOnInit() {
  	this.getQuestion();
  	// this.getAllAnswers();
  }

  getQuestion(){
  	this._route.paramMap
  	.switchMap(params => {
  		return this._api.getAllAnswers(params.get('id'));
  	})
  	.subscribe(data => this.question = data);
  }

  addLike(answer_id){
  	this._api.addLike(answer_id);
    this.getQuestion();
  }

  // getAllAnswers(){
  // 	this._api.getAllAnswers(this.question._id)
  // 	.then(data => this.question = data)
  // 	.catch(errors => console.log(errors))
  // }
}
