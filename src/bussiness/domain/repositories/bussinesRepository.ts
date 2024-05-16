import { Business } from "../entities/business";

export interface BussinessRepository{
    getTotalBusiness():Promise<any>;
    businessListing(pattern:string,perPage:number,page:number):Promise<Business[] | null>;
    createBusiness(validatedBusinessData:Business):Promise<Business | null>;
    businessDetail(id:number):Promise<Business | null>;
    businessUpdate(id:number):Promise<Business | null>;
    bussinessDelete(id:number):Promise<void>;
}