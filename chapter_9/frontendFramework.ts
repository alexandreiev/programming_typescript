// read properties from the global window object
let model = {
    url: window.location.href
}

// create an <input /> element
let input  = document.createElement('input')

// give it some CSS classes
input.classList.add('Input', 'URLInput')

// when the user types, update the model
input.addEventListener('change', () => 
    model.url = input.value.toUpperCase()
)

// inject the <input /> into the DOM
document.body.appendChild(input)

// document.querySelector('.Element').innerHTML    // Error TS2531: Object is possibly 'null'.

export {}
