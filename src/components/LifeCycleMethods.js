import React, { Component } from 'react';

class LifeCycleMethod extends Component{
    constructor(props){
        super(props) 
            this.state = {
                count:0
            }
        
    }
    componentWillMount(){ //one time--->1st
        console.log('componentWillMount() executed');
    }

    componentDidMount(){ //one time -->2nd
        // document.title = `clicked ${this.state.count} times`
        console.log(' componentDidMount() executed');
    }

    componentDidUpdate(prevProps,prevState){ ///many times -->3rd
        // document.title = `clicked ${this.state.count} times`
        console.log('componentDidUpdate() executed ');
        console.log(prevProps,'prevPropssss');
        console.log(prevState,'prevsatate');

    }
 
    componentWillUnmount(){ ///
        console.log(' componentWillUnmount() executed');
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>
                    click {this.state.count} times
                </button>

            </div>
        );
    }

}

export default LifeCycleMethod;