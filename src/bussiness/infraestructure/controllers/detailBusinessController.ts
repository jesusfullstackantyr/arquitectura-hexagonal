import { Request, Response } from "express";
import { CreateBusinessUseCase } from "../../application/createBusinessUseCase";
import { DetailBusinessUseCase } from "../../application/detailBusinessUseCase";

export class DetailBusinessController {

    constructor(public readonly detailBusinessUseCase:DetailBusinessUseCase) {}

    async execute(request:Request,response:Response) {
        try {
            const {id}:any = request.params;
            
            let business = await this.detailBusinessUseCase.execute(id);

            return response.status(201).json({
                data:business,
                message:"api.business.show"
            });
        }catch(error:any) {
            return response.status(error.HTTP_STATUS ?? 500)
                .json({
                    message:'api.business.show',
                    exception:error
                });
        }
    }

}