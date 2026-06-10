import { NextFunction , Request , Response } from "express";
import { Registration } from "../services/user.services";
import { validateRegistrationData } from "../utils/auth.helper";

export const userRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validateRegistrationData(req.body , "user");
    await Registration(req.body, next);
    res.status(200).json({ message: "OTP sent to email if it exists in our system" });
  } catch (error) {
    next(error);
  }
}
