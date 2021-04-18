import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  formGroup: FormGroup;

  steps = [
    { label: 'Confirm your details' },
    { label: 'Confirm your password' },
    { label: 'Confirm your bank details' },
    { label: 'confirm your address' },
  ];

  get formArray(): AbstractControl | null {
    return this.formGroup.get('formArray');
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
          panFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email],
          otpFormCtrl: ['', Validators.required],
          passwordFormCtrl: ['', Validators.required],
          confirmPasswordFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          cardFormCtrl: ['', Validators.required],
          bankNameFormCtrl: ['', Validators.required],
          accFormCtrl: ['', Validators.required],
          ifscFormCtrl: ['', Validators.required],
          PasswordFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          address1FormCtrl: [''],
          aaddress2Ctrl: [''],
        }),
      ]),
    });
  }
}
