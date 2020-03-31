const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderIndecisionApp()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderIndecisionApp()
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length)
    const randOption = app.options[randNum]
    alert(randOption)
}

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} id="make-decesion" onClick={onMakeDecision}> What to do? </button>
            <button id="remove-all-options" onClick={onRemoveAll}>Remove All</button>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'));
}

renderIndecisionApp()