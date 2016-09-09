import React from "react";
import {Button} from "react-bootstrap";

var Counter = React.createClass({
    render: function(){
        return(
            <div>
                <h2 id="count"></h2>
                <Button onClick={this.count}>This is a button mofo</Button>
            </div>
        );
    },
    getInitialState: function(){
        return {
            count: 0
        };
    },
    count: function(){
        this.setState({
            count: this.state.count + 1
        });
    }
});

export default Counter;