import { ErrorHandler, inject, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomeErrorHandlerService implements ErrorHandler {
  snackBar=inject(MatSnackBar);
  zone=inject(NgZone);

  constructor() { }
  
  handleError(error: any): void {
    this.zone.run(()=>{
      this.snackBar.open(
        "error handleError",
        'Close',
        {
          duration:2000
        }
      )
      console.log('by handleError',error);
      // throwError(()=>error)
    })
  }
}
