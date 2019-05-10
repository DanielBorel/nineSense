import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app/app-routing.module'
import { AppComponent } from './app.component';
import { ChatWindowComponent } from '../app/chat-window/chat-window.component';
import { ChatMsgComponent } from '../app/chat-msg/chat-msg.component';
import { ChatInputComponent } from '../app/chat-input/chat-input.component';

import { AdminSharedModule } from '../../projects/admin/src/app/app.module';
import { HomeComponent } from './app/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    ChatMsgComponent,
    ChatInputComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    AdminSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export   class  AppModule { }
