import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './ejercicio-06/ejercicio-06.component'; 
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from "./components/content/content.component";
import { FooterComponent } from './components/footer/footer.component';
import { PageContainerComponent } from "./components/page-container/page-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio03Component, Ejercicio04Component, Ejercicio05Component, Ejercicio06Component,
    MainContentComponent, NavbarComponent, SidebarComponent, ContentComponent, FooterComponent, PageContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_Angular_230166';
}