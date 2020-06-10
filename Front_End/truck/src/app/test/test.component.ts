import { Component } from '@angular/core';

export interface Food {
   value: string;
   display: string;
}
@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })
export class TestComponent {
   title = 'materialApp'; 
   chossePayment: string;
   payments: string[] = ['Pay later (in cash)', 'Payment online'];
}