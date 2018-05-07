import { getBGColor, getBorderColor, getHoverColor, getTextColor } from './../helpers';
import { mix } from 'polished';

const theme = {
  colors: {
    danger: mix(0.4, 'rgb(192,192,192)', '#ff3860'),
    default: 'rgb(192,192,192)',
    info: mix(0.4, 'rgb(192,192,192)', '#209cee'),
    link: mix(0.4, 'rgb(192,192,192)', '#3273dc'),
    primary: mix(0.4, 'rgb(192,192,192)', '#008080'),
    success: mix(0.4, 'rgb(192,192,192)', '#23d160'),
    warning: mix(0.4, 'rgb(192,192,192)', '#ffdd57'),
    white: '#ffffff',
  },
  elements: {
    button(props) {
      return `appearance: none;
      align-items: center;
      background-color: ${getBGColor(props)};
      border-radius: 0 !important;
      box-shadow: -1px -1px 0 1px #fff, 1px 1px 0 1px #000;  
      border-top: 2px solid rgb(211,211,211);
      border-left: 2px solid rgb(211,211,211);
      border-right: 2px solid rgb(128,128,128);
      border-bottom: 2px solid rgb(128,128,128);
      box-sizing: border-box;
      color: ${getTextColor(props)};
      display: inline-flex;
      font-size: 1rem;
      height: 2.25em;
      justify-content: flex-start;
      justify-content: center;
      line-height: 1.5;
      margin-left: 5px;
      padding: 0 6px;
      position: relative;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      user-select: none;
      vertical-align: top;
      white-space: nowrap;
      -webkit-touch-callout: none;
      &:first-child {
        margin-left: 0;
      }
      &:focus,
      &:hover {
        background-color: ${getHoverColor(getBGColor(props))};
      }`
    },
  },
};

export default theme;
