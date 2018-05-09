import React from 'react';
import styled, { withTheme } from 'styled-components';

class Level extends React.Component {
  render() {
    // Create element
    const StyledLabel = styled.div`
      ${this.props.theme.layout.level()}
    `;

    return (
      <StyledLabel {...this.props} />
    )
  }
}

export default withTheme(Level);
