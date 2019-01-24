import React, {Component} from 'react';
import './MainContainer.scss';
import Menu from "../Menu/Menu";
import Content from "../Content/Content";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeContentId: 0
        };
    }

    onMenuItemClick = (id) => this.setState({activeContentId: id});

    render() {
        return (
            <div id="main">
                <Menu onMenuItemClick={this.onMenuItemClick} activeContentId={this.state.activeContentId}/>
                <Content activeContentId={this.state.activeContentId}/>
            </div>
        );
    }
}

export default MainContainer;