import React, { Component } from 'react';
import {
    minutesToSeconds,
    secondsToMilliseconds,
} from '../helpers/time';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalTime: minutesToSeconds(25),
            time: minutesToSeconds(25),
            timeElapsed: 0,
        };

        // Binds
        this.handleStart = this.handleStart.bind(this);
    }

    handleStart() {
        setInterval(
            () => { 
                this.setState({'timeElapsed': this.state.timeElapsed + 1});
                console.log(this.state.timeElapsed);
                this.setState({'totalTime': this.state.time - this.state.timeElapsed});
            },
            secondsToMilliseconds(1)
        );
    }

    handleStop() {
        console.log('Stop');
    }

    render() {
        return (
            <div>
                <h1>{this.state.totalTime}</h1>
                <button onClick={this.handleStart}>Começar</button>
                <button onClick={this.handleStop}>parar</button>
            </div>
        );
    }
}
