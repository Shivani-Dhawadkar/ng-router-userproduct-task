
export interface Iusers {
    userName: string;
    id: number;
    prodName: string;
    prodStatus: Ipusers
}

export type Ipusers= 'in-progress' |'dispatched'|'Ready to Dispatch';