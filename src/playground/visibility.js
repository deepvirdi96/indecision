let isVisible = false;

const changeVisibility = () => {
    isVisible = !isVisible
    renderVisibilityApp();
}

const renderVisibilityApp = () => {
    const template = (
        <div>
            <h1>Toggle visibility</h1>
            <button onClick={changeVisibility}>{isVisible === false ? 'Show Title' : 'Hide Title'}</button>
            { isVisible === true && <p>This is the hidden tresure</p> }
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'))
}

renderVisibilityApp();

