import { query } from "../../../databases/sqlite";
import { IF_NOT_FOUND_EXCEPTION_THROW } from "../../../responses/customExceptions";
import { Business,businessStatus } from "../../domain/entities/business";
import { BussinessRepository } from "../../domain/repositories/bussinesRepository";


export class SqliteBusinessRepository implements BussinessRepository {

    async getTotalBusiness(): Promise<any> {
        const sql = "SELECT count(*) as total FROM business where status = ?";
        let [result] = await query(sql,[businessStatus.active],'all');
        return result?.total;
    }
    async businessListing(pattern:string,perPage: number, page: number): Promise<any | null> {
        let sql = "SELECT id,title,phone,email,type,description,status FROM business where title like ? AND status = ? ORDER BY id DESC LIMIT ? OFFSET ?";
        
        const offset = (page - 1) * perPage;
        const searcheable = `%${pattern}%`;

        const params = [searcheable,businessStatus.active,perPage,offset];

        let results = await query(sql,params,'all');
        
        return results.map((result:any) => {
            return new Business(
                result.title,
                result.phone,
                result.email,
                result.type,
                result.description,
                result.status,
                result.id
            );
        });
    }
    async createBusiness(newBussiness:Business): Promise<Business | null> {
        try {
            const {title,phone,email,type,description,status} = newBussiness;

            const insertedValues = [title,phone,email,type,description,status];

            let sql = "INSERT INTO business(title, phone, email, type, description, status) VALUES (?, ?, ?, ?, ?, ?)";

            let result = await query(sql,insertedValues,'run');
            
            newBussiness.id = result.lastID;

            return newBussiness;
        }catch(error) {
            throw error;
        }
    }
    async businessDetail(businessId: number): Promise<Business | any> {
        try {
            let sql = "SELECT id,title,phone,email,description,type,status FROM business WHERE id = ? and status = ?";
            let params = [businessId,businessStatus.active];
            let result = await query(sql,params,'get');

            IF_NOT_FOUND_EXCEPTION_THROW(result,"La sucursal no ha sido encontrada");

            const {title,phone,email,type,description,status,id} = result;

            return new Business(title,phone,email,type,description,status,id);
        
        }catch(error) {
            throw error;
        }
        
    }
    businessUpdate(id: number): Promise<Business | null> {
        throw new Error("Method not implemented.");
    }
    async bussinessDelete(id: number): Promise<void> {
        const sql = "UPDATE business set status = ? WHERE id = ?";
        const params = [businessStatus.inactive,id];
        const result = await query(sql,params,'run');
        return result;
    }
}