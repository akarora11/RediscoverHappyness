import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000, style({ opacity: 1}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'rediscoverHappyness';

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  pageDetector() {
    var matched = this.router.url.match('/service');
    if (matched === null) {
      return false;
    } else {
      return true;
    }
  }
}
