import { Link as LinkGatsby } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import {
    Box,
    useColorMode,
    Flex,
    Link,
    IconButton,
    Icon,
} from '@chakra-ui/core';
import styled from 'styled-components';

const FirstPart = styled.span`
    font-family: "Georgia, 'Times New Roman', Times, serif'";
`;

const Header = ({ siteTitle }) => {
    const { colorMode } = useColorMode();
    const bgColor = { light: 'teal.500', dark: 'teal.900' };
    return (
        <Box flex="1" p={2} bg={bgColor[colorMode]}>
            <Flex align="center" justify="space-between">
                <Link
                    fontSize={['sm', '2xl']}
                    as={LinkGatsby}
                    to="/"
                    style={{
                        color: `white`,
                    }}
                >
                    <FirstPart>👨 Matthieu Coulon</FirstPart>
                </Link>
                <Flex flexWrap="wrap" justifyContent="flex-end">
                    <span>
                        <Link
                            fontSize={['sm']}
                            as={LinkGatsby}
                            to="/"
                            style={{
                                color: `white`,
                            }}
                            mr={2}
                        >
                            Blog
                        </Link>
                        <Link
                            fontSize={['sm']}
                            as={LinkGatsby}
                            to="/about"
                            style={{
                                color: `white`,
                            }}
                            mr={2}
                        >
                            About
                        </Link>
                    </span>
                    <span>
                        <Link href="https://github.com/MattMattC">
                            <IconButton
                                aria-label="github"
                                icon="github"
                                size="xs"
                                mr={1}
                            />
                        </Link>
                        <ThemeToggle></ThemeToggle>
                    </span>
                </Flex>
            </Flex>
        </Box>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
