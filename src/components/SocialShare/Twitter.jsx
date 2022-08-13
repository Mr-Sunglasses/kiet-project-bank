import React from 'react';
import { Icon, IconPaths } from './icons.js';

const twitterLink = ""

const TwitterCard = () => (
    <a className="icon-card twitter" href={twitterLink} rel="noopener noreferrer" target="_blank">
        <Icon
            color="rgb(255, 255, 255)"
            size={40}
            icon={IconPaths.twitter}
            boxStyle="0 0 22 22"
        />
    </a>
);

export default TwitterCard;
