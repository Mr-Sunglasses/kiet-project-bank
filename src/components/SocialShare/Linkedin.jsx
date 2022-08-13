import React from 'react';
import { Icon, IconPaths } from './icons.js';

const LinkedinLink = ""

const LinkedinCard = () => (
    <a className="icon-card linkedin" href={LinkedinLink} rel="noopener noreferrer" target="_blank">
        <Icon
            color="rgb(255, 255, 255)"
            size={50}
            icon={IconPaths.linkedin}
            boxStyle="0 0 24 28"
        />
    </a>
);

export default LinkedinCard;
