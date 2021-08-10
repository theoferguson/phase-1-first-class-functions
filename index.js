function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    const namedFun = function() {
        return "hi"
    };
    return namedFun;
}

function returnsAnAnonymousFunction() {
    return (function() {'hello'});
}