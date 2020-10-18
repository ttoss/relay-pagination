import * as React from 'react';

import { Flex, Heading } from 'theme-ui';

const Header = () => (
  <Flex
    as="header"
    sx={{
      backgroundColor: 'background',
      flexDirection: 'column',
      justifyContent: 'center',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'text',
      paddingY: 3,
      marginBottom: 4,
    }}
  >
    <Heading as="h1" sx={{ color: 'text', textAlign: 'center' }}>
      Relay Pagination
    </Heading>
    <Heading as="h2" sx={{ color: 'text', fontSize: 1, textAlign: 'center' }}>
      TTOSS Playground
    </Heading>
  </Flex>
);

export default Header;
