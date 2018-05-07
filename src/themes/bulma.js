import { getBGColor, getBorderColor, getBorderHoverColor, getHoverColor, getTextColor } from './../helpers';

const theme = {
  colors: {
    danger: '#ff3860',
    default: '#ffffff',
    info: '#209cee',
    link: '#3273dc',
    primary: '#00d1b2',
    success: '#23d160',
    warning: '#ffdd57',
    white: '#ffffff',
  },
  elements: {
    button(props) {
      return `appearance: none;
      align-items: center;
      background-color: ${getBGColor(props)};
      border: 1px solid transparent;
      border-color: ${getBorderColor(props)};
      border-radius: 3px;
      box-shadow: none;
      box-sizing: border-box;
      color: ${getTextColor(props)};
      display: inline-flex;
      font-size: 1rem;
      height: 2.25em;
      justify-content: flex-start;
      line-height: 1.5;
      margin-left: 5px;
      outline: 0;
      padding-bottom: calc(0.375em - 1px);
      padding-left: calc(0.625em - 1px);
      padding-right: calc(0.625em - 1px);
      padding-top: calc(0.375em - 1px);
      position: relative;
      vertical-align: top;
      -webkit-touch-callout: none;
      user-select: none;
      cursor: pointer;
      justify-content: center;
      padding-left: 0.75em;
      padding-right: 0.75em;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      &:first-child {
        margin-left: 0;
      }
      &:focus,
      &:hover {
        background-color: ${getHoverColor(getBGColor(props))};
        border-color: ${getBorderHoverColor(getBGColor(props))};
      }
      &[disabled] {
        cursor: not-allowed;
        opacity: .5;
      }
      &[disabled]:hover {
        background-color: ${getBGColor(props)};
        border-color: ${getBorderColor(props)};
      }`
    },
  },
};

export default theme;
