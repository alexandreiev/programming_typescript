type O = {a: {b: {c: string}}}

type a = keyof O                // type a = "a"
type b = keyof O['a']['b']      // ype b = "c"