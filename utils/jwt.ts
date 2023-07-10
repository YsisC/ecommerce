import  jwt from 'jsonwebtoken';

export const signToken = (_id: string, email: string) => {

    if( ! process.env.JWT_SECRET_SEED) {
        throw new Error("No hay semilla de JWT - Revisar varianle de entorno");
        
    }

    return jwt.sign(
        // payload
        {_id, email},

        // Seed
        process.env.JWT_SECRET_SEED,

        // Opciones
        {expiresIn: '30d' }


    )
}