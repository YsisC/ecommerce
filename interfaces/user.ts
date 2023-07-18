export interface  IUser {
    _id:string;
    name: string;
    email:string;
    password?:string;
    role: string;
    // address?: string; // Agregar esta propiedad
   
    createdAt?: string;
    updatedAt?: string;
}