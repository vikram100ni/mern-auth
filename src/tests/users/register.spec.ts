import { it, describe, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'
import app from '../../../src/app.js'
import { AppDataSource } from '../../config/data-source.js'
import { truncateTables } from '../utils/index.js'
import { User } from '../../entity/User.js'

describe('POST /auth/register', () => {
    beforeAll(async () => {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize()
        }
    })

    beforeEach(async () => {
        await truncateTables(AppDataSource)
    })

    afterAll(async () => {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy()
        }
    })

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

        it('should persist the user in the database', async () => {
            const userData = {
                firstName: 'vikram',
                lastName: 'soni',
                email: 'jays8174@gmail.com',
                password: '1234567',
            }

            await request(app).post('/auth/register').send(userData)

            const userRepository = AppDataSource.getRepository(User)
            const users = await userRepository.find()

            expect(users).toHaveLength(1)
        })
    })
})
