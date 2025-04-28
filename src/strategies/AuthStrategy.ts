  import { Request} from "express";

interface Credentials {
  token: string;  
}


export interface User {
  token: string; 
}

interface AuthStrategy {
  extract(req: Request): Credentials;
  verify(credentials: Credentials, next: ResultVisitor): void;


}

interface ResultVisitor {
    success(user: User): void; 
    failure(message: string, code: number): void; 
    error(error: Error): void; 
  }
  type AttemptFunction = (credentials: Credentials, next: ResultVisitor) => void;



  export class BearerTokenStrategy implements AuthStrategy {
    constructor(private attempt: AttemptFunction) {}
  
    extract(req: Request): Credentials {
      const authorizationHeader = req.headers["authorization"];
    
      if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return { token: "" };
      }
      const token = authorizationHeader.slice(7); 
      return { token };
    }
    
  
    verify(credentials: Credentials, next: ResultVisitor): void {
      const { token } = credentials;
      
      
      if (!token) {
        return next.failure("Token não fornecido",401);
      }
      
      this.attempt(credentials, next);
    }
  }

const strategyFunction = async (credentials:Credentials, next:ResultVisitor)=>{
  const token = credentials.token;
  const tokenfalso = "1234"

  if(token === tokenfalso){
    return next.success({ token: token });
  }
  
  next.failure("O Token e invalido",401)
  

}

 export const bearerStrategy = new BearerTokenStrategy(strategyFunction) 