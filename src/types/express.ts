export interface customJwtPayload {
    colorFavorito: string,
    id: number,
    email: string,
    role: string
}
declare global {
    namespace Express {
        interface Request {
            user: customJwtPayload
        }
    }
}