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

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class CarComponent implements OnInit {

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
    url =this.api+`cars`;
    url1;
    body;
    searchName;
    body1;
    body2;
    number;
    id:number;
    
    closeResult: string;

    date = new Date();
    submitted = false;
    category = new Category(0,"","");
    driverId = 0;
    userDriver = new User(0,"","","","","","");
    car = new Car(this.number,"","",0,0,this.category,this.userDriver,"");
    btnFix = false;
    myCategoryForm = this.fb.group({
      idCategoryCar: ['', [Validators.required]]
    })


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
  	  console.log(this.dataArr)},
      err => console.log(err)
      );
    
    }
  ngOnInit() {
  }
  onBack()
  {
    this.submitted = false;
    this.car = new Car(1,"","",0,0,this.category,this.userDriver,"");
    console.log(this.item.token.data[0].username);
  }
  onDelete(car:Car)
  {
    console.log(car.id);
    this.url1= this.api+`car?id=`+car.id;
    this.http.delete(this.url1,this.httpOptions).subscribe(
      res =>{var d : any = res;
      this.dataArr = this.dataArr.filter((value) => {
        return value != car;
      });
      //this.dataArr = d.data;
     //location.reload()
      ;},
      err => console.log(err)
      );
  }
  onSetting(car:Car)
  {
    this.submitted = true;
    this.car = new Car(car.id,car.description,car.imgUrl,car.price,car.pricePerKm,car.category,car.driver,car.createdByUser);
    console.log(this.car);
  }
  onSend(id:Number)
  {
    console.log(id);
    // let sub= {ID : id};
     localStorage.setItem(this.key2, JSON.stringify(id));
  }
  onClick(car:Car)
  {
    console.log("aaaaa");
    
      console.log("thêm");
     this.body1 =
    {
      "description": car.description,
      "imgUrl":car.imgUrl,
      "price":car.price,
      "pricePerKm":car.pricePerKm,
      "categoryId":car.category.id,
      // "createdBy":car.createdBy,                      auto audit yes
      //
      //"created_date":post.created_date
    }
    this.http.post(this.api+`car/driver?id=`+this.driverId,this.body1,this.httpOptions).subscribe(
      res =>{var d : any = res;
      this.dataArr.push(d.data)},
      err => console.log(err)
      );
    }
    onClickFix(car:Car){
      console.log("sửa");
      this.body2 =
    {
      "id":car.id,
      "description": car.description,
      "imgUrl":car.imgUrl,
      "price":car.price,
      "pricePerKm":car.pricePerKm,
      "categoryId":car.category.id,
    }
      this.http.put(this.api+`car/driver?id_driver=`+this.driverId,this.body2,this.httpOptions).subscribe
      (res =>{console.log(res);},
      
      err => console.log(err)
      );
      for (var i = 0; i < this.dataArr.length; i++) {
        if (this.dataArr[i].id === car.id) {
          this.dataArr[i].id =car.id;
          this.dataArr[i].description=car.description;
          this.dataArr[i].imgUrl =car.imgUrl;
          this.dataArr[i].price =car.price;
          this.dataArr[i].pricePerKm =car.pricePerKm;
          this.dataArr[i].createdByUser = this.item.token.data[0].username;
          this.dataArr[i].driver.id = this.driverId;
          break;
        }
      }
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
