import express, { Router } from 'express';
import { userRegistration } from '../controller/user.controller';

const router : Router = express.Router();
router.post(
	'/user-registration',
	/*
		#swagger.description = 'Register a new user and send an OTP email'
		#swagger.parameters['body'] = {
			in: 'body',
			required: true,
			schema: {
				type: 'object',
				required: ['name', 'email'],
				properties: {
					name: {
						type: 'string',
						example: 'John Doe'
					},
					email: {
						type: 'string',
						example: 'john@example.com'
					}
				}
			}
		}
		#swagger.responses[200] = {
			description: 'OTP sent to email if it exists in our system',
			schema: {
				type: 'object',
				properties: {
					message: {
						type: 'string',
						example: 'OTP sent to email if it exists in our system'
					}
				}
			}
		}
	*/
	userRegistration,
);

export default router;
