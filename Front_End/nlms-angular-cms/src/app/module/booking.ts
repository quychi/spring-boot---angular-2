import { User } from './user';
import { Car } from './car';
import { Route } from './route';
import { Note } from './note';

export class Booking {
    constructor(
        public id: number,
        public pickupTime: Date,
        public route: Route,
        public car: Car,
        public driver: User,
        public note: Note,
        // public createdByUser: string,        // slider.created_date,slider.last_modified_by,slider.last_modified_date
    )
    {};
}
