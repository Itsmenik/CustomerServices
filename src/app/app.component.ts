import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true, // Indicates it's a standalone component
  imports: [RouterOutlet, MatButtonModule], // Ensure MatButtonModule is imported
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class AppComponent {
  title = 'cutomerprotol';  
 
}
 