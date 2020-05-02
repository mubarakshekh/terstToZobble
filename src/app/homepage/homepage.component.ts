import { Component, OnInit } from '@angular/core';
import { apiservice } from '../services/api.service';
// import { commnets } from '../classes/comments';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {

  constructor(private _apiservice: apiservice, private _HttpClient:HttpClient) { }


  listComment : object;
  loginRes : object;
  flag : boolean;
  data : any

  ngOnInit() {
    
    this._apiservice.userdata.subscribe(
      message=> {
        this.data = message;
      }
    )





  }

}
