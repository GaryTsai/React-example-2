import React, {Component} from 'react';

class Button extends Component {

    render() {
        const {
            addComponent,
            removeComponent,
            //remain
            ...attrs
        } = this.props;

        return (
            <div>
                <button {...attrs}  onClick={addComponent}>Add Component</button>
                <button {...attrs}  onClick={removeComponent}>remove Component</button>
            </div>
        );

        // return (
        //     <div>
        //         <button className={this.props.className}
        //                 type={this.props.type} onClick={this.props.addComponent}>Add Component</button>
        //         <button className={this.props.className}
        //                 type={this.props.type} onClick={this.props.removeComponent}>remove Component</button>
        //     </div>
        // );
    }
}

export default Button;