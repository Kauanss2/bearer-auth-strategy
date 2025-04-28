export interface User {
    email?: String
    Senha: String
}

export interface ResultVisitor {
    success(user: User): void; 
    failure(message: string, code: number): void; 
    error(error: Error): void; 
  }
  