"use strict";

var count = 0;

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Counter : ",
            count
        ),
        React.createElement(
            "button",
            { id: "minus", onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { id: "reset", onClick: reset },
            "reset"
        ),
        React.createElement(
            "button",
            { id: "add", onClick: addOne },
            "+1"
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderCounterApp();
