import { Request, Response } from "express";
import { RemoveBusinessUseCase } from "../../application/removeBusinessUseCase";

export class RemoveBusinessController {
    constructor(readonly removeBusinessUseCase:RemoveBusinessUseCase) {}

    async execute(request:Request,response:Response) {
        try {
            const {id}:any = request.params;
            
            await this.removeBusinessUseCase.execute(id);

            return response.status(200).json({
                message:"api.business.delete"
            });

        }catch(error:any) {
            return response.status(error.HTTP_STATUS ?? 500)
                .json({
                    message:'api.business.delete',
                    error:error
                });
        }
    }
}