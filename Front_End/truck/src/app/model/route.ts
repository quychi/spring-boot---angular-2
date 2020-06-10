import { Car } from './car';

export class Route {
    constructor(
        public id: number,
        public startPoint: string,
        public startDate: string,
        public endPoint: string
		)
	{}; 
}
