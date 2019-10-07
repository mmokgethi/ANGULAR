import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px ) { #searchForm {display:none}}
    li > .active { color: #F97942; }
  `]
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
}
