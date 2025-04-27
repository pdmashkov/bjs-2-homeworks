//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    return (...args) => {
        const hash = md5(args);

        let findHash = cache.find((item) => item.hash === hash);
        if (findHash) {
            return "Из кеша: " + findHash['value'];
        }

        let result = func(...args);
        cache.push({
            "hash": hash,
            "value": result
        });

        if (cache.length > 5) {
            cache.shift();
        }

        return "Вычисляем: " + result;
    }
}

//Задача № 2 
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let isTrottled = false;

    function wrapper(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(args);
            wrapper.count++;
        }, delay);
        if (!isTrottled) {
            func(...args);
            wrapper.count++;
            isTrottled = true;
        }
        wrapper.allCount++;
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}
