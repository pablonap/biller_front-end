import { Area } from '../area/area';

export class ServiceBudget {
    id: number;
    code: string;
    name: string;
    detail: string;
    price: number;
    optional: boolean;
    area: Area;
}