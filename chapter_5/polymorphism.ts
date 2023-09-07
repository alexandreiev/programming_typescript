class MyMap<K, V> {
    constructor(initialKey: K, initialValue: V) {}

    get(key: K) : V | null {
        return null
    }

    set(key: K, value: V) {}

    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> | null {
        return null
    }

    static of<K, V>(k: K, v: V): MyMap<K, V> | null {
        return null
    }

}

interface IMyMap<K, V> {
    get(key: K): V
    set(key: K, value: V): void
}

let a = new MyMap<string, number>('k', 1)   // MyMap<string, number>
let b = new MyMap('k',true) // MyMap<string, boolean>

a.get('k')
b.set('k', false)


export {}
