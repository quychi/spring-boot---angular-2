import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../module/user';
import { Course} from '../module/course';
import { Lessons} from '../module/lessons';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from '../service/apiservice.service';
import { Car } from '../module/car';
import { FormBuilder, Validators, FormGroup } from "@angular/forms"; 
import { Category } from '../module/category';
import { Route } from '../module/route';
import { Booking } from '../module/booking';
import { formatDate, DatePipe } from '@angular/common';
import { Note } from '../module/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class NoteComponent implements OnInit {

  dataArr = [];
  dataArr1: any;
  dataArr2: any;
  key = 'value';
  value: any = null;
  item = JSON.parse(localStorage.getItem(this.key));
  temp = 'Token ' + this.item.token.data[1];
  api = this.Api.domain;
  //domain: string=`http://localhost:8080/`;
  url = this.api + `notes`;
  url1;
  body;
  searchName;
  body1;
  body2;
  number;
  user: User;
  closeResult: string;
  note = new Note (0,"");
  submitted = false;
  btnFix = false;
  
  onSubmit() { this.submitted = true; }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.temp,
    })
  };
  constructor(private http: HttpClient,  private Api: ApiserviceService) {
    console.log(this.temp);
    this.http.get(this.url, this.httpOptions).subscribe(
      res => {
        var d: any = res;
        this.dataArr = d.data;
        console.log(this.dataArr)
      },
      err => console.log(err)
    );
  }


  ngOnInit() {
  }
  onBack()
  {
    this.submitted = false;
    //location.reload();
  }
  onDelete(note: Note)
  {
    console.log("id delete" +  note.id);
    this.url1= this.api+`note?id=`+note.id;
    this.http.delete(this.url1,this.httpOptions).subscribe(
      res =>{var d : any = res;
        this.dataArr = this.dataArr.filter((value) => {
          return value != note;
        });
      },
      err => console.log(err)
      );
  }
  onSetting(note: Note)
  {
    this.submitted = true;
    this.note = new Note(note.id,note.note);
    console.log(note);
  }
  onClick(note: Note)
  {

      console.log("thêm");
     this.body1 =
    {
      "note": note.note,
      //"created_date":post.created_date
    }
    this.http.post(this.api+`note`,this.body1,this.httpOptions).subscribe(
      res =>{var d : any = res;
        //this.dataArr = d.data;
      this.dataArr.push(d.data)
      console.log(this.dataArr)},
      
      err => console.log(err)
      );

  }

  onClickFix(note: Note)
  {
      console.log("sửa");
      this.body2 =
    {
      "id":note.id,
      "note": note.note,
      //"created_date":post.created_date
    }
    console.log(this.body2);
      this.http.put(this.api+`note`,this.body2,this.httpOptions).subscribe(
        res =>{console.log(res);
        // var d : any = res;
        // this.dataArr.push(d.data)
      
      },
      
      err => console.log(err)
      );
      for (var i = 0; i < this.dataArr.length; i++) {
        if (this.dataArr[i].id === note.id) {
          this.dataArr[i].id =note.id;
          this.dataArr[i].note =note.note;
          break;
        }
      }
    }
}