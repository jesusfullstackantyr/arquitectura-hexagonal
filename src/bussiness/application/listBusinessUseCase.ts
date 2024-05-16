import { Business, businessStatus, businessType } from "../domain/entities/business";
import { BussinessRepository } from "../domain/repositories/bussinesRepository";

export class ListBusinessUseCase {
    constructor(public readonly repository:BussinessRepository){}

    async execute(pattern:string,perPage:number,page:number):Promise<Business|any> {
        try {
            let business = await this.repository.businessListing(pattern,perPage,page);

            let totalRecords = await this.repository.getTotalBusiness();

            return {
                business,
                totalRecords
            }
        }catch(error) {
            return error;
        }
    }
}