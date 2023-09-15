import { fork } from "child_process";

let child = fork('./dist/chapter_8/inNodeJS/childThread.js')

child.on('message', data =>
    console.info('Child process sent a message', data)
)

child.send({type: 'syn', data: [3]})