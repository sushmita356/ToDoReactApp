import React from 'react';
import Sidedraw from '../components/Sidedraw/sidedraw';
import Toolbar from '../components/Toolbar/Toolbar';
// import Backdrop from '../components/Backdrop/Backdrop';
 class Home extends React.Component 
{
    state = {
        sidedrwaeropen :false
    }
    drawerTogglleclickHandler = ()=>
    {
        this.setState((prevstate) =>
        {
            return {sidedrwaeropen:!prevstate.sidedrwaeropen}
            
        })
    }
    constructor(props)
    {
        super(props);
        this.state={
            message:"hello"
        }
        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    Clicking = ()=>
    {
      this.setState({
          message:"goodbye"
      })
    }
    //backdropclickhandler  = ()=>
    //{
        //this.setState({sidedrwaeropen:false})
    //}
    render(){
        let sidedrawer;
        // let backdrop;
        if(this.state.sidedrwaeropen)
        {
            sidedrawer=  <Sidedraw/>;
            // backdrop=   <Backdrop/>

        }
        return(
            <div>
                <Toolbar drawerclickhandler={this.drawerTogglleclickHandler} />
                {sidedrawer}
                {/* {backdrop} */}
                <p>{this.state.message}</p>
                <p></p>
            <button onClick={this.Clicking.bind(this)}>click me</button>
            </div>
        );
    }
}
export default Home;
