class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.incrementCounter = this.updateCounter.bind(this, 1);
        this.decrementCounter = this.updateCounter.bind(this, -1);
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <input type='button' value='+' onClick={this.incrementCounter} />
                <input type='button' value='-' onClick={this.decrementCounter} />
            </div>
        );
    }

    updateCounter(count) {
        this.setState({count: this.state.count + count});
    }
}
