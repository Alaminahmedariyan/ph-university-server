import { Response } from "express";

type TResponse <T>= {
    statusCode: number;
    success: boolean;
    message?: string;
    data: T | null;
}
const sendResponse = <T>(res: Response, data:TResponse<T> )=>{
     res.status(data?.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data || null
    });
}

export default sendResponse;