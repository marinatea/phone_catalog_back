import { BaseError, DatabaseError, UniqueConstraintError, ValidationError } from 'sequelize';

import { Response } from 'express';

export function handleErrors(res: Response, error: any) {
  if (error instanceof ValidationError) {
    return res.status(400).json({ errType: 'validation', msg: error.message });
  } else if (error instanceof UniqueConstraintError) {
    return res.status(409).json({ errType: 'constraint', msg: error.message });
  } else if (error instanceof DatabaseError) {
    return res.status(500).json({ errType: 'database', msg: error.message });
  } else if (error instanceof BaseError) {
    return res.status(500).json({ errType: 'base', msg: error.message });
  } else {
    return res.status(500).json({ errType: 'misc', msg: error.message });
  }
}
