import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routing } from './core/app.routing';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ToastrModule, ToastrConfig } from 'toastr-ng2';
import { DropdownModule } from "ng2-dropdown";

import './core/rxjs-operators';
import { HttpHandler } from './common/http.handler';
import { AuthGuard } from './common/auth.guard';
import { AppComponent } from './core/app-component/app.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { CeiboShare } from 'ng2-social-share';
import { LoginComponent } from './views/login/login.component';
import { MasterComponent } from './views/layout/master/master.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { LeftPanelComponent } from './views/layout/left-panel/left-panel.component';
import { RightPanelComponent } from './views/layout/right-panel/right-panel.component';
import { ShareButtonsModule } from "ng2-sharebuttons";
import { HomepageComponent } from './views/homepage/homepage.component';
import { SignupComponent } from './views/signup/signup.component';
import { TracksComponent } from './views/tracks/tracks.component';
import { SerachListingComponent } from './views/serach-listing/serach-listing.component';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
    declarations: [
        AppComponent,
        CeiboShare,
        LoginComponent,
        MasterComponent,
        HeaderComponent,
        FooterComponent,
        LeftPanelComponent,
        RightPanelComponent,
        HomepageComponent,
        SignupComponent,
        TracksComponent,
        SerachListingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        DragulaModule,
        ShareButtonsModule,
        Ng2AutoCompleteModule,
        CommonModule,
        DropdownModule,
        ModalModule.forRoot(),
        ToastrModule.forRoot(), 
        TranslateModule.forRoot()
    ],
    providers: [
        TranslateService,
        HttpHandler,
        AuthGuard,
        AuthServiceService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
