'use strict';

// get test and write on it
var text = ENV;
document.getElementById('test').innerHTML = "It's working from " + text + "!"
// check if HMR is enabled
if (module.hot) {
    // accept itself
    module.hot.accept();
}
