import { it, describe, expect } from 'vitest'
import request from 'supertest'
import app from '../../../src/app.js'

describe('POST /auth/register', () => {
    describe('given all fields', () => {
        it('should return the 201 status code', async () => {
            const userData = {
                firstName: 'vikram',
                lastName: 'soni',
                email: 'jays8174@gmail.com',
                password: '1234567',
            }
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            expect(response.statusCode).toBe(201)
        })

        it('should return valid json response', async () => {
            const userData = {
                firstName: 'vikram',
                lastName: 'soni',
                email: 'jays8174@gmail.com',
                password: '1234567',
            }
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            )
        })
        // it('should persist the user in the database', async () => {
        //     const userData = {
        //         firstName: 'vikram',
        //         lastName: 'soni',
        //         email: 'jays8174@gmail.com',
        //         password: '1234567',
        //     }
        //     const response = await request(app)
        //         .post('/auth/register')
        //         .send(userData)
        // })
    })
    describe('fields are missing')
})
