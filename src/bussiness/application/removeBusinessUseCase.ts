import { Business } from "../domain/entities/business";
import { BussinessRepository } from "../domain/repositories/bussinesRepository";

export class RemoveBusinessUseCase {
    constructor(readonly repository:BussinessRepository) {}

    async execute(id:number):Promise<any> {
        try {

            let business:Business|any = await this.repository.businessDetail(id);

            return await this.repository.bussinessDelete(business.id);

        }catch(error) {
            throw error;
        }
    }
}