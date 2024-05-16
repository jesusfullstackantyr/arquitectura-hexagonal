import { Request, Response } from "express";
import { CreateBusinessUseCase } from "../../application/createBusinessUseCase";

export class CreateBusinessController {

    constructor(public readonly createBusinessUseCase:CreateBusinessUseCase) {}

    async execute(request:Request,response:Response) {
        try {
            let createdBusiness = await this.createBusinessUseCase.execute(request.body);

            return response.status(201).json({
                data:createdBusiness,
                message:"api.business.store"
            });
        }catch(error:any) {
            return response.status(error.HTTP_STATUS ?? 500)
                .json({
                    message:'api.business.store',
                    exception:error
                });
        }
    }

}