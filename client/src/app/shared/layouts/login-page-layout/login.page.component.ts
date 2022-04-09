import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './login.page.component.html',
  styleUrls: ['./login.page.component.scss'],
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginPagImg: string = './../../../../assets/images/loginPage.png';
}
