import {PrismaClient} from 'prisma/prisma-client'

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data:{
            name: 'John doe ',
            email: 'john.doe@gmail.com',
            avatarUrl:'https://github.com/Deazin.png',
        }
    })

    const pool = await prisma.pool.create({
        data:{
            title: 'Example pool',
            code: 'BOL123',
            ownerId: user.id,

            participants:{
                create:{
                    userId: user.id,
                }
            }
        }
    })

    await prisma.game.create({
        data:{
            date: '2022-11-04T10:41:53.201Z',
            firstTeamCountryCode:'DE',
            secondTeamCountryCode:'BR',
        }
    })

    await prisma.game.create({
        data:{
            date: '2022-11-02T12:00:00.201Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode:'AR',

            guesses: {
                create:{
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,

                    participantI: {
                        connect:{
                            userId_poolId:{
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                    }
                }
            }
        }
    })
}

main()