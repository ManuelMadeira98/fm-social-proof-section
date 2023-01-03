import { Component, Input, OnChanges } from '@angular/core';
import { Rating } from '../app.component';

@Component({
	selector: 'app-rating-card',
	templateUrl: './rating-card.component.html',
	styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent implements OnChanges {
	@Input() rating!: Rating;

	starsCounter = [];

	ngOnChanges(): void {
		if (this.rating) {
			this.starsCounter.length = this.rating.rating;
		}
	}
}
