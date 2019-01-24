import React, {Component} from 'react';
import './Menu.scss';
import Pages from '../Content/PagesIndex';

class Menu extends Component {
    render() {
        const {onMenuItemClick, activeContentId} = this.props;
        const itemsArray = Pages.map((item, i) => {
            return <li key={i} className={activeContentId === i ? 'active item' : 'item'}
                       onClick={() => onMenuItemClick(i)}>
                Content {i}
            </li>
        });
        return (
            <div id="menu">
                <ul>
                    {itemsArray}
                </ul>
            </div>
        );
    }
}

export default Menu;