import React from 'react';
import { Icon, IconPaths } from './icons.js';

const facebookLink = ""

const FacebookCard = () => (
    <a className="icon-card twitter" href={facebookLink} rel="noopener noreferrer" target="_blank">
        <Icon
            color="rgb(255, 255, 255)"
            size={40}
            icon={IconPaths.facebook}
            boxStyle="0 0 22 22"
            
        />
    </a>
);

export default FacebookCard;
