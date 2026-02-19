import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import AppComponent from './app.component';
import CoreModule from './core/core.module';
import AppRoutingModule from './app-routing.module';
import AuthenticationGuard from './core/guards/authentication.guard';
import { reducer } from './redux/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule,
    StoreModule.forRoot({ youtube: reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent],
})
export default class AppModule {}
