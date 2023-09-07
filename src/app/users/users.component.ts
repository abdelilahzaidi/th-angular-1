import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private httpClient : HttpClient, private authService : AuthService){}
  
  user :any
  
    ngOnInit(): void {
      this.httpClient.get<any[]>('http://localhost:3001/auth/user').subscribe((data) => {
      this.user = data
    })
    }

}




