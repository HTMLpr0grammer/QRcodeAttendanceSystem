// server/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Placeholder for authentication logic
  console.log('Authentication middleware');
  next();
};

export default authMiddleware;
