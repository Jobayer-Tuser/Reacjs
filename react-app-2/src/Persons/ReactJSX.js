import React, {Component, Fragment} from 'react';


class ReactJsx extends Component{

    render(){

        /*when we are returning something we must have parent <div> 
            or in some case if we need 1 or more parent <div> then we can use the fragment 
            or there will some case like we can't use <div> or we don't need to use 
                <div> then we have to use a dummy tag <fragment> 
            1.first import the Fragment [ import fragment from 'react' ]
            2.fragment have 3 systax = {
                a.<React.Fragment></React.Fragment>
                b.<Fragment></Fragment>
                c.<></>
            }

        */
        //we can make a object and assign it in the tag attribute
        const obj = {
            title: "new title",
            id: "newId",
            className: "className",
            name: "your_name"
        }
        
        //we can also make a variable of ta statement
        const bio = (
                <div>
                    <h3>Hi My Name is Jobayer</h3>
                    <p>I am learning jsx in react</p>
                </div>
        );
        return(
            <Fragment>
                <div className="Test">
                    <h1 {...obj}>Hellow There</h1>
                    <p>Paragraph</p>
                </div>

                <div className="Test">
                    <h1>Hellow There</h1>
                    <p>Paragraph</p>
                </div>

                <div className="Test">
                    <h1>Hellow There</h1>
                    <p>Paragraph</p>
                </div>
                {bio}

            </Fragment>
            
        );

        /*return  React.createElement('div', {className: "test"},
                    React.createElement('div',{className: "test2"},
                        React.createElement('div', {id: 'unique-id', className: "unique-class"},
                            React.createElement('h1', {className: "h1", id: "test-id"}, "hi There"
                            ) 
                        )
                    )
                );
        return  React.createElement('div', {className: "test-jsx"},
                    React.createElement('section', {className: "section-class", id:"section", name:"section"}, [
                        React.createElement('div', {className: 'abc', id:"abc", name: "abc"},[
                            React.createElement("h1", {className:"h1", name: "h1", id: "h1"}, "This is jsx H1"),
                            React.createElement('p', {className: "paragrap", name: "paragrap"}, "this is a paragraph")

                        ]
                        
                        ),
                    ])
        
                )*/
    }
}

export default ReactJsx;