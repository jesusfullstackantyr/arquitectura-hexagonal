import { Business } from "../../domain/entities/business";
import { BussinessRepository } from "../../domain/repositories/bussinesRepository";

export class MysqlBusinessRepository implements BussinessRepository {
    
    getTotalBusiness(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    businessListing(pattern:string,per_page: number, page: number): Promise<Business[] | null> {
        throw({
            HTTP_STATUS:422,
            validations:{}
        });
    }
    createBusiness(): Promise<Business | null> {
        throw new Error("Method not implemented.");
    }
    businessDetail(id: number): Promise<Business | null> {
        throw new Error("Method not implemented.");
    }
    businessUpdate(id: number): Promise<Business | null> {
        throw new Error("Method not implemented.");
    }
    bussinessDelete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}