import { Routes } from '@angular/router';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { OderpageComponent } from './components/oderpage/oderpage.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const routes: Routes = [
    { path: 'confirm-order', component: ConfirmOrderComponent },
    { path: 'order', component: OderpageComponent },
    { path: 'login', component: LoginFormComponent }
];
