import { inject } from '@angular/core';
import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';
import { catchError, retry, timer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export const GlobalErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    retry({
      count:2,
      delay:(_,retryCount)=>timer(retryCount*100)
    }),
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 500:
            snackBar.open("An error occurred while fetching the data. Please try again later.", 'Close', { duration: 2000 })
            break;
          case 400:
            snackBar.open("Bad Request", 'Close', { duration: 2000 })
            break;
          case 401:
            snackBar.open("Unauthorized", 'Close', { duration: 2000 })
            break;

          case 403:
            snackBar.open("forbidden", 'Close', { duration: 2000 })
            break;
          case 404:
            snackBar.open("no data founded", 'Close', { duration: 2000 })
            break;
          case 422:
            snackBar.open("no data founded", 'Close', { duration: 2000 })
            break;
          default:
            snackBar.open("An error occurred while fetching the data. Please try again later.", 'Close', { duration: 2000 })
            break;
        }
      }
      console.log('interceptor');

      throw err;
    })
  );
}
