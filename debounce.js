const button = document.querySelector('input')

function payMoney() {
    console.log('已剁');
    console.log(this);
}

function debounce(func, delay) {
    let timer
    return function () {
        let context = this
        clearTimeout(timer)
        timer = setTimeout(
            function () {
                func.call(context)
                console.log(context);
            }, delay
        )
    }
}

button.addEventListener('click', debounce(payMoney, 1000))
// button.addEventListener('click', payMoney)