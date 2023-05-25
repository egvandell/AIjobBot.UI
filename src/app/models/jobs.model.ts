export interface Job {
    jobId: number;
    jobBoardId: number;
    jobName: string | null;
    Location: string | null;
    Company: string | null;
    ShortDesc: string | null;
    URL: string | null;
    Salary: string | null;
    WorkType: string | null;
    Skills: string | null;
    JobDescription: string | null;
    DateTimeFetched: Date;
    AppliedTo: boolean;
    CoverLetter: string | null;
    DateTimeApplied: Date | null;
}
