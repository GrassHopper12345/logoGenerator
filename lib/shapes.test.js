const {Circle, Square, Triangle, Rectangle} = require('./shapes')

// Circle
describe('Circle', () => {
    test('renders a circle', () => {
        const shape = new Circle();
        var color = ('red')
        shape.setColors(color);
        expect(shape.render()).toEqual(`<circle cx='150px' cy='110px' r='90' height='100%' width='100%' fill='red'/>`);
    });
});

// Square
describe('Square', () => {
    test('renders a square', () => {
        const shape = new Square();
        var color = 'red';
        shape.setColors(color);
        expect(shape.render()).toEqual(`<rect x='50' height='200' width='200' fill='red'/>`);
    });
});


// Triangle
describe('Triangle', () => {
    test('renders a triangle', () => {
        const shape = new Triangle();
        var color = 'green';
        shape.setColors(color);
        expect(shape.render()).toEqual(`<polygon height='100%' width='100%' points='0,200 300,200 150,0' fill='green'/>`);
    });
});






