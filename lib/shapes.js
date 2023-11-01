class Shapes {
    constructor() {
        this.colors = ''

    }
    setColors(colors) {
        this.colors = (colors);
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height='100%' width='100%' points='0,100 100,100 100,0' fill='${this.colors}'>`
    }
}
class Square extends Shapes {
    render() {
        return `<rect x='50' height='200' width='200' fill='${this.colors}'>`
    }
}
class Circle extends Shapes {
    render() {
        return `<circle cx='50%' cy='50%' r='100' height='100%' width='100%' fill='${this.colors}'>`
    }
}
module.exports = { Square, Circle, Triangle };