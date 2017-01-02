import { Component, OnInit } from '@angular/core';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule, ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { ToastrService } from 'toastr-ng2';
import { DropdownModule } from "ng2-dropdown";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    arrayOfStrings: string[] =
    ["this", "is", "array", "of", "text"];
    model1 = "";
    myCallback(newVal) {
        console.log("value is changed to ", newVal);
        this.model1 = newVal;
    }
    json(obj) {
        return JSON.stringify(obj);
    }
    constructor(private toastrService: ToastrService) { }

    showSuccess() {
        this.toastrService.success('Hello world!', 'Toastr fun!');
    }
    ngOnInit() {
    }
}
