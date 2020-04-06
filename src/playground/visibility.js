class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            isVisible: false
        }
    }

    changeVisibility() {
        this.setState((prevState) => {
            return {
                isVisible : !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Toggle visibility</h1>
                <button onClick={this.changeVisibility}>{this.state.isVisible ? 'Hide Title' : 'Show Title'}</button>
                {this.state.isVisible === true && <p>This is the hidden tresure</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));