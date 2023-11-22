import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = "";
  title = 'frontend';

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getMessage().subscribe((res: any) => {
      this.message = res.message;
    })
  }
}
