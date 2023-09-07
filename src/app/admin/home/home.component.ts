import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient : HttpClient, private authService : AuthService){}
  
user :any

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:3001/auth/user').subscribe((data) => {
    this.user = data
  })
  }

}
