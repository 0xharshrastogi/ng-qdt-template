import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const OBJECT_ID = 'SOME_OBJECT_ID';
    console.log(OBJECT_ID);
  }
}
