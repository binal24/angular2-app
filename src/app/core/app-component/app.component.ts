import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrConfig } from 'toastr-ng2';
import { TranslateService } from 'ng2-translate';
//import { CeiboShare } from 'ng2-social-share';
//import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula';
//import { ShareButtonsModule } from "ng2-sharebuttons";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    //providers: [DragulaService]
})
export class AppComponent  {
    public url: any;
    
    constructor(translate: TranslateService, toastrConfig: ToastrConfig) {
        //translate provider configuration
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('fr');

        //toastr configuration
        toastrConfig.timeOut = 5000;
        toastrConfig.tapToDismiss = true

        let data = {
            id: "1",
            name: "binal",
            token: "asd234cf65756dhjsdf78sdhfj9089ad"
        };
        this.url = "https://www.youtube.com/watch?v=j9w5hFit5rM";
        //localStorage.setItem("authData", JSON.stringify(data));
    }
}
