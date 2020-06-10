import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../module/user';
import { Course } from '../module/course';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiserviceService } from '../service/apiservice.service';
import { Lessons } from '../module/lessons'
import { Route } from '../module/route';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  dataArr = [];
  dataArr1: any;
  dataArr2: any;
  key = 'value';
  value: any = null;
  item = JSON.parse(localStorage.getItem(this.key));
  temp = 'Token ' + this.item.token.data[1];
  api = this.Api.domain;
  //domain: string=`http://localhost:8080/`;
  url = this.api + `routes`;
  url1;
  body;
  searchName;
  body1;
  body2;
  number;
  user: User;
  closeResult: string;
  route = new Route (0,"","","");
  //course:Course;
  date = new Date();
  submitted = false;
  btnFix = false;
  public dateValue: Date; //GMT
  
  onSubmit() { this.submitted = true; }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.temp,
    })
  };
  constructor(private http: HttpClient,  private Api: ApiserviceService, private datePipe: DatePipe) {
    console.log(this.temp);
    this.http.get(this.url, this.httpOptions).subscribe(
      res => {
        var d: any = res;
        this.dataArr = d.data;
        console.log(this.dataArr)
        for (var i = 0; i < this.dataArr.length; i++) {
            this.dataArr[i].startDate = this.datePipe.transform(this.dataArr[i].startDate, 'dd/MM/yyyy');
        }
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
  onDelete(route:Route)
  {
    console.log("id delete" +  route.id);
    this.url1= this.api+`route?id=`+route.id;
    this.http.delete(this.url1,this.httpOptions).subscribe(
      res =>{var d : any = res;
        this.dataArr = this.dataArr.filter((value) => {
          return value != route;
        });
      },
      err => console.log(err)
      );
  }
  onSetting(route:Route)
  {
    this.submitted = true;
    this.route = new Route(route.id,route.startPoint,route.endPoint,route.startDate);
    console.log(route);
  }
  onClick(route: Route)
  {

      console.log("thêm");
      var test = this.dateValue.toISOString();    //GMT to UTC (UTC for mysql)
      route.startDate = test;

     this.body1 =
    {
      "startPoint": route.startPoint,
      "endPoint":route.endPoint,
      "startDate":route.startDate,
      //"created_date":post.created_date
    }
    this.http.post(this.api+`route`,this.body1,this.httpOptions).subscribe(
      res =>{var d : any = res;
        //this.dataArr = d.data;
      this.dataArr.push(d.data)
      console.log(this.dataArr)},
      
      err => console.log(err)
      );

  }

  onClickFix(route: Route)
  {
      console.log("sửa");
      var test = this.dateValue.toISOString();    //GMT to UTC (UTC for mysql)
      console.log(test);
      route.startDate = test;
      // this.dateValue = ;

      this.body2 =
    {
      "id":route.id,
      "startPoint": route.startPoint,
      "endPoint":route.endPoint,
      "startDate":test,
      //"created_date":post.created_date
    }
    console.log(this.body2);
      this.http.put(this.api+`route`,this.body2,this.httpOptions).subscribe(
        res =>{console.log(res);
        // var d : any = res;
        // this.dataArr.push(d.data)
      
      },
      
      err => console.log(err)
      );
      for (var i = 0; i < this.dataArr.length; i++) {
        if (this.dataArr[i].id === route.id) {
          this.dataArr[i].id =route.id;
          this.dataArr[i].startPoint =route.startPoint;
          this.dataArr[i].endPoint =route.endPoint;
          this.dataArr[i].startDate = this.datePipe.transform(this.dataArr[i].startDate, 'dd/MM/yyyy');
          break;
        }
      }
    }
}