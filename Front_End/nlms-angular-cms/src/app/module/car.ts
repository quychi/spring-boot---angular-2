import { User } from './user';
import { Category } from './category';

export class Car {
    constructor(
        public id: number,
		public description: string,
		public imgUrl: string,
        public price: number,
        public pricePerKm: number,
        public category: Category,
        public driver: User,
        public createdByUser: string,        // slider.created_date,slider.last_modified_by,slider.last_modified_date
	)
	{};
}
