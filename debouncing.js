let counter = 0;

const getData = () => {
    console.log("fetching data", counter++);
}

const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            getData.apply(context, args)
        }, d)
    }
}

const better = debounce(getData, 300);
