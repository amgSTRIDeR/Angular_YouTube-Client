import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { addCustomCard } from 'src/app/redux/actions';
import { Store } from '@ngrx/store';
import { CustomCard } from 'src/app/shared/interfaces/custom-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {}

  adminForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', Validators.maxLength(255)],
    imageLink: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(http(s?):\/\/).+(\.(jpeg|jpg|png|gif))$/),
      ],
    ],
    videoLink: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(http(s?):\/\/).+(\.(mp4|mpeg|avi|mov))$/),
      ],
    ],
    creationDate: ['', [Validators.required, this.dateValidator]],
  });

  dateValidator(control: FormControl): ValidationErrors | null {
    const date = new Date(control.value);
    return date < new Date() ? null : { futureDate: true };
  }

  get title() {
    return this.adminForm.get('title');
  }

  get description() {
    return this.adminForm.get('description');
  }

  get imageLink() {
    return this.adminForm.get('imageLink');
  }

  get videoLink() {
    return this.adminForm.get('videoLink');
  }

  get creationDate() {
    return this.adminForm.get('creationDate');
  }

  createDate(value: string | null | undefined) {
    if (!value) return null;
    return new Date(value).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  onSubmit() {
    const customCard = {
      title: this.adminForm.value.title,
      description: this.adminForm.value.description || '',
      imageLink: this.adminForm.value.imageLink,
      videoLink: this.adminForm.value.videoLink,
      creationDate: this.createDate(`${this.adminForm.value.creationDate}`),
    };

    this.store.dispatch(
      addCustomCard({ customCard: customCard as CustomCard }),
    );

    this.router.navigate(['main/custom-cards']);
  }
}
