import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            hide: false
        }
    }

    onIncrementClick = (e) => {
        this.setState(prevState => {
            const newMyCount = prevState.counter + 1
            const newMyState = {
                counter: newMyCount,
                hide: newMyCount >= 10
            }

            return newMyState;
        })
    }

    render() {
        return (
            <>
                <p>{this.state.counter}</p>
                {this.state.hide ? null : <button onClick={this.onIncrementClick}>Increment</button>}

            </>
        )
    }

}


export default Counter