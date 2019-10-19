import React from 'react';
import styled, {
  withTheme
} from 'styled-components';

const SiteLayout = styled.div `
  color: ${props => props.theme.primary};
  width: 100%;
  justify-content: center;
  display: grid;

`;

const Layout = (props) => {
  return ( <SiteLayout > {
      props.children
    } </SiteLayout>
  );
}

export default withTheme(Layout);