import { Routes } from '@angular/router';
import { CounterSignalComponent } from './counter-signal/counter-signal.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { PopupComponent } from './popup/popup.component';
import { WidgetComponent } from './widget/widget.component';

export const routes: Routes = [
    { path: 'counter', component: CounterSignalComponent },
    { path: 'rxjs', component: RxjsOperatorsComponent },
    { path: 'popup', component: PopupComponent },
    { path: 'widget', component: WidgetComponent },
];
