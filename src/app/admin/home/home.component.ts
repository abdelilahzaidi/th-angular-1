import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private httpClient : HttpClient,private fb : FormBuilder, private userService : UserService){}
  response$ :any;
user :any
users: any[] = []
showDivCreateUser =false

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:3001/auth/user').subscribe((data) => {
    this.user = data
  })
  this.getUser()
  }


  userForm : FormGroup = this.fb.group({
    first_name:[''],
    last_name:[''],
    gender:[''],
    email:[''],
    adress:[''],
    birthDate:[''],
    actif:[''],
    gsm:[''],
    grade:[''],
    status:['']
  })
  apiUrl='http://localhost:3001'
  getUser(){
    this.showDivCreateUser = false
      return this.httpClient.get(this.apiUrl+'/user').subscribe({
        next :(data)=>{
          this.users=data as [];
          console.log('user',this.user)
        },
        error : (err)=>{
          console.log(err);
        }
      })
  }




  

  async createUser() {
    this.showDivCreateUser =true
    
  }






  async submit() {
    console.log('user / submit', this.userForm.value);

    this.userService.createUser(this.userForm.value)
      .subscribe(
        (res) => {
          console.log('Réponse du serveur :', res);
          this.response$ = res; // Si vous avez besoin de stocker la réponse
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la requête :', error);
          // Traitez l'erreur comme vous le souhaitez ici
        }
      );
  }

}







