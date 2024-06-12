import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-oderpage',
    standalone: true,
    templateUrl: './oderpage.component.html',
    styleUrl: './oderpage.component.scss',
    imports: [FooterComponent, HeaderComponent]
})
export class OderpageComponent {

}
