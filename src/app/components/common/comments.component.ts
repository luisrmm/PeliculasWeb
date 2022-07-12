import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { commentI } from 'src/app/models/comment.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: commentI[] = [];

  commentForm!: FormGroup;
  commentInput: commentI ={
    idComment: 0,
    comment1: "",
    dateCreated: "",
    idMovie: 0,
    userName: "",
    parentIdComment: 0
}

  user: any;
  currentDate = '';

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
    ) { 
     this.currentDate = this.datePipe.transform((new Date), 'yyyy-MM-dd') || '';
    }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment1 : ['', [Validators.required, Validators.minLength(4)]]
    })
    this.user = JSON.parse(localStorage.getItem('userName') || '');
    console.log(this.user);
  }

  commentApi(){
    this.commentInput.userName = this.user;
    this.commentInput.dateCreated = this.currentDate;
    var idMovie  = this.comments.find(data => data.idMovie);
    this.commentInput.idMovie = idMovie?.idMovie || 0;
    let c = this.api.generateComment(this.commentInput);
    c.subscribe(data => 
    console.log(data))
  }

  
  

}
