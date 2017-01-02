import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private security: AuthServiceService, private fb: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [<any>Validators.required]],
            password: ['', [<any>Validators.required]]
        });
    }
    
    onSubmit() {
        var email = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        this.security.login(email, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['tracks']);
            }
        });
    }
}
