import React from "react";

//TODO: import element type specific styles directly here (and move to CSS modules?)

const ElementType = (props) => {
    return <div className={`type ${props.type.name}`}>{props.type.name}</div>
};

ElementType.defaultProps = {
    type: {
        name: 'unknown',
        slot: 1
    }
};

export default ElementType;

