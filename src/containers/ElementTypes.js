import React from "react";
import PropTypes from 'prop-types';

import compareValues from '../helpers/compareValues';
import ElementType from '../components/ElementType';

const ElementTypes = ({types}) => {
    const typesOrderedBySlot = [...types].sort(compareValues('slot'));
    return typesOrderedBySlot.map((type, index) => <ElementType {...type} key={index} />);
};

ElementTypes.defaultProps = {
    types: [
        {
            type: {
                name: 'unknown',
                slot: 1
            }
        }
    ]
};

ElementTypes.propTypes = {
    //TODO: describe shape better
    types: PropTypes.array
};

export default ElementTypes;
