import { getSize, getSpinnerColor } from './../helpers';
import React from 'react';
import styled, { keyframes, withTheme } from 'styled-components';

class Button extends React.Component {
  render() {
    // Create element
    const BasicButton = styled.button`
      ${this.props.theme.elements.button(this.props)}
    `;
    let StyledButton = BasicButton;

    if (this.props.isSmall || this.props.isMedium || this.props.isLarge) {
      const isSize = getSize(this.props);
      const sizes = {
        isSmall: {
          borderRadius: '2px',
          fontSize: '0.75rem'
        },
        isMedium: {
          fontSize: '1.25rem'
        },
        isLarge: {
          fontSize: '1.5rem'
        },
      };
      StyledButton = StyledButton.extend`
        border-radius: ${sizes[isSize].borderRadius || '3px'};
        font-size: ${sizes[isSize].fontSize};
      `;
    }
    if (this.props.isRounded) {
      StyledButton = StyledButton.extend`
        border-radius: 290486px;
      `;
    }
    if (this.props.isLoading) {
      const spinAround = keyframes`
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }`;

      StyledButton = StyledButton.extend`
        color: transparent !important;
        pointer-events: none;
        &::after {
          animation: ${spinAround} 500ms infinite linear;
          border: 2px solid ${getSpinnerColor(this.props)};
          border-radius: 290486px;
          border-right-color: transparent;
          border-top-color: transparent;
          content: "";
          display: block;
          height: 1em;
          position: relative;
          width: 1em;
          position: absolute;
          left: calc(50% - (1em / 2));
          top: calc(45% - (1em / 2));
          position: absolute !important;
        }
      `;
    }
    if (this.props.href !== undefined) {
      const LinkButton = StyledButton.withComponent('a');
      return (
        <LinkButton {...this.props} />
      )
    }
    return (
      <StyledButton {...this.props} />
    );
  }
}

export default withTheme(Button);
