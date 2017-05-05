import { BikeComment } from './bike-comment.model';

export class Bike{
	id: number;
	num: string;
	pwd: string;
	last_time: Date;
	last_lacation: number[];
	other_pwd?: string[];
	comment: BikeComment[];
}
