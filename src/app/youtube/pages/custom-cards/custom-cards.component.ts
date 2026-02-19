import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCard } from 'src/app/shared/interfaces/custom-card.interface';
import { selectCustomItems } from 'src/app/redux/selectors';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';

@Component({
  selector: 'app-custom-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.scss'],
})
export default class CustomCardsComponent {
  customItems: CustomCard[] = [];

  constructor(private store: Store<State>) {
    this.store.select(selectCustomItems).subscribe((items) => {
      this.customItems = items;
    });
  }
}
