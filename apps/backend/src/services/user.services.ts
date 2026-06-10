import { NextFunction } from 'express';
import prisma from '../../../../packages/libs/prisma';
import { UserData } from '../interface/auth.interface';
import { ValidationError } from '../../../../packages/error-hamdler';
import {
  checkOtpRestrictions,
  sendOtp,
  trackOtpRequests,
} from '../utils/auth.helper';

export const Registration = async (
  data: Partial<UserData>,
   next: NextFunction,
):Promise<void> => {
  const { email, name } = data;

  if (typeof email !== 'string' || email.trim().length === 0) {
    return next(new ValidationError('Email is required!'));
  }

  const existingUser = await prisma.users.findUnique({ where: { email } });
  if (existingUser) {
    return next(new ValidationError('Email already in use!'));
  }

  await checkOtpRestrictions(email, next);
  await trackOtpRequests(email, next);
  await sendOtp(email, name ?? '', 'user-activation-mail');

};
