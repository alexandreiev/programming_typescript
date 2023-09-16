type User = {
    username: string
}

type Location = {
    city: string
}

type Request = 
    | {entity: 'user', data: User}
    | {entity: 'location', data: Location}

// client.ts
async function get<R extends Request>(entity: R['entity']): Promise<R['data']> {
    let res = await fetch('/api/{$entity}')
    let json = await res.json()
    if (!json) {
        throw ReferenceError('Empty response')
    }
    return json
}

// app.ts
async function startApp() {
    let user = await get('user')    // User
}


export {}