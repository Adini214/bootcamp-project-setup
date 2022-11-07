import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from '../js/rectangle';

test('should calculate rectangle perimeter', () => {
    const outputPerimeter = getRectanglePerimeter(5,6);
    expect(outputPerimeter).toBe(22);
});

test('should calculate rectangle area', () => {
    const outputArea = getRectangleArea(7,9);
    expect(outputArea).toBe(63);
});

test('should calculate and display rectangle info', () => {
    const outputInfo = getRectangleInfo(4,5);
    expect(outputInfo).toBe(console.log(`The perimeter of a rectangle is ${18} and the area is ${20}`));
});

test('value is positive?', () => {
    const outputPositive = getRectanglePerimeter(4,2);
    expect(outputPositive).toBeGreaterThan(0);

});

test('is a value?',() => {
    const outputValue = getRectangleArea(4,8);
    expect(outputValue).toBeTruthy();
});
