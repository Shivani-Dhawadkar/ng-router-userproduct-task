

export interface Iproduct {
    pname: string;
    pid: number;
    pstatus: Ipstatus
    img : string
}

export type Ipstatus = 'Ready to Dispatch' | 'In-Progress' | 'Dispatched';