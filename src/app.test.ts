import { describe, it, expect } from 'vitest'
import { add } from './utils.js'
import request from 'supertest'
import app from '../src/app.js'

describe('math utils', () => {
    it('should add three numbers', () => {
        expect(add(2, 3, 2)).toBe(7)
    })

    it('should return 200 status code', async () => {
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })
})
