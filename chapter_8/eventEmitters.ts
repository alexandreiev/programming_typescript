// import Redis from 'redis'

interface Emmiter {
    // send an event
    emit(channel: string, value: unknown): void

    // do something when an event is sent
    on(channel: string, f: (value: unknown) => void): void
}

// create a new instance of a Redis client
// let client = redis.createClient()

// Listen for a few events emmited by the Client
// client.on('ready', () => console.info('Client is ready'))
// client.on('error', e => console.error('An error occurred!', e))
// client.on('reconnecting', params => console.info('Reconnecting...', params))

type RedisClient = {
    on(event: 'ready', f: () => void): void
    on(event: 'error', f: (e: Error) => void) : void
    on(event: 'reconnecting', 
        f: (params: {attemt: number, delay: number}) => void
        ): void
}

// let client1: RedisClient = {
//     on('ready', () => console.info('Client is ready'))
//     on('error', e => console.error('An error occurred!', e))
//     on('reconnecting', params => console.info('Reconnecting...', params))
// }

type Events = {
    ready: void
    error: Error
    reconnecting: {attempt: number, delay: number}
}

type RedisClient2 = {
    on <E extends keyof Events>(
        event: E, 
        f: (arg: Events[E]) => void
        ): void
    emit<E extends keyof Events> (
        event: E,
        arg: Events[E]
    ): void
}