export class StudentRecord {
    public collegeName: string;
    public prNo: number;
    public branch: number;
    public firstName: string;
    public secondName: string;
    public surname: string;
    public emailId: string;
    public mobileNumber: string;
    public yearOfAdmission: number;

    constructor(data: any) {
        this.collegeName = data.College_Name ? data.College_Name : null;
        this.prNo = data.PR_no ? data.PR_no : null;
        this.branch = data.branch ? data.branch : null;
        this.firstName = data.First_Name ? data.First_Name : null;
        this.secondName = data.Second_Name ? data.Second_Name : null;
        this.surname = data.surname ? data.surname : null;
        this.emailId = data.emailId ? data.emailId : null;
        this.mobileNumber = data.mobileNumber ? data.mobileNumber : null;
        this.yearOfAdmission = data.Year_Of_Admission ? data.Year_Of_Admission : null;
    }
}