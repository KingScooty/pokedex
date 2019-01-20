import React from "react";

const ElementType = (props) => {
    return <div className={`type ${props.type.name}`}>{props.type.name}</div>
};

export default ElementType;

