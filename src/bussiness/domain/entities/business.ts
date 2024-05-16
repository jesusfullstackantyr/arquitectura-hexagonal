import { IsNotEmpty, IsEmail, validate } from "class-validator";
import { ValidatableEntity } from "../validator/validatable";

enum businessType {
    warehouse = 'bodega',
    busines  = 'punto_venta'
};

enum businessStatus {
    active = 'activo',
    inactive = 'inactivo'
};

class Business implements ValidatableEntity {

   public id?:number;
   
   @IsNotEmpty({message:"El campo titulo es requerido"})
   public title:string;

   @IsNotEmpty({message:"El campo Telefono es requerido"})
   public phone:string;

   @IsNotEmpty({message:"El campo correo electronico es requerido"}) 
   @IsEmail({},{message:"El correo electronico no es valido"})
   public email:string;

   @IsNotEmpty({message:"El campo tipo de sucursal es requerido"})
   public type:businessType;

   public description:string;

   @IsNotEmpty({message:"El campo estatus es requerido"})
   public status:businessStatus;

    constructor(
        title:string,
        phone:string,
        email:string,
        type:businessType,
        description:string,
        status:businessStatus,
        id?:number
    ){
        this.title = title;
        this.phone = phone;
        this.email = email;
        this.type  = type ;
        this.description = description;
        this.status = status;
        this.id = id;
    }

    async validate() {
        return Promise.resolve();
    }
}

export {Business, businessType, businessStatus};