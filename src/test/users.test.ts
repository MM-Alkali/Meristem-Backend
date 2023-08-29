// import { Request, Response } from 'express';
// import request from 'supertest';
// import { app } from '../../src';
// import * as notifications from '../utils/notifications';
// import * as utilities from '../utils/utilities';
// import { User } from '../models/users';
// import bcrypt from 'bcryptjs';
// import supertest from 'supertest';

// jest.mock('../utils/notifications');
// jest.mock('../utils/utilities');
// jest.mock('../models/users', () => ({
//   User: {
//       findOne: jest.fn(),
//   },
// }));

// describe('User Routes', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('should respond with a 200 status code', async () => {
//     const response = await supertest(app).post('/users/create-user').send({
//         email: 'tzirw@example.com',
//         fullName: 'test',
//         phone: '0123456789',
//         password: 'test',
//         role: 'user',
//     });
//     expect(response.statusCode).toBe(200);
//   });

// test('should specify json in the content type header', async () => {
//     const response = await supertest(app).post('/auth/register').send({
//         email: 'tzirw@example.com',
//         fullName: 'test',
//         phone: '0123456789',
//         password: 'test',
//         role: 'user',
//     })
//     expect(response.headers['content-type']).toEqual(
//         expect.stringContaining('json')
//     )
// })

// test('should return 400 status code if user with the same email already exists', async () => {
//   const req: Request = {
//     body: {
//       email: 'test@example.com',
//       fullName: 'John Doe',
//       phone: '1234567890',
//       password: 'password',
//       role: 'user',
//     },
//   };
//   const res: Response = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn(),
//   };

//   (User.findOne as jest.Mock).mockResolvedValueOnce({});

//   await register(req, res);

//   expect(User.findOne).toHaveBeenCalledWith({
//       where: { email: req.body.email },
//   });
//   expect(res.status).toHaveBeenCalledWith(400);
//   expect(res.json).toHaveBeenCalledWith({
//       message: 'User with this email already exists',
//   });
// });

// test('should return 500 status code for internal server error', async () => {
//     const req: Request = {
//       body: {
//         email: 'test@example.com',
//         fullName: 'John Doe',
//         phone: '1234567890',
//         password: 'password',
//         role: 'user',
//       },
//     } as unknown as Request
//     const res: Response = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//     } as unknown as Response

//     (User.findOne as jest.Mock).mockRejectedValueOnce(
//         new Error('Database error')
//     )

//     await register(req, res)

//     expect(User.findOne).toHaveBeenCalledWith({
//         where: { email: req.body.email },
//     })
//     expect(res.status).toHaveBeenCalledWith(500)
//     expect(res.json).toHaveBeenCalledWith({
//         message: 'Internal server error',
//     })
// })

//  test('should make a successful POST request to /auth/register', async () => {
//      const response = await supertest(app).post('/auth/register').send({
//          email: 'test@example.com',
//          fullName: 'John Doe',
//          phone: '1234567890',
//          password: 'password',
//          role: 'user',
//      })

//      expect(response.status).toBe(200)
//      expect(response.body).toEqual({
//          message: 'Name must be 3 or more character',

//      })
//  })

// })
// function register(req: Request, res: Response) {
//   throw new Error('Function not implemented.');
// }
