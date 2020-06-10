import { Component, OnInit, Input,  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private apiService: ApiService, private router: Router
    ) { }

    currentUser: User = new User(0, "", "", "", "", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png");
    data: User ; //save user of localStorage
    loggedin=false;
    quantitycart:number;
    messageCart: string;
    userNameInfor: string;
    active:string = "active";
    searchQuery: string = "";
    ngOnInit() {
      this.loadUser();
      // this.loadCart();
    }
  
    // phan load cart
    // loadCart(){
    //   this.storageService.localStorage.getItem("cart").subscribe((data: Course[])=>{
    //     if(data == null || data.length == 0)
    //     {
    //       this.messageCart = "Your cart is empty";
    //     }
    //     else
    //     {
    //       this.arrCart= data;
    //       this.quantitycart = data.length;
    //       //do du lieu
    //     }
    //   });
    // }
    loadUser()
    {
      //loading user
      this.data = JSON.parse(localStorage.getItem("user"));
        if(this.data == null)  //user havent logged in
        {
          console.log("User haven't logged in");
          this.loggedin = false;
        }
        else{
          console.log("User logged in");
          this.userNameInfor = this.data.username;
          this.currentUser = this.data;
          this.loggedin = true;
          console.log(this.currentUser.avatarUrl);
        }
    }
  
    onLogoutClick()
    {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      // this.storageService.localStorage.removeItem("cart").subscribe(()=>{});
      this.loggedin = false;
      this.router.navigate(["/index"]);
      // document.location.reload();
    }
    onSearch()
    {
      if(this.searchQuery.length > 0)
        //this.router.navigate(['/searchresult', this.searchQuery]);
        window.location.replace('/searchresult/'+ this.searchQuery);
    }

}
