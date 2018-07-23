export class Reimbursement {
    id: number;
    amount: number;
    submitted: Date;
    resolved: Date;
    reciept: string;
    author: number;
    resolver: number;
    type: number;
    status: number;
}