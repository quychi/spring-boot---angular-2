/// <reference types="@types/googlemaps" />
import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';

import {  ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';

import {ApiService} from 'src/app/services/api.service';
import { HttpResponse, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '../model/route';
import { formatDate } from '@angular/common';
import { Car } from '../model/car';
import { StorageService } from '../services/storage.service';
import { User } from '../model/user';
import { Category } from '../model/category';
import { Note } from '../model/note';
// import localeEnGb from '@angular/common/locales/vi'


class Address {
    id?: number;
    street?: string;
    additionalInfo?: string;
    lat?: number;
    lng?: number;
  }

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit, AfterViewInit {
    
    listRoute: Route[] = [];
    temp = new Route(1000,"","","");
    listCar: Car[] = [];
    selectCar: Car;
    note = new Note(0, "");
    body1;
    dataArr: any;
    //domain: string=`http://localhost:8080/`;
    api=this.Api.domain;

    loaixe: string;
    tenloaixe: string;
    token:string;
    user: User;
    street1: string;
    street2: string;
    ngay: string;
    ngaygio: string;
    idLastestBooking: number;

    step1= true;
    step2= false;
    step3= false;




    constructor(
        private apiService: ApiService,
        private mapsApiLoader: MapsAPILoader,
        private ngZone: NgZone,
        private ngZone2: NgZone,
        private storageService: StorageService,
        private http: HttpClient,private Api:ApiService
    ) {
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log("user:",this.user);
        this.token = localStorage.getItem("token");
        console.log("token:", this.token);
        this.street1 = localStorage.getItem("street1");
        this.street2 = localStorage.getItem("street2");
        this.ngay = localStorage.getItem("ngay");
        this.ngaygio = localStorage.getItem("ngaygio");
        this.loaixe = localStorage.getItem("loaixe");
        this.covertLoaiXeToName();

        this.getCarByRouteNeed();


    }

    ngAfterViewInit() {
        this.setGoogleMaps();
      }


  ngOnInit() {
    
    // setTimeout(() => {
    //     this.setGoogleMaps();
    //   }, 0);
    // console.log(this.temp.id);      //routeid can tim se truyen vao this.temp.id

    //javascripts for 3 steps
    $(document).ready(function () {

        var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn');
    
        allWells.hide();
    
        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                    $item = $(this);
    
            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-primary').addClass('btn-default');
                $item.addClass('btn-primary');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });
    
        allNextBtn.click(function(){
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;
    
            $(".form-group").removeClass("has-error");
            for(var i=0; i<curInputs.length; i++){
                if (!curInputs[i].validity.valid){
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                }
            }
    
            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });
    
        $('div.setup-panel div a.btn-primary').trigger('click');
    });



    
  }

  covertLoaiXeToName(){
    if (this.loaixe == "0"){
        this.tenloaixe = "Pickup";
    }
    else if (this.loaixe == "1"){
        this.tenloaixe = "Van";
    }
    else if (this.loaixe == "2"){
        this.tenloaixe = "Truck";
    }
    else if (this.loaixe == "3"){
        this.tenloaixe = "Motocycle";
    }
    console.log(this.tenloaixe);
  }
  stateStep1(){
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
}
    stateStep2(){
    this.step1 = false;
    this.step2 = true;
    this.step3 = false;
    }
    stateStep3(){
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
    }
  getCarByRouteNeed(){
    //first get route need
    var obs = this.apiService.getAllRoute();
    obs.subscribe((response: HttpResponse<any>) => {
      var r : any = response;
      this.listRoute = r.data;
      console.log(this.listRoute);

      this.temp.startPoint = this.street1;
      this.temp.endPoint = this.street2;
      this.temp.startDate = this.ngay;
      console.log("temp :");
      console.log(this.temp.startPoint);
      console.log(this.temp.endPoint);
      console.log(this.temp.startDate);
      console.log("=======================");
      console.log("listroute[0] :");
      console.log(this.listRoute[0].startPoint);
      console.log(this.listRoute[0].endPoint);
      console.log(formatDate(this.listRoute[0].startDate, 'yyyy-MM-dd', 'en-VI', '+0700'));

      //get route need
      this.temp =  this.listRoute.find(x => ((x.startPoint == this.temp.startPoint) && (x.endPoint == this.temp.endPoint)));
      console.log("id route need after find: " + this.temp.id);
      //get car need
      this.getCarNeed();

    }, (error: HttpErrorResponse) => {
      alert("An error has occured while loading data, please try again later :(");
    })    
  }
  getCarNeed(){
   
    var obs = this.apiService.getCarRequestByRouteId(this.temp.id, this.token);
    obs.subscribe((response: HttpResponse<any>) => {
        var r : any = response;
        this.listCar = r.data;
        console.log("list carByRouteId: ",this.listCar);

        //get cars need with loaixe
        
        this.listCar =  this.listCar.filter(x => x.category.id.toString() == this.loaixe);
        console.log("list car need (routeId && loaixe): ", this.listCar);

    }, (error: HttpErrorResponse) => {
      alert("An error has occured while loading car data, please try again later :(");    
    });
  }
                //for add new note
                bodyNote;
                httpOptions = {
                    headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.token,
                    })
                };
  bookingCar(){
    console.log("thêm booking xe");
    this.body1 =
   {
     "pickupTime": this.ngaygio
   }

        //add note message
        console.log("thêm note message");
        this.bodyNote =
        {
            "note": this.note.message,
            //"created_date":post.created_date
        }
        var obs = this.apiService.addNote( this.bodyNote, this.token);
        obs.subscribe((response: HttpResponse<any>) => {
            var r : any = response;
            console.log("new note: ", r.data);
            console.log("id new note r.data.id: ", r.data.id);
            this.note.id = r.data.id;
            console.log("id new note this.note.id: ", this.note.id);

            //add new booking
            //not run follow number line (in 1 function) so addNewBooking must in addNewNote
            var obs = this.apiService.addBooking(this.temp.id, this.note.id, this.selectCar.id, this.body1, this.token);
             obs.subscribe((response: HttpResponse<any>) => {
                 var r : any = response;
                 console.log("booking add return: ", r.data);
                 this.idLastestBooking = r.data.id;
             }, (error: HttpErrorResponse) => {
               alert("An error has occured while adding booking data, please try again later :(");    
             });
            //end add new booking

        }, (error: HttpErrorResponse) => {
        alert("An error has occured while adding booking data, please try again later :(");    
        });
        //end add note message

   
  }
  deleteBooking(){
    console.log("DELETE id booking delete: ", this.idLastestBooking);
    var obs = this.apiService.deleteBooking(this.idLastestBooking, this.token);
    obs.subscribe((response: HttpResponse<any>) => {
        var r : any = response;
        console.log("delete booking:", r.data);
    }, (error: HttpErrorResponse) => {
      alert("An error has occured while delete booking data, please try again later :(");    
    });
  }

  
// all code below for draw map google

  directionsService: google.maps.DirectionsService;
  directionsRequest: google.maps.DirectionsRequest;
  directionsDisplay: google.maps.DirectionsRenderer;

  distance: number;
  distancePrice: number;
  taxPrice: number;

  addresses: Address[];

  // markers labels
  alphabeticLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  labelIndex: number;

  // google maps zoom level
  zoom = 11;

  // initial center position for the map
  lat = 21.028511;
  lng = 105.804817;



  markers: any[] = [];

  readonly TAX = 4;

  idListener: google.maps.MapsEventListener;
  idListener2: google.maps.MapsEventListener;

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('search2') public search2Element: ElementRef;

  @ViewChild(AgmMap) public maps: AgmMap;


  setGoogleMaps(): void {
      this.maps.mapReady.subscribe(
          mapReady => this.directionsDisplay.setMap(mapReady),
          e => console.log('Error setting map in DirectionRenderer', e)
      );

      this.labelIndex = 0;

      this.mapsApiLoader
          .load()
          .then(() => {
              // services have to be initialized inside MapsApiLoader to work
              this.initializeGoogleMapsServices();


              this.markers.push(JSON.parse(localStorage.getItem("marker1")));
              this.markers.push(JSON.parse(localStorage.getItem("marker2")));
            //   console.log(this.markers[0]);
            //   console.log(this.markers[1]);
          
          
          
              this.drawRoute();

          })
          .catch(e => console.log('Error loading MapsApi', e));
  }

  

  drawRoute(): void {
      const length = this.markers.length;
      if (!(length >= 2)) {
          return;
      }

      this.setDirectionsRequest();

      if (length > 2) {
          if (length >= 12) {
              console.log('Google taxes for more than 10 waypoints. Be careful');
              return;
          }
          const waypoints: google.maps.DirectionsWaypoint[] = [];
          this.markers.slice(1, this.markers.length - 1)
              .forEach(coordinates => {
                  const way: google.maps.DirectionsWaypoint = {location: coordinates, stopover: null};
                  waypoints.push(way);
              });
          this.directionsRequest.waypoints = waypoints;
          console.log('Waypoints: ', JSON.stringify(waypoints));
      }

      this.callDirectionServiceRoute();

  }

  setDirectionsRequest(): void {
      this.directionsRequest.origin = _.first(this.markers);
      this.directionsRequest.destination = _.last(this.markers);
      this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
      this.directionsRequest.optimizeWaypoints = true;
  }

  callDirectionServiceRoute(): void {
      this.directionsService.route(
          this.directionsRequest,
          (
              response: google.maps.DirectionsResult,
              status: google.maps.DirectionsStatus
          ) => {
              if (status === google.maps.DirectionsStatus.OK) {
                  this.directionsDisplay.setDirections(response);
                  this.calcDistance(response);
              } else {
                  console.log('Failed to display directions');
              }
          }
      );
  }

  calcDistance(response: google.maps.DirectionsResult) {
      const route: google.maps.DirectionsRoute = response.routes[0];
      let distance = 0;
      for (let i = 0; i < route.legs.length; i++) {
          distance += route.legs[i].distance.value;
      }
      this.distance = parseFloat((distance / 1000).toFixed(2));
      console.log('Distance total: ', this.distance);
  }


  trackByIndex(index: number, obj: any): any {
      return index;
  }



  initializeGoogleMapsServices(): void {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRequest = {} as google.maps.DirectionsRequest;
      this.directionsDisplay = new google.maps.DirectionsRenderer();
  }


}
