let totalSeconds = 10

function counter() {
    console.log('Your OTP will expire in ' + totalSeconds + ' seconds');
    totalSeconds--;
}

let timerId = setInterval(counter, 1000)

setTimeout(() => {
    clearInterval(timerId);
    console.log('Your OTP is expired');
}, 10100)
