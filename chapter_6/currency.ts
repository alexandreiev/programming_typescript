type Currency = {
    unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
    value: number
}

let Currency = {
    DEFAULT: 'USD',
    from(value: number, unit: 'EUR' | 'GBP' | 'JPY' | 'USD' = 'USD'): Currency {
        return {unit, value}
    }
}

export {Currency}