const sequence = new Promise(res => {
    let count = 1;
    setInterval(() => {
        res(count++)
    })
});

sequence.then(res => console.log(res)) 
sequence.then(res => console.log(res))