import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../../services/user-manager.service';
import { IUserResponse } from '../../modules/user';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  email: string;
  name: string;
  phone: string;
  picture: string;

  constructor(private UserManagerService: UserManagerService ) { }

  ngOnInit(): void {
    this.getRandomUser();
  }

  handleClick() {
    this.getRandomUser();
  }

  getRandomUser() {
    this.UserManagerService
    .getRandomName()
    .subscribe((response: IUserResponse) => {
      const {results} = response;
      const [data] = results;
      const{email,name,phone,picture} = data;
      this.name = `${name.first} ${name.second}`;
      this.email = email;
      this.phone = phone;
      this.picture = picture.large;
    })
  }
}
