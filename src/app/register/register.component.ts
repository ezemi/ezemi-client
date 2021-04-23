import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from '../Models/bank';
import { Status } from '../Models/status';
import { UserRegDto } from '../Models/userRegDto';
import { AccountServiceService } from '../services/account-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  otpsent: boolean = false;
  email: string;
  otp: string = '';
  hide = true;
  hide1 = true;

  user: UserRegDto = new UserRegDto();

  banks: Bank[] = [];

  p1: string;
  p2: string;
  passmismatch: boolean = false;

  checkpass() {
    if (!(this.p1 == this.p2)) {
      this.passmismatch = true;
    } else {
      this.passmismatch = false;
    }
  }

  formGroup: FormGroup;

  validationMessages = {
    firstNameFormCtrl: { required: 'First name is required' },
    lastNameFormCtrl: { required: 'last name is required' },
    emailFormCtrl: {
      required: 'email is required',
      email: 'invalid email',
    },
    phoneNumber: {
      required: 'Phone number is required',
      pattern: 'Invalid phone number',
      minlength: 'Please enter 10 digits phone number',
      maxlength: 'Please enter 10 digits phone number',
    },
    2: { notSame: 'passwords did not match' },
    otpFormCtrl: { required: 'Otp is required' },
    passwordFormCtrl: {
      required: 'password is required',
      pattern:
        'Minimum eight characters, at least one letter and one number and special character',
    },
    confirmPasswordFormCtrl: { required: 'password is required' },
    cardFormCtrl: { required: 'card is required' },
    bankNameFormCtrl: { required: 'Bank name is required' },
    accFormCtrl: {
      pattern: 'number only',
      required: 'account number is required',
    },
    ifscFormCtrl: { required: 'ifsc is required' },
    address1FormCtrl: { required: 'address is required' },
    aaddress2Ctrl: { required: 'address is required' },
    cityformctrl: { required: 'City is required' },
    pincodeformctrl: {
      required: 'Pincode is required',
      pattern: 'number only',
    },
    companyname: { required: 'Company name is required' },
    designation: { required: 'Designation is required' },
    companyaddress: { required: 'Company address is required' },
    pancard: { required: 'Pan card is required' },
    adharcard: {
      required: 'adharcard is required',
    },
  };

  formerrors = {
    firstNameFormCtrl: '',
    lastNameFormCtrl: '',
    phoneNumber: '',
    emailFormCtrl: '',
    otpFormCtrl: '',
    passwordFormCtrl: '',
    confirmPasswordFormCtrl: '',
    cardFormCtrl: '',
    bankNameFormCtrl: '',
    accFormCtrl: '',
    ifscFormCtrl: '',
    address1FormCtrl: '',
    address2FormCtrl: '',
    cityformctrl: '',
    pincodeformctrl: '',
    companyname: '',
    designation: '',
    companyaddress: '',
    pancard: '',
    adharcard: '',
  };

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
    private accountService: AccountServiceService,
    private router: Router
  ) {}

  getOtp() {
    this.email = this.formGroup.get('formArray').value[0].emailFormCtrl;
    this.accountService.getOtp(this.email).subscribe((data) => {
      this.otp = data;
      //console.log(this.otp);
      if (this.otp != 'FAILED') {
        this.otpsent = true;
      } else {
        console.log(this.otp);
      }
    });
    this.formArray.get([0]).disable();
  }

  ngOnInit() {
    this.accountService.getAllBanks().subscribe((data) => {
      this.banks = data;
    });
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: [null, Validators.required],
          lastNameFormCtrl: [null, Validators.required],
          phoneNumber: [
            null,
            [
              Validators.required,
              Validators.pattern('^[0-9]*$'),
              Validators.maxLength(10),
              Validators.minLength(10),
            ],
          ],
          emailFormCtrl: [null, [Validators.required, Validators.email]],
        }),
        this._formBuilder.group({
          otpFormCtrl: [null, [Validators.required, otpVerify.bind(this)]],
        }),
        this._formBuilder.group(
          {
            passwordFormCtrl: [null, [Validators.required]],
            confirmPasswordFormCtrl: [null, Validators.required],
          },
          { validators: checkPasswords }
        ),
        this._formBuilder.group({
          bankNameFormCtrl: [null, Validators.required],
          accFormCtrl: [
            '',
            [Validators.required, Validators.pattern('^[0-9]*$')],
          ],
          ifscFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          address1FormCtrl: ['', Validators.required],
          address2FormCtrl: ['', Validators.required],
          cityformctrl: ['', Validators.required],
          pincodeformctrl: [
            '',
            [Validators.required, Validators.pattern('^[0-9]*$')],
          ],
        }),
        this._formBuilder.group({
          companyname: ['', Validators.required],
          designation: ['', Validators.required],
          companyaddress: ['', Validators.required],
        }),
        this._formBuilder.group({
          pancard: ['', Validators.required],
          adharcard: ['', Validators.required],
          // adharcard: [
          //   '',
          //   [
          //     Validators.required,
          //     Validators.minLength(12),
          //     Validators.maxLength(12),
          //     Validators.pattern('^[0-9]*$'),
          //   ],
          //],
        }),
        this._formBuilder.group({
          cardFormCtrl: [null, Validators.required],
        }),
      ]),
    });

    this.formGroup.valueChanges.subscribe((data) => {
      this.logvalidationErrors(this.formGroup);
    });
  }

  logvalidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logvalidationErrors(abstractControl);
      } else if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls) {
          if (control instanceof FormGroup) {
            this.logvalidationErrors(control);
          }
        }
      } else {
        this.formerrors[key] = '';
        if (!abstractControl.valid && abstractControl.touched) {
          const msgs = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formerrors[key] += msgs[errorKey] + '. ';
            }
          }
        }
      }
    });
  }

  adharfile: File;
  processAdhar(imageInput: any) {
    this.adharfile = imageInput.files[0];
  }

  panfile: File;
  processPan(imageInput: any) {
    this.panfile = imageInput.files[0];
  }

  status: Status;
  register() {
    let fd: FormData = new FormData();
    fd.append('firstname', this.user.firstname);
    fd.append('lastname', this.user.lastname);
    fd.append('password', this.user.password);
    fd.append('email', this.user.email);
    fd.append('phoneNo', this.user.phoneNo);
    fd.append('companyName', this.user.companyName);
    fd.append('companyAddress', this.user.companyAddress);
    fd.append('designation', this.user.designation);
    fd.append('pinCode', this.user.pinCode);
    fd.append('bankId', this.user.bankId.toString());
    fd.append('account_number', this.user.account_number);
    fd.append('ifsc_code', this.user.ifsc_code);
    fd.append('cardTypeId', this.user.cardTypeId.toString());
    fd.append('addressLine1', this.user.addressLine1);
    fd.append('addressLine2', this.user.addressLine2);
    fd.append('city', this.user.city);
    fd.append('panCardImg', this.panfile);
    fd.append('adharCardImg', this.adharfile);

    this.accountService.registerUser(fd).subscribe((data) => {
      this.status = data;
      if (this.status.status == 'SUCCESS') {
        this.router.navigate(['page-content/registerationsuccessfull']);
      }
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
