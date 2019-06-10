import React, {Component} from 'react';

class Comp extends Component {


    render() {
        return (
            <div {...this.props}>
                {this.props.text}{this.props.id}
            </div>
        );
    }
}

export default Comp;