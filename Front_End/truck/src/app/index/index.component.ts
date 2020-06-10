import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/model/category';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

/* google map */
import {  ViewChild, ElementRef, NgZone, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmMap, MapsAPILoader } from '@agm/core';
import * as _ from 'lodash';
import { MatDateFormats } from '@angular/material';
import {formatDate } from '@angular/common';

class Address {
  id?: number;
  street?: string;
  additionalInfo?: string;
  lat?: number;
  lng?: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {
constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private storageService: StorageService,
    private router: Router,
    private mapsApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private ngZone2: NgZone,
) { }

  ngOnInit() {
    this.spinner.show();
    this.loadData();


    this.searchControl = new FormControl();
      this.search2Control = new FormControl();
      this.initializeRouteAndComponents();
      this.setGoogleMaps();
  }

  date = new Date();
  featuredCategory: Category[] = [];

  loadData() {
    var obs2 = this.apiService.getMainCategories();
    obs2.subscribe((response: HttpResponse<any>) => {
      var r : any = response;
      var listCategory = r.data;
      
      //get featured categories
      for(var i = 0; i < 4; i++)
      {
        var value = Math.floor(Math.random()*listCategory.length);
        var temp = listCategory[value];
        this.featuredCategory.push(temp);
        listCategory = listCategory.filter((category: Category, index, arr) => {
          return category != temp;
        })
      }
      this.spinner.hide();

    }, (error: HttpErrorResponse) => {
      alert("An error has occured while loading data, please try again later :(");
    })
  }


ngay: Date;
ngay2 : string;       //only take date(mysql have hours)
ngaygio: string;
loaixe: string;

onClickXemGia(){
  this.ngaygio = formatDate(this.ngay, 'yyyy-MM-dd hh:mm:ss', 'en-VI', '+0700');
  this.ngay2 = formatDate(this.ngay, 'yyyy-MM-dd', 'en-VI', '+0700');
  console.log(this.ngay);
  console.log(this.ngay2);
  console.log(this.loaixe);

    localStorage.setItem("ngay", this.ngay2);
    localStorage.setItem("ngaygio", this.ngaygio);
    localStorage.setItem("loaixe", this.loaixe);
    //localStorage 2 marker marker1 marker2 below function setupPlaceChangedListener2

    this.router.navigate(['/list-car']);
}


  autoComplete: google.maps.places.Autocomplete;
  autoComplete2: google.maps.places.Autocomplete;

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

  searchControl: FormControl;
  search2Control: FormControl;

  markers: any[] = [];

  TAX = 4;

  idListener: google.maps.MapsEventListener;
  idListener2: google.maps.MapsEventListener;

  @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('search2') public search2Element: ElementRef;

//   @ViewChild(AgmMap) public maps: AgmMap;

  

  setGoogleMaps(): void {
    //   this.maps.mapReady.subscribe(
    //       mapReady => this.directionsDisplay.setMap(mapReady),
    //       e => console.log('Error setting map in DirectionRenderer', e)
    //   );

      this.labelIndex = 0;

      this.mapsApiLoader
          .load()
          .then(() => {
              // services have to be initialized inside MapsApiLoader to work
              this.initializeGoogleMapsServices();

              this.setPlacesAutocomplete();

              // workaround to restrict Autocomplete to get addresses within the chosen city boundaries
            //   this.maps.boundsChange.subscribe(bounds => this.autoComplete.setBounds(bounds));
            //   this.maps.boundsChange.subscribe(bounds => this.autoComplete2.setBounds(bounds));

              this.setupPlaceChangedListener();
              this.setupPlaceChangedListener2();
          })
          .catch(e => console.log('Error loading MapsApi', e));
  }

  setupPlaceChangedListener(): void {
    this.idListener = this.autoComplete.addListener('place_changed', () => {            //'place_changed' is parameter
        console.log('Setting listener');
          this.ngZone.run(() => {
              const place = this.autoComplete.getPlace();

              if (!place.place_id || place.geometry === undefined || place.geometry === null) {
                  console.log('Place not found');
                  return;
              }

              const latitude = place.geometry.location.lat();
              const longitude = place.geometry.location.lng();

              const address = {
                  street: place.formatted_address,
                  additionalInfo: '',
                  lat: latitude,
                  lng: longitude
              } as Address;

              this.addresses.push(address);

              this.markers.push({
                  lat: latitude,
                  lng: longitude,
                  label: this.alphabeticLabels[this.labelIndex++ % this.alphabeticLabels.length]
              });

              console.log('Markers list: ', JSON.stringify(this.markers));
          });
    });
    }
    setupPlaceChangedListener2(): void {
        this.idListener2 = this.autoComplete2.addListener('place_changed', () => {      //'place_changed' is parameter
        console.log('Setting listener2');
        this.ngZone2.run(() => {
            const place2 = this.autoComplete2.getPlace();

            if (!place2.place_id || place2.geometry === undefined || place2.geometry === null) {
                console.log('Place not found 2');
                return;
            }

            const latitude2 = place2.geometry.location.lat();
            const longitude2 = place2.geometry.location.lng();

            const address2 = {
                street: place2.formatted_address,
                additionalInfo: '',
                lat: latitude2,
                lng: longitude2
            } as Address;

            this.addresses.push(address2);

            this.markers.push({
                lat: latitude2,
                lng: longitude2,
                label: this.alphabeticLabels[this.labelIndex++ % this.alphabeticLabels.length]
            });

            console.log('Markers list: ', JSON.stringify(this.markers));

            localStorage.setItem("street1", this.addresses[0].street);
            localStorage.setItem("street2", this.addresses[1].street);

            localStorage.setItem("marker1", JSON.stringify(this.markers[0]));
            localStorage.setItem("marker2", JSON.stringify(this.markers[1]));

            // this.drawRoute();
        });
    });
  }

//   drawRoute(): void {
//       const length = this.markers.length;
//       if (!(length >= 2)) {
//           return;
//       }

//       this.setDirectionsRequest();

//       if (length > 2) {
//           if (length >= 12) {
//               console.log('Google taxes for more than 10 waypoints. Be careful');
//               return;
//           }
//           const waypoints: google.maps.DirectionsWaypoint[] = [];
//           this.markers.slice(1, this.markers.length - 1)
//               .forEach(coordinates => {
//                   const way: google.maps.DirectionsWaypoint = {location: coordinates, stopover: null};
//                   waypoints.push(way);
//               });
//           this.directionsRequest.waypoints = waypoints;
//           console.log('Waypoints: ', JSON.stringify(waypoints));
//       }

//       this.callDirectionServiceRoute();

//   }

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

  ngOnDestroy() {
      google.maps.event.removeListener(this.idListener);
      google.maps.event.removeListener(this.idListener2);
  }

  initializeGoogleMapsServices(): void {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRequest = {} as google.maps.DirectionsRequest;
      this.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  setPlacesAutocomplete(): void {
      this.autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
      this.autoComplete.setTypes(['address']);
      this.autoComplete.setComponentRestrictions({country: 'vn'});

      this.autoComplete2 = new google.maps.places.Autocomplete(this.search2Element.nativeElement);
      this.autoComplete2.setTypes(['address']);
      this.autoComplete2.setComponentRestrictions({country: 'vn'});
  }

  initializeRouteAndComponents(): void {
      this.addresses = [];
      this.markers = [];
  }
}
