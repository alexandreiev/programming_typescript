import { type } from "os"

type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            } []
        }
    }
}

function getAPIResponse(): Promise<APIResponse> | null {
    return null
}

function renderFriendList(friendList: unknown) {

}

let response = await getAPIResponse()
renderFriendList(response?.user.friendList)


type FriendList = {
    count: number
    friends: {
        firstname: string
        lastName: string
    }[]
}

type APIResponse2 = {
    user: {
        userId: string
        friendList: FriendList
    }
}


function renderFriendList2(friendList: FriendList) {

}


type FriendList2 = APIResponse['user']['friendList']

function renderFriendList3(friendList: FriendList2) {

}

type Friend = FriendList2['friends'][number]



// The keyof operator
type ResponseKeys = keyof APIResponse   // 'user'
type UserKeys = keyof APIResponse['user']   // 'userId' | 'friendList'
type FriendListKeys = keyof APIResponse['user']['friendList']   // 'count' | 'friends'

function get<O extends object, K extends keyof O> (
    o: O,
    k: K
) : O[K] {
    return o[k]
}

type ActivityLog = {
    lastEvent: Date
    events: {
        id: string
        timestamp: Date
        type: 'Read' | 'Write'
    }[]
}

let activityLog: ActivityLog = {
    lastEvent: new Date(Date.now()),
    events: [
        {
            id: 'someId', 
            timestamp: new Date(Date.now()), 
            type: 'Read'
        }
    ]
}

let lastEvent = get(activityLog, 'lastEvent')   // Date


type Get = {
    <O extends object, K1 extends keyof O> (o: O, k1: K1) : O[K1] 
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]> (o: O, k1: K1, k2: K2) : O[K1][K2] 
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2]> 
        (o: O, k1: K1, k2: K2, k3:K3) : O[K1][K2][K3] 
} 

let get2: Get = (object: any, ...keys: string[]) => {
    let result = object
    keys.forEach(k => result = result[k])
    return result
}

get2(activityLog, 'events', 0, 'type')   // 'Read' | 'Write'

// get2(activityLog, 'bad')    // Error TS2345: Argument of type '"bad"' is not assignable 
                            // to parameter of type 'keyof ActivityLog'.


export{}