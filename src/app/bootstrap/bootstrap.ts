import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.html',
  styleUrls: ['./bootstrap.css']
})
export class Bootstrap {
  isTextVisible: boolean = false;

  toggleText() {
    this.isTextVisible = !this.isTextVisible;
  }
}
