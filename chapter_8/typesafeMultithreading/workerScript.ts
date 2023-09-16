// onmessage = e => {
//     console.log(e.data)             // logs out 'some data'
//     postMessage("${e.data}")
// }

import { threadId } from "worker_threads"
import { SafeEmitter } from "./SafeEmitter.js"

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]


type Command = 
    | {type: 'sendMessageToThread', data: [ThreadID, Message]}
    | {type: 'createThread', data: [Participants]}
    | {type: 'addUserToThread', data: [ThreadID, UserID]}
    | {type: 'removeUserrFromThread', data: [ThreadID, UserID]}

    
type Commands = {
    sendMessageToThread: [ThreadID, Message]
    createThread: [Participants]
    addUserToThread: [ThreadID, UserID]
    removeUserFromThread: [ThreadID, UserID]   
}

// onmessage = e => processCommandFromMainThread(e.data)

function processCommandFromMainThread(
    command: Command
) {
    switch (command.type) {
        case "sendMessageToThread":
            let [threadID, message] = command.data
            console.log(message)
        case "createThread":
            let participants = command.data
            console.log(participants)
        case "addUserToThread":
            let [threadID2, userID] = command.data
            console.log(userID)
        case "removeUserrFromThread":
            let [threadID3, userID3] = command.data
            console.log(userID)
    }
}

type Events = {
    receivedMessage: [ThreadID, UserID, Message]
    createdThread: [ThreadID, Participants]
    addedUserToThread: [ThreadID, UserID]
    removedUserFromThread: [ThreadID, UserID]
}

// listen for events coming from the main thread
let commandEmitter = new SafeEmitter<Commands>()

// emit events back to the main thread
let eventEmitter = new SafeEmitter<Events>()

// wrap incoming commands from the main thread
// using our tyoesafe event emitter
onmessage = command => commandEmitter.emit(command.data.type, ...command.data.data)

// listen for events issued by the worker, and send them to the main thread
eventEmitter.on('receivedMessage', data => 
    postMessage({type: 'receivedMessage', data}))

eventEmitter.on('createdThread', data => 
postMessage({type: 'createdThread', data}))

// etc.

// respond to a sendMessageToThread command from the main thread
commandEmitter.on('sendMessageToThread', (threadId, message) => 
    console.log('OK, I will send a message to threadID ${threadID}')    
)

// send an event back to the main thread
eventEmitter.emit('createdThread', 123, [456, 789])

export {}
