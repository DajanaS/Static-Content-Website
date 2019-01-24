import React, {Component} from 'react';
import './Content.scss';
import Pages from './PagesIndex';

class Content extends Component {

    render() {
        const {activeContentId} = this.props;
        const MenuItemContent = Pages[activeContentId];
        return (
            <div id="content">
                <MenuItemContent/>
            </div>
        );
    }
}

export default Content;