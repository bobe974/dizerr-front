import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./layout/navigation/navigation.component";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";  
import { fontAwesomeIcons } from './shared/font-awesome-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'dizzerr-front';
  private faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }
  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

}
