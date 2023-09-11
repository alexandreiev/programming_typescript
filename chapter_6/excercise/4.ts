// Rewrite the example (from “Definite Assignment Assertions” on page 151) to
// avoid the definite assignment assertion.

let globalCache = {
    get(key: string) {
      return 'user'
    }
  }

function fetchUser() {
  return globalCache.get('userId')
}

let userId = fetchUser()
userId.toUpperCase()


export {}