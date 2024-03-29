import { rejects } from "assert"
import { resolve } from "path"

type Matrix = number[][]

type MatrixProtocol = {
    determinant: {
        in: [Matrix]
        out: number
    }
    'dot-product': {
        in: [Matrix, Matrix]
        out: Matrix
    }
    invert: {
        in: [Matrix]
        out: Matrix
    }
}

type Protocol = {
    [command: string]: {
        in: unknown[]
        out: unknown
    }
}

function createProtocol<P extends Protocol>(script: string) {
    return <K extends keyof P>(command: K) => {
        return (...args: P[K]['in']) =>
            new Promise<P[K]['out']>((resolve, rejects) => {
                let worker = new Worker(script)
                worker.onerror = rejects
                worker.onmessage = event => resolve(event.data.data)
                worker.postMessage({command, args})
        })
    }
}


let runWithMatrixProtocol = createProtocol<MatrixProtocol>('MatrixWorkerScript.js')
let parallelDeterminant = runWithMatrixProtocol('determinant')

parallelDeterminant([[1,2], [3,4]])
    .then(determinant => console.log(determinant))  // -2