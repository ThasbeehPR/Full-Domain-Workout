console.log('hi');

setImmediate(() => {
    console.log('Hii');
});

process.nextTick(() => {
    console.log('its nexttick');
});


console.log('end');
