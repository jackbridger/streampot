import { FfmpegActionsRequestType } from "./transformations";

export type JobEntityId = number

export enum JobStatus {
    Pending = 'pending',
    Completed = 'completed',
    Failed = 'failed',
    Uploading = 'uploading'
}

export enum Transformation {
    Actions = 'action'
}

type PayloadFields =
    | { type: Transformation.Actions, payload: FfmpegActionsRequestType }

export type UnsavedJobEntity = PayloadFields & {
    user_id: string,
    status: JobStatus,
    output_url?: string,
}

export type JobEntity = UnsavedJobEntity & {
    id: JobEntityId,
    created_at: Date,
    completed_at?: Date
}