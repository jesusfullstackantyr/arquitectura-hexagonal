import { Business } from "../domain/entities/business";
import { BussinessRepository } from "../domain/repositories/bussinesRepository";

export class DetailBusinessUseCase {
    constructor(readonly repository:BussinessRepository) {}

    async execute(id:number):Promise<Business | any> {
        try {
            return await this.repository.businessDetail(id);
        }catch(error) {
            throw error;
        }
    }
}