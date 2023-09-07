class RequestBuilder {
    private data: object | null = null
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setData(data: object | null) {
        this.data = data
        return this
    }

    setMethod(method: 'get' | 'post' | null) {
        this.method = method
        return this
    }

    setURL(url: string): this {
        this.url = url
        return this
    }

    send() {
        
    }

}


new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({firstName: 'Anna'})
    .send()