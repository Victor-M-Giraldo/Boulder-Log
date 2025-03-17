export interface ValidationErrorField {
    type: string;
    msg: string;
    path: string;
    location: string;
    value?: string;
}

export interface ValidationErrorResponse {
    type: string;
    message: string;
    errors: ValidationErrorField[];
}
