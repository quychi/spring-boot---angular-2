import { Category } from './category';
import { Route } from './route';

export class Car {
    constructor(
        public id: number,
        // public createdBy: string,
        // public createdDate: string,
        // public lastModifiedBy: string,
        // public lastModifiedDate: string,
        public imgUrl: string,
        public price: number,
        public rate: number,
        public status: string,
        public pricePerKm: string,
        public description: string,
        public totalRate: number,
        public category: Category,
        // public listRoute: Route[]
        public routeId: number
		)
	{};
}
