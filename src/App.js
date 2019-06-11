import React, {Component} from 'react';
import Comp from './components/comp.js'
import Button from './components/button.js'

import './style/sample2.css';

// default list data
const components=[{
    text:'Component ',
    id:0,
},{
    text:'Component ',
    id:1,
},{
    text:'Component ',
    id:2,
},{
    text:'Component ',
    id:3,
}];

class App extends Component {
    constructor(props){
        super(props);
        //Create components object store component
        this.state={
            components:components,
        };
        //Bind this
        this.addComponent = this.addComponent.bind(this);
        this.removeComponent = this.removeComponent.bind(this);
    }

    //When click addComponent, components add a new component
    addComponent(){
        //New component data
        const newComponent={
            text:'New Component ',
            //If components length < 0, assign 0 to id
            id:this.state.components.length < 0 ? 0:this.state.components.length
        };
        //Update components, add new component
        this.setState(state => ({
            components: state.components.concat(newComponent),
        }));
    }
    //When click removeComponent, components remove
    removeComponent(){
        //If components.length = 0, do nothing
        if(!this.state.components.length){
            return
        }
        //Get all of component expect last one and insert them to component
        this.setState(state => ({
            components: state.components.slice(0, state.components.length - 1),
        }));
    }

    render() {
        return (
            <div className="Frame-style" >
                {/*//(1)*/}
                {/*<div >*/}
                {/*  <button className="Btn-style" type="button" onClick={this.addComponent}>Add Component</button>*/}
                {/*  <button className="Btn-style" type="button" onClick={this.removeComponent}>Remove Component</button>*/}
                {/*</div>*/}
                {/*(2)*/}
                <Button
                    className="Btn-style"
                    type="button"
                    addComponent={this.addComponent} removeComponent={this.removeComponent}
                />
                <div>
                    <br/>
                    {this.state.components.map((component) =>
                    <Comp  className="Component-style" key={component.id}  id={component.id} text={component.text}/>
                    )}
                </div>
            </div>
        );
    }
}

export default App;