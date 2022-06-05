type TreeNode = {
    value: string 
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>(
    node: T,
    f: (value: string) => string
): T {
    return {
        ...node,
        value: f(node.value)
    }
}


let a: TreeNode = {value: 'a'}
let b: LeafNode = {value: 'b', isLeaf: true}
let c: InnerNode = {value: 'c', children: [b]}

let a1 = mapNode(a, _ => _.toUpperCase())   // TreeNode
let b1 = mapNode(b, _ => _.toUpperCase())   // LeafNode
let c1 = mapNode(c, _ => _.toUpperCase())   // InnerNode


// Bounded polymorphism with multiple constraings
type HasSlides = {numbersOfSides: number}
type SidesHaveLength = {sideLength: number}

function logPerimeter<
    Shape extends HasSlides & SidesHaveLength
>(s: Shape): Shape {
    console.log(s.numbersOfSides * s.sideLength)
    return s
}


// Using bounded polymorphism to model arity
function call<T extends unknown[], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}

let a2 = call(fill, 10, 'a')         // string[]
let b2 = call(fill, 10)              // Error TS2554: Expected 3 arguments; got 2.
let c2 = call(fill, 10, 'a', 'z')    // Error TS2554: Expected 3 arguments; got 4.

export {}