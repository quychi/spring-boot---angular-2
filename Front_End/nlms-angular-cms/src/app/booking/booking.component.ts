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
import { formatDate } from '@angular/common';
import { Note } from '../module/note';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class BookingComponent implements OnInit {

  dataArr = [];
  dataArr1: any;
  dataArr2: any;
	key = 'value';
    value: any = null;
    key2 = 'value2';
    value2: any = null;
    item = JSON.parse(localStorage.getItem(this.key));
    temp ='Token '+ this.item.token.data[1];
    api = this.Api.domain;
    //domain: string=`http://localhost:8080/`;
    url =this.api+`bookings`;
    url1;
    body;
    searchName;
    body1;
    body2;
    noteId: number;
    id:number;
    BcarId: number;
    BrouteId: number;
    BnoteId: number;

    closeResult: string;

    submitted = false;
    route = new Route (0,"","","");
    driverId = 0;
    driver = new User(0,"","","","","","");
    category = new Category(0,"","");
    note = new Note(0,"");
    car = new Car(this.id,"","",0,0,this.category,this.driver,"");
     dateValue: Date ;
    booking = new Booking(this.id,this.dateValue, this.route, this.car, this.driver, this.note);
    btnFix = false;
    
    

    onSubmit() { this.submitted = true;}
     httpOptions = {
  headers: new HttpHeaders({
   
    'Content-Type':  'application/json',
    'Authorization': this.temp,
  })
  };
  constructor(private http: HttpClient,config: NgbModalConfig, private modalService: NgbModal,private Api: ApiserviceService, public fb: FormBuilder) { 
    console.log(this.temp);
    config.backdrop = 'static';
    config.keyboard = false;
  this.http.get(this.url,this.httpOptions).subscribe(
      res =>{var d : any = res;
      this.dataArr = d.data;
      for (var i = 0; i < this.dataArr.length; i++) {
        this.dataArr[i].pickupTime =formatDate(this.dataArr[i].pickupTime, 'dd-MM-yyyy hh:mm:ss a', 'en-VI', '+0700')
      }
      console.log(this.dataArr)},
      err => console.log(err)
      );
    
    }
  ngOnInit() {
    
  }
  onBack()
  {
    this.submitted = false;

    this.booking = new Booking(this.id, this.dateValue, this.route, this.car, this.driver, this.note);
    console.log(this.item.token.data[0].username);
  }
  onDelete(booking: Booking)
  {
    console.log(booking.id);
    this.url1= this.api+`booking?id=`+booking.id;
    this.http.delete(this.url1,this.httpOptions).subscribe(
      res =>{var d : any = res;
      this.dataArr = this.dataArr.filter((value) => {
        return value != booking;
      });
      //this.dataArr = d.data;
     //location.reload()
      ;},
      err => console.log(err)
      );
  }
  onSetting(booking: Booking)
  {
    this.submitted = true;
    this.BcarId = booking.car.id;
    this.BrouteId = booking.route.id;
    this.BnoteId = booking.note.id;

    this.dateValue = new Date(formatDate(booking.pickupTime, 'dd-MM-yyyy hh:mm:ss a', 'en-VI', '+0700'));
    this.booking = new Booking(booking.id, booking.pickupTime, booking.route, booking.car, booking.driver, booking.note);
    console.log(this.booking);
  }
  onSend(id:Number)
  {
    console.log(id);
    // let sub= {ID : id};
     localStorage.setItem(this.key2, JSON.stringify(id));
  }
  onClick(booking: Booking)
  {
    console.log("aaaaa");
    
      console.log("thêm");
      this.body1 =
    {
      "pickupTime": booking.pickupTime,
      "carId":this.BcarId,
      "routeId":this.BrouteId,
      "noteId":this.BnoteId,
      // "createdBy":car.createdBy,                      auto audit yes
      //
      //"created_date":post.created_date
    }
    this.http.post(this.api+`booking?idRoute=`+this.BrouteId + '&idNote='+this.BnoteId + '&idCar='+this.BcarId, this.body1,this.httpOptions).subscribe(
      res =>{console.log(res);
      //get load again dataArr (new)
    this.http.get(this.url,this.httpOptions).subscribe(
      res =>{var d : any = res;
      this.dataArr = d.data;
      for (var i = 0; i < this.dataArr.length; i++) {
        this.dataArr[i].pickupTime =formatDate(this.dataArr[i].pickupTime, 'dd-MM-yyyy hh:mm:ss a', 'en-VI', '+0700')
      }
      console.log(this.dataArr)},
      err => console.log(err)
      );
    },
      err => console.log(err)
      );
    }

    onClickFix(booking: Booking){
      console.log("sửa");
      console.log(booking.pickupTime);
      console.log(booking.pickupTime.toISOString());
      this.body2 =
      {
        "id": booking.id,
        "pickupTime": booking.pickupTime.toISOString(),
        "carId":this.BcarId,
        "routeId":this.BrouteId,
        "noteId":this.BnoteId,
        // "createdBy":car.createdBy,                      auto audit yes
        //
        //"created_date":post.created_date
      }
      this.http.put(this.api+`booking?idCar=`+this.BcarId + '&idRoute='+this.BrouteId + '&idNote='+this.BnoteId,this.body2,this.httpOptions).subscribe
      (res =>{console.log(res);
        //get load again dataArr (update)
        this.http.get(this.url,this.httpOptions).subscribe(
          res =>{var d : any = res;
          this.dataArr = d.data;
          for (var i = 0; i < this.dataArr.length; i++) {
              this.dataArr[i].pickupTime =formatDate(this.dataArr[i].pickupTime, 'dd-MM-yyyy hh:mm:ss a', 'en-VI', '+0700')
          }
          console.log(this.dataArr)},
          err => console.log(err)
          );
      },
      err => console.log(err)
      );

      
    }
  
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  changeCategory(e){
    this.car.category.id = e.target.value, {
      onlySelf: true
    }

    console.log("car.category.id:",this.car.category.id);
  }

}
