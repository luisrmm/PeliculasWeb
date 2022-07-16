import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  commentInput: commentI = {
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
    public router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.currentDate = this.datePipe.transform((new Date), 'yyyy-MM-dd') || '';
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment1: ['', [Validators.required, Validators.minLength(4)]]
    })
    this.user = JSON.parse(sessionStorage.getItem('currentUser') || '');
  }

  commentApi() {
    this.commentInput.userName = this.user.userName;
    this.commentInput.dateCreated = this.currentDate;
    var idMovie = this.comments.find(data => data.idMovie);
    this.commentInput.idMovie = idMovie?.idMovie || 0;
    let c = this.api.generateComment(this.commentInput);
    c.subscribe(data =>
      this.getNewComments(data.idMovie)
    )
    this.commentForm.get('comment1')?.setValue('');
    this.commentForm.get('comment1')?.setErrors(null);
  }

  getNewComments(idMovieCom: any) {
    this.comments = []
    let gc = this.api.getActualComment(idMovieCom);
    gc.subscribe(data =>
      {
        this.comments = data
      }
    )
  }
}
