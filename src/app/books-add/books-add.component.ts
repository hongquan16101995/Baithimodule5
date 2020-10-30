import { Component, OnInit } from '@angular/core';
import {Books} from '../model/books';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksServiceService} from '../service/books-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {

  newUserForm: FormGroup;
  message: string = '';
  books: Books;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksServiceService,
              private route: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        author: ['', [Validators.required]],
        description: ['', [Validators.required]],
      });
  }

  createBooks() {
    this.booksService.createBooks(this.newUserForm.value).subscribe(() => {
      this.message = 'Thêm mới thành công!';
      this.books = this.newUserForm.value;
      this.newUserForm.reset()
    })
  }
}
