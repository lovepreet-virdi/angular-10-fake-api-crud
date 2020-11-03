import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CONSTANTS } from '../constants';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postsForm: FormGroup;
  CONSTANTS = CONSTANTS;
  isEditForm: boolean = false;
  postId = null;
  showUpdateMsg: boolean = false;
  showCreateMsg: boolean = false;
  showErrorMsg: boolean = false;;


  constructor(public ds: DataService, public fb: FormBuilder, public router: Router, public actRoute: ActivatedRoute) {


  }

  ngOnInit(): void {
    const postId = +this.actRoute.snapshot.paramMap.get('id');
    if (postId && postId > 0) {
      this.isEditForm = true;
      this.postId = postId;
      this.ds.getPostById(postId).subscribe(details => {

        this.postsForm = this.fb.group({
          title: [details?.title, Validators.required],
          body: [details?.body, Validators.required],
          userId: [details?.userId],
        })
      }, error => {
        console.log('error occured:', error);

      })
    } else {
      this.postId = null;
      this.isEditForm = false;
      this.postsForm = this.fb.group({
        title: ['', Validators.required],
        body: ['', Validators.required],
        userId: [1],
      })
    }

  }
  onSubmit(): void {
    if (this.postsForm.valid) {
      if (this.isEditForm) {
        let postData = { ...this.postsForm.value, id: this.postId }
        this.ds.updatePost(postData).subscribe(result => {

          this.showUpdateMsg = true;
          setTimeout(() => this.showUpdateMsg = false, 5000);

        }, error => {
          this.showErrorMsg = true;
          setTimeout(() => this.showErrorMsg = false, 5000);
        });
      } else {
        let postData = { ...this.postsForm.value }
        this.ds.createPost(postData).subscribe(result => {

          this.showCreateMsg = true;
          setTimeout(() => this.showCreateMsg = false, 5000);

        }, error => {
          this.showErrorMsg = true;
          setTimeout(() => this.showErrorMsg = false, 5000);
        })

      }
    }
    else {
      console.log('error occuered')
    }

  }
  onReset(): void {
    this.postsForm.reset();
  }
  cancelEdit(): void {
    this.router.navigate(['posts'])
  }
}
