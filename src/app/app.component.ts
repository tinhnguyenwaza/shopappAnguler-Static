import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OderpageComponent } from './components/oderpage/oderpage.component';
import { ConfirmOrderComponent } from "./components/confirm-order/confirm-order.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, OderpageComponent, ConfirmOrderComponent]
})
export class AppComponent {
  title = 'shopApp';
}
