function throttleFunction(originalFunction, interval) {
    let lastExecutionTime = 0;
    return function(...params) {
        const currentTime = new Date().getTime();
        if (currentTime - lastExecutionTime >= interval) {
            lastExecutionTime = currentTime;
            return originalFunction.apply(this, params);
        }
    };
}

const throttledLog = throttleFunction(() => console.log('Function called'), 2000);
window.addEventListener('resize', throttledLog);
