import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {TopBannerComponent} from './top-banner/top-banner.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {MainContentComponent} from './main-content/main-content.component';
import {AsideComponent} from './aside/aside.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    AboutComponent,
    ContactComponent,
    TopBannerComponent,
    TopMenuComponent,
    MainContentComponent,
    AsideComponent,
    // NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = 'Hello SV7';

  greeting(): void {
    if (this.message === 'Hello SV7') {
      this.message = "Hello World"
    } else {
      this.message = 'Hello SV7'
    }
  }
}
