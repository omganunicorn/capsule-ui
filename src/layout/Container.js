import React from 'react';
import styled, { withTheme } from 'styled-components';

class Container extends React.Component {
  render() {
    // Create element
    const StyledContainer = styled.div`
      ${this.props.theme.layout.container(this.props)}
    `;

    return (
      <StyledContainer {...this.props} />
    )
  }
}

export default withTheme(Container);
