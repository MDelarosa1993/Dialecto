import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message: string = "";

  constructor(private fb: FormBuilder, private authService: AuthServiceService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log("Register Component",response)
        this.message = "Registration Successful! You can now log in.";
        this.registerForm.reset();
      },
      error: (error) => {
        this.message = "Registration failed!: " + error.error.error;
      }
    });
  }
}
