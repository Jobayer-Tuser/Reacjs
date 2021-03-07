import React, { Component } from 'react';

const MyProps = (props) => {
    console.log('My props - ', props)
    return <h1> Hi I am Jobayer </h1>
}

//export default MyProps;

//passing a function in props

class Child extends Component{
    render(){
        this.props.func(this);
        return <h1>this is child</h1>
    }
}

const ChildComponent = (props) =>{
    <div>
        <h2>This is child component </h2>
        <p>We are learning to pass the child component</p>
        {props.children}
    </div>
}



class PropsPass extends Component{
    getContext(context){
        console.log(context);
    }

    render(){
        //this.getContext(this)

        return(
           <div>
               <h2>Pass function as a props</h2>
                <Child func={this.getContext} />
                <ChildComponent>
                    <h4>this is next component</h4>
                </ChildComponent>
           </div> 
        );
    }
}

export default PropsPass;