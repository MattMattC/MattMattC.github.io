import React from 'react';
import PropTypes from 'prop-types';
import { Badge, useColorMode } from '@chakra-ui/core';

const BadgeByCat = ({ cat }) => {
    const { colorMode } = useColorMode();
    let colorCat = { light: 'blue', dark: 'gray' };

    switch (cat) {
        case 'js':
        case 'javascript':
            colorCat = { light: 'yellow', dark: 'yellow' };
            break;
        case 'photo':
            colorCat = { light: 'red', dark: 'red' };
            break;
        case 'tech':
            colorCat = { light: 'red', dark: 'red' };
            break;
        case 'my-life':
            colorCat = { light: 'red', dark: 'red' };
            break;
    }

    return (
        <Badge mr="1" fontSize="0.6em" variantColor={colorCat[colorMode]}>
            {cat}
        </Badge>
    );
};

BadgeByCat.propTypes = {
    /**
     * Category string
     */
    cat: PropTypes.string.isRequired,
};

export default BadgeByCat;
