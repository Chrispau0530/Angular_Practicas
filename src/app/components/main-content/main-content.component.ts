import { Component } from '@angular/core';
import { PageContainerComponent } from "../page-container/page-container.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-main-content',
  imports: [PageContainerComponent, NavbarComponent, SidebarComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
