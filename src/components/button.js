import React, {Component} from 'react';

class Button extends Component {

    render() {
        const {
            addComponent,
            removeComponent,
            ...props
        } = this.props;

        return (
            <div>
                <button {...props} onClick={addComponent}>Add Component</button>
                <button {...props}  onClick={removeComponent}>remove Component</button>
            </div>
        );
    }
}

export default Button;