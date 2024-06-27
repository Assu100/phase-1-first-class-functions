function receivesAFunction(callback) {
    
    return callback();

}

function returnsANamedFunction() {
    return function namedFuntion(){
        return "This function does not take an argument"
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return "This returns an anonymous function";
    }
}

receivesAFunction(function() {
    return 'call a function';
});

returnsANamedFunction();

returnsAnAnonymousFunction();
