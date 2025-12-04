import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule here

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], // Add CommonModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Fixed styleUrl -> styleUrls (plural)
})
export class App {
  protected readonly title = signal('angular-routing-lab');
}
