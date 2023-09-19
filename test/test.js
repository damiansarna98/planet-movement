// Basic test setup with Jest-like syntax
function expect(value) {
    return {
        toBe: (expected) => {
            if (value !== expected) {
                throw new Error(`Expected ${value} to be ${expected}`);
            }
        }
    };
}

function it(description, testFunction) {
    try {
        testFunction();
        console.log(`✔️ Passed: ${description}`);
    } catch (error) {
        console.error(`❌ Failed: ${description}`);
        console.error(error);
    }
}

// Example test for our planets
it('should create two planet elements', () => {
    document.body.innerHTML = `
        <div id="planet1" class="planet"></div>
        <div id="planet2" class="planet"></div>
    `;

    expect(document.querySelectorAll('.planet').length).toBe(2);
});