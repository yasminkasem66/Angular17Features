import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CustomeErrorHandlerService } from '../core/services/custome-error-handler.service';
import { GlobalErrorHandlerInterceptor } from '../core/interceptor/global-error-handler.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(),  withComponentInputBinding()),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withJsonpSupport(),  withInterceptors([GlobalErrorHandlerInterceptor])),
    importProvidersFrom(MatSnackBarModule),
    {
      provide:ErrorHandler,
      useClass:CustomeErrorHandlerService
    },
   ]
};
