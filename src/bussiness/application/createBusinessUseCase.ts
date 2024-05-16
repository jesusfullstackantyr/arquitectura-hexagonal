import { Business, businessStatus, businessType } from "../domain/entities/business";
import { BussinessRepository } from "../domain/repositories/bussinesRepository";
import { Validator } from "../domain/validator/businessValidator";

export class CreateBusinessUseCase {
    constructor(public readonly repository:BussinessRepository){}

    async execute({title,phone,email, description,status,is_store}:any):Promise<Business|any> {
        const newBussiness = new Business(
            title,
            phone,
            email,
            is_store ? businessType.warehouse : businessType.busines,
            description,
            status ? businessStatus.active : businessStatus.inactive
        );

        let businessValidate = new Validator<Business>(newBussiness);

        await businessValidate.invalidIfHasErrors();

        const createBusiness = await this.repository.createBusiness(newBussiness);

        return createBusiness;
    }
}