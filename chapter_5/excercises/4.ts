// 4a. Guarantee at compile time that someone can’t call .send before setting at least
// a URL and a method. Would it be easier to make this guarantee if you also
// force the user to call methods in a specific order? (Hint: what can you return
// instead of this ?)

class RequestBuilder {
    protected data: object | null = null
    protected method: 'get' | 'post' | null = null
    protected url: string | null = null
  
    setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
      return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
    }
    setData(data: object | null): this {
      this.data = data
      return this
    }
  }
  
  class RequestBuilderWithMethod extends RequestBuilder {
    setMethod(method: 'get' | 'post' | null): this {
      this.method = method
      return this
    }
    setURL(url: string): RequestBuilderWithMethodAndURL {
      return new RequestBuilderWithMethodAndURL()
        .setMethod(this.method)
        .setURL(url)
        .setData(this.data)
    }
  }
  
  class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
    setURL(url: string): this {
      this.url = url
      return this
    }
    send() {
      // ...
    }
  }
  
  new RequestBuilder()
    .setMethod('get')
    .setData({})
    .setURL('foo.com')
    .send()


//4b. [Harder] How would you change your design if you wanted to make this
// guarantee, but still let people call methods in any order? (Hint: what Type‐
//     Script feature can you use to make each method’s return type “add” to the
//     this type after each method call?)

interface BuildableRequest {
    data?: object
    method: 'get' | 'post'
    url: string
  }
  
  class RequestBuilder2 {
    data?: object
    method?: 'get' | 'post'
    url?: string
  
    setData(data: object): this & Pick<BuildableRequest, 'data'> {
      return Object.assign(this, {data})
    }
  
    setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
      return Object.assign(this, {method})
    }
  
    setURL(url: string): this & Pick<BuildableRequest, 'url'> {
      return Object.assign(this, {url})
    }
  
    build(this: BuildableRequest) {
      return this
    }
  }
  
  new RequestBuilder2()
    .setData({})
    .setMethod('post') // Try removing me!
    .setURL('bar') // Try removing me!
    .build()


export {}