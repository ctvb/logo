class Circle {
    constructor(){
        this.cE = "";
    }
    setColor(value){
        this.cE = value;
    }

    render(){return `<circle cx="150" cy="100" r="80" fill="${this.cE}" />`}
}

class Triangle {
    constructor(){
        this.tE = "";
    }
    setColor(value){
        this.tE = value;
    }

    render(){return `<polygon points="150, 18 244, 182 56, 182" fill="${this.tE}" />`}
}

class Square {
    constructor(){
        this.sE = "";
    }
    setColor(value){
        this.sE = value;
    }

    render(){return `<rect x="90" y="40" width="120" height="120" fill="${this.sE}" />`}
}

module.exports = {Circle, Triangle, Square};