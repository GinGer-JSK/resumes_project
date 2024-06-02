import express from 'express';
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';
import { prisma } from '../utils/prisma.util.js';

const resumesRouter = express.Router();

// 이력서 생성
resumesRouter.post('/', async (req, res, next) => {
  try {
    return res.statu();
  } catch (error) {
    next(error);
  }
});

export { resumesRouter };
