import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  test() {
    console.log('button pressed');
  }

  otpsent: boolean = false;
  email: string;
  otp: string = '';
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

  constructor(
    private _formBuilder: FormBuilder,
    private accountService: AccountServiceService
  ) {}

  getOtp() {
    this.otpsent = true;
    this.email = this.formGroup.get('formArray').value[0].emailFormCtrl;
    this.accountService.getOtp(this.email).subscribe((data) => {
      this.otp = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
          // panFormCtrl: ['', Validators.required],
          emailFormCtrl: ['', [Validators.required, Validators.email]],
        }),
        this._formBuilder.group({
          otpFormCtrl: ['', [Validators.required, otpVerify.bind(this)]],
        }),
        this._formBuilder.group(
          {
            passwordFormCtrl: ['', Validators.required],
            confirmPasswordFormCtrl: ['', Validators.required],
          },
          { validators: checkPasswords }
        ),
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
function otpVerify(control: AbstractControl): { [key: string]: any } | null {
  const otpgot: string = control.value;
  if (otpgot === this.otp) {
    return null;
  } else {
    return { OtpInvalid: true };
  }
}

function checkPasswords(group: FormGroup) {
  // here we have the 'passwords' group
  const password = group.get('passwordFormCtrl').value;
  const confirmPassword = group.get('confirmPasswordFormCtrl').value;

  return password === confirmPassword ? null : { notSame: true };
}
