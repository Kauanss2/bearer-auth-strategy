import { Router } from 'express';
import { prisma } from '../libs/prisma';
import { bearerStrategy } from '../strategies/AuthStrategy';


const mainRouter = Router();

mainRouter.get("/testar", (req, res, next) => {
    const credentials = bearerStrategy.extract(req);
  
    bearerStrategy.verify(credentials, {
      success: (user) => {
        res.status(200).json({ message: "Autenticado com sucesso",});
      },
      failure: (message, code) => {
        res.status(code).json({ error: message });
      },
      error: (error) => {
        res.status(500).json({ error: error.message });
      },
    });
  });
export default mainRouter;
