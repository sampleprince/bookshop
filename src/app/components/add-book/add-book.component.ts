import { NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookForm:FormGroup;
constructor(private formBuilder:FormBuilder, private router:Router, private ngZone:NgZone, private crudService:CrudService){
this.bookForm=this.formBuilder.group({
  name:[''],
  price:[''],
  description:['']
})
}
  onSubmit():any{
    this.crudService.AddBook(this.bookForm.value)
    .subscribe(()=>{
      console.log('data added successfully')
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    },(err)=>{
      console.log(err);
      });
  }
}
