export class ResponseModel {
    constructor(
        public responseList: any[],
        public responseObject: any,
        public message: string[],
        public code: string,
        public isError: boolean
    ) { }
}