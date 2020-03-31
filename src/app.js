class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecesion'
        const subtitle = 'This is the subtitle for the app'
        const options = ['Thing One', 'Thing Two', 'Thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Welcome to the Indecision app</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert(' hi')
    }

    render() {    
        return (
            <div>
                <button onClick={this.handlePick} >What Should I Do ?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('remove all')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll} >Remove All</button>
                <ol>
                    {
                        this.props.options.map((option) => {
                            return <Option key={option} option={option} />
                        })
                    }
                </ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        let option = e.target.elements.option.value.trim()
        if (option) {
            alert('hi');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name='option'></input>
                    <button type='submit'>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))