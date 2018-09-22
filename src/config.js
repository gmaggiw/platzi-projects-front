
class Config {
    constructor(){
        this.api = 'http://localhost:8000';
    }

    static getApi() {
        return this.api;
    }
}

export default Config;