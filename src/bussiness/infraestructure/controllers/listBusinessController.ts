import { Request, Response } from "express";
import { ListBusinessUseCase } from "../../application/listBusinessUseCase";
import { paginate } from "../../../responses/paginator";

export class ListBusinessController {

    constructor(public readonly listBusinessUseCase:ListBusinessUseCase) {}

    async execute(request:Request,response:Response) {
        try {
            
            let {pattern,per_page,page}:any|null  = request.query;

            per_page = parseInt(per_page) ?? 10;
            page = parseInt(page) ?? 1;

            const {business,totalRecords} = await this.listBusinessUseCase.execute(pattern ?? '',per_page,page);
            
            let paginatorMetadata:any = paginate(
                per_page,
                page,
                totalRecords
            );

            paginatorMetadata['pattern'] = pattern;

            return response.status(200).json({
                data:business,
                metadata:paginatorMetadata,
                message:"api.business.index"
            });

        }catch(error:any) {
            return response.status(error.HTTP_STATUS ?? 500)
                .json({
                    message:'api.business.index',
                    exception:error
                });
        }
    }

}