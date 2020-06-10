export class Booking {
    constructor(
        public id: number,
        // public createdBy: string,
        // public createdDate: string,
        // public lastModifiedBy: string,
        // public lastModifiedDate: string,
        public pickupTime: string,
        public idRoute: number,
        public idCar: number,
        public idNote: number,
		)
	{};
}
