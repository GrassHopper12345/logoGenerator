const {Circle, Square, Triangle, Rectangle} = require('./shapes')

// Circle
describe('Circle', () => {
    test('renders a circle', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect.(shape.render()).toEqual('<circle');
    });
});


// Square



// Triangle



// Rectangle


