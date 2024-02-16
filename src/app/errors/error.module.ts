import { ErrorHandler, Injectable, Injector, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorComponent } from './error.compoent';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const router = this.injector.get(Router);
    console.error(error);

    // Check if the error is a routing error
    if (error.status === 404) {
      router.navigate(['/404']);
    }
  }
}

@NgModule({
  declarations: [ErrorComponent],
  imports: [],
  exports: [],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
})
export class ErrorModule {}
