export class User {
	constructor(
		public id: number,
		public fullName: string,
		public username: string,
		public email :string,
		public password : string,
		public avatarUrl :string,
		public phone:string
		)
	{};
}
