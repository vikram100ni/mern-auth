import 'reflect-metadata'
import { AppDataSource } from './config/data-source.js'
import { User } from './entity/User.js'

AppDataSource.initialize()
    .then(async () => {
        const user = new User()
        user.firstName = 'Rakesh'
        user.lastName = 'Soni'
        user.age = 25

        await AppDataSource.manager.save(user)
        console.log('Saved a new user with id: ', user.id)

        const users = await AppDataSource.manager.find(User)
        console.log('Loaded users: ', users)
    })
    .catch((error: unknown) => {
        console.error('Error during Data Source initialization:', error)
    })
