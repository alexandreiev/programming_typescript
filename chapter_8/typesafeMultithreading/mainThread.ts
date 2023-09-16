import { threadId } from "worker_threads"
import { SafeEmitter } from "./SafeEmitter.js"

let worker = new Worker('workerScript.js')
// worker.onmessage = e => {
//     console.log(e.data) // logs out 'Ack: "some data"'
// }
// worker.postMessage('some data')

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]

type Commands = {
    sendMessageToThread: [ThreadID, Message]
    createThread: [Participants]
    addUserToThread: [ThreadID, UserID]
    removeUserFromThread: [ThreadID, UserID]   
}

type Events = {
    receivedMessage: [ThreadID, UserID, Message]
    createdThread: [ThreadID, Participants]
    addedUserToThread: [ThreadID, UserID]
    removedUserFromThread: [ThreadID, UserID]
}

let commandEmitter = new SafeEmitter<Commands>()
let eventEmitter = new SafeEmitter<Events>()

// listen for events coming from our worker,
// and re-emit them using our typesafe event emitter
worker.onmessage = event =>
    eventEmitter.emit(
        event.data.type,
        ...event.data.data
    )

// listen for commands issues by this thread, and send them to our worker
commandEmitter.on('sendMessageToThread', data => 
    worker.postMessage({type: 'sendMessageToThread', data}))
commandEmitter.on('createThread', data => 
    worker.postMessage({type: 'createThread', data}))

// etc.

// do something when the worker tells us a new thread was created
eventEmitter.on('createdThread', (threadId, participants) =>
    console.log('Created a new chat thread!', threadId, participants)
)

// send a command to our worker
commandEmitter.emit('createThread', [123, 456])

export {}