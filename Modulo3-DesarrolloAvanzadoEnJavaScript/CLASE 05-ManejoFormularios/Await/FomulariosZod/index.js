import {z} from 'zod'
const schema = z.object({
    nombre: z.string(),
    edad: z.number().min(3).max(100),
    correo: z.string().email(),
    activo: z.boolean(),

    caracteres: z.string().min(3).max(10).optional(),
    alphanumeric: z.string().regex(/^[a-zA-Z0-9]+$/).optional(),
});
