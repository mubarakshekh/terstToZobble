import { Component, OnInit } from '@angular/core';
import { apiservice } from '../services/api.service';
// import { commnets } from '../classes/comments';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _apiservice: apiservice, private _HttpClient:HttpClient) { }
  // constructor(private _HttpClient:HttpClient) { }


  listComment : object;
  loginRes : object;
  flag : boolean;
  data : any

  ngOnInit() {
    
    this._apiservice.userdata.subscribe(
      message=> {
        this.data = message;
        // localStorage.setItem('user', message)

        console.log(message,'message from login')
      }
    )



    // this._HttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
    //   data=>
    //   {
   
    //     console.log(data)
    //   }
    // )

    // this.flag = false;
    // if (localStorage.getItem('user')){
    //   this.flag = false
      
    //   const loginDatail = localStorage.getItem('user')
    //   this.loginRes = JSON.parse(loginDatail)
    //   console.log(this.loginRes, 'inhome')

    // }


    // this._apiservice.loginDetails().subscribe(data => console.log(data,'in home') )


  }

}
