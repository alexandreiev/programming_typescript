// import { error } from "console";

// function getUser() {
//     geitUserID(18)
//         .then(user => getLocation(user))
//         .then(location => console.info('got location', location))
//         .catch(error = console.error(error))
//         .finally(() => console.info('done getting location'))
// }

// async function getUser2() {
//     try {
//         let user = await getUserID(18)
//         let location = await getLocation(user)
//         console.info('got location', user)
//     } catch(error) {
//         console.error(error)
//     } finally {
//         console.info('done getting location')
//     }
// }