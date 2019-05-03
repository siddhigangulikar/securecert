import { StudentRecord } from "./studentRecord.model";


export class Certificate {


    public prNo: string;
    public studentName: string;
    public collegeName: string;
    public seatNo: string;
    public examination: string;
    public yearOfPassing: string;
    public sub: string;

    public key: number;
    public record: StudentRecord;


    constructor(data: any) {
        this.key = data.Key ? data.Key : null;
        this.record = data.Record ? new StudentRecord(data.Record) : new StudentRecord({});



        this.prNo = data.PR_no ? data.PR_no : null;
        this.studentName = data.Student_Name ? data.Student_Name : null;
        this.collegeName = data.College_Name ? data.College_Name : null;
        this.seatNo = data.Seat_no ? data.Seat_no : null;
        this.examination = data.Examination ? data.Examination : null;
        this.yearOfPassing = data.Year_Of_Passing ? data.Year_Of_Passing : null;
        this.sub = data.Sub ? data.Sub : null;

    }
}
