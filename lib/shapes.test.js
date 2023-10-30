const {Circle, Square, Triangle, Rectangle} = require('./shapes')

// Circle
describe('Circle', () => {
    test('renders a circle', () => {
        const shape = new Circle();
        var color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" height="100%" width="100%" fill="${color}" />`);
    });
});

// Square
describe('Square', () => {
    test('renders a square', () => {
        const shape = new Square();
        var color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect cx="50%" height="200" width="200" fill="${color}" />`);
    });
});


// Triangle
describe('Triangle', () => {
    test('renders a triangle', () => {
        const shape = new Triangle();
        var color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon  height="100%" width="100%" points="0,200" fill="${color}" />`);
    });
});






