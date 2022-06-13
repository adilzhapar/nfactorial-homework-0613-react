import React from 'react';  
import LogoComponent from '../../hashtag';
import './styles.css'
import { format} from 'date-fns'



const Header = () => {
    const date = format(new Date(), 'dd.MM.yyyy HH:mm');

    return (
        <div className="header">
            <div className="logo"><LogoComponent/></div>
            <input className="inp" type="text"></input>
            <div className="date"><h2>{date}</h2></div>
        </div>

    );
}

export default Header;