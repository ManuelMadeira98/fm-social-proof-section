import { Component, Input } from '@angular/core';
import { Testimony } from '../app.component';

@Component({
	selector: 'app-testimony-card',
	templateUrl: './testimony-card.component.html',
	styleUrls: ['./testimony-card.component.scss'],
})
export class TestimonyCardComponent {
	@Input() testimony!: Testimony;
}
