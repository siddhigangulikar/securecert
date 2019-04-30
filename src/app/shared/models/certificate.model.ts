import { StudentRecord } from "./studentRecord.model";


export class Certificate {


    public key: number;
    public record: StudentRecord;


    constructor(data: any) {
        this.key = data.Key ? data.Key : null;
        this.record = data.Record ? new StudentRecord(data.Record) : new StudentRecord({});



    }
}
