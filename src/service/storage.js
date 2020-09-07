

class Storage {

    jsonParse = (data) =>{
        if(!data) return {}
        return JSON.parse(data)
    }

    get = (name) => {
        return this.jsonParse(window.localStorage.getItem(name))

    }
    set = (name, data) => {
        return  window.localStorage.setItem(name, JSON.stringify(data))
    }
 }

 const storage = new Storage()

export default storage
