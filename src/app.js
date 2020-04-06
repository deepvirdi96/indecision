class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: [],
            title: 'Indecesion',
            subtitle: 'This is the subtitle for the app'
        }
    }

    /**
     * Delete all the options from the options array
     */
    handleDeleteAllOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to the list';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item already exists';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
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
    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                >
                    What Should I Do ?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteAllOptions} >Remove All</button>
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
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    /**
     * Handle the add option on click event
     * @param {Event} e Event to get the target value
     */
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState((prevState) => {
            return {
                error
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name='option'></input>
                    <button type='submit'>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))