import React from 'react'

// JSX
// <ui class='list'>
//     <li>Homemade granola with yogurt</li>
//     <li>Fantastic french toast with fruit</li>
//     <li>Tortilla Espanola with salad</li>
// </ui>

React.createElement(
    'ul',
    {'class': 'list'},
    React.createElement(
        'li',
        null,
        'Homemade granola with yogurt'
    ),
    React.createElement(
        'li',
        null,
        'fanctastic French toast with fruit'
    ),
    React.createElement(
        'li',
        null,
        'Tortilla Espanola with salad'
    )
)