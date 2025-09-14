import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <h2>Reactive Form Example</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input formControlName="name">
      </label>
      @if (form.controls.name.invalid && form.controls.name.touched) {
        <div>Name is required (min 3 chars).</div>
      }

      <label>
        Email:
        <input formControlName="email">
      </label>
      @if (form.controls.name.invalid && form.controls.name.touched) {
        <div>Enter a valid email.</div>
      }

      <button type="submit" [disabled]="form.invalid">Submit</button>
    </form>

    <pre>{{ form.value | json }}</pre>
  `,
})
export class FormComponent {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value, null, 2));
    }
  }
}
