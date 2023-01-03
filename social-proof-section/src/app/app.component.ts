import { Component } from '@angular/core';

export interface Rating {
	rating: number;
	reviewer: string;
}

export interface Testimony {
	avatar: string;
	name: string;
	testimony: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	ratings: Rating[] = [
		{ rating: 5, reviewer: 'Reviews' },
		{ rating: 5, reviewer: 'Report Guru' },
		{ rating: 5, reviewer: 'BestTech' },
	];

	testimonies: Testimony[] = [
		{
			avatar: '/assets/image-colton.jpg',
			name: 'Colton Smith',
			testimony:
				'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
		},
		{
			avatar: '/assets/image-irene.jpg',
			name: 'Irene Roberts',
			testimony:
				'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
		},
		{
			avatar: '/assets/image-anne.jpg',
			name: 'Anne Wallace',
			testimony:
				'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
		},
	];
}
