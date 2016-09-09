import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, IndexRoute} from "react-router";
import {Jumbotron, ButtonGroup, Button} from "react-bootstrap";

import Counter from "./counter.jsx";

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Jumbotron>
                    <h1>TREVOR PROJECTS</h1>
                    <ButtonGroup>
                        <Link to="/counter"><Button>Counter</Button></Link>
                    </ButtonGroup>
                </Jumbotron>
                <div id="subContent">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="counter" component={Counter} />
        </Route>
    </Router>,
    document.querySelector("#container")
);