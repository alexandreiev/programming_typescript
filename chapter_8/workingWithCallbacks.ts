import * as fs from 'fs'

// read data from an Apache server's access log
fs.readFile(
    'var/log/apache2/access_log',
    {encoding: 'utf8'},
    (error, data) => {
        if (error) {
            console.error('error reading!', error)
            return
        } 
        console.info('success reading!', data)
    }    
)

fs.appendFile(
    'var/log/apache2/access_log',
    'New access log entry',
    error => {
        if (error) {
            console.error('error writing!', error)
        }
    }
)

// 
// async1((err1, res1) => {
//     if (res1) {
//         async2(res1, (err2, res2) => {
//             if (res2) {
//                 async3(res2, (err3, res3) => {
//                     // ...
//                 })
//             }
//         })
//     }
// })