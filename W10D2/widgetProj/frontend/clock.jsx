import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          time: new Date()}
        }

    tick () {
       return () => this.setState({time: new Date()})
    }

    // setInterval () {
    //     this.componentDidMount()
    // }


    // this.currTime is a pointer to some value;
    componentDidMount() {
        this.currTime = setInterval(this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.currTime)
    }

    render() {
        return (
            <div>
                <h1>This is the current time:</h1>
                <p>{this.state.time.toTimeString()}</p>
            </div>
        )
    }
};

// class Dog 

//     def initialize(name, breed)
//         @name = name 
//         @breed = breed
//     end

//     def woof 
//         puts "${self.name}"
//     end

// end











export default Clock;