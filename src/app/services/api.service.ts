
import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable()



export class apiservice {

  private userInfo = new BehaviorSubject<any>('default');
  public userdata = this.userInfo.asObservable();

  constructor(private http: HttpClient) { }


  loginDetails(username, password): Observable<any> {
    return this.http.post<any>(`https://api.violetlms.com/api/v1/User/Login?DomainID=20185&UserCode=${username}&Password=${password}`, {})
  }

  sendData(userdata) {
    this.userInfo.next(userdata)
  }


}

