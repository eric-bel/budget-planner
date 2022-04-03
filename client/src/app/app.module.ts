import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TestComponent } from './test/test.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, TestComponent, AuthLayoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
