import { Routes } from '@angular/router';
import { CounterSignalComponent } from './counter-signal/counter-signal.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

export const routes: Routes = [
    { path: 'counter', component: CounterSignalComponent },
    { path: 'rxjs', component: RxjsOperatorsComponent },
];
