export interface Job {
    jobId: number;
    jobBoardId: number;
    jobName: string | null;
    location: string | null;
    company: string | null;
    shortDesc: string | null;
    url: string | null;
    salary: string | null;
    workType: string | null;
    skills: string | null;
    jobDescription: string | null;
    dateTimeFetched: Date;
    appliedTo: boolean;
    coverLetter: string | null;
    dateTimeApplied: Date | null;
    ignore: boolean;
}
