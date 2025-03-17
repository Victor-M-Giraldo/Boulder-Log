import { ApiError } from "./ApiError";
import { ValidationErrorField, ValidationErrorResponse } from "../types/errors";

export class ValidationError extends ApiError {
    type: string;
    errors: ValidationErrorField[];

    constructor(errorResponse: ValidationErrorResponse) {
        super(400, errorResponse.message);
        this.name = "ValidationError";
        this.type = errorResponse.type;
        this.errors = errorResponse.errors;
    }
}
