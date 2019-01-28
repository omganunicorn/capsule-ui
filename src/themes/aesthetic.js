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
  globals() {
    return injectGlobal`
    /*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 100%;
      font-weight: normal;
    }

    ul {
      list-style: none;
    }

    button,
    input,
    select,
    textarea {
      margin: 0;
    }

    html {
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    img,
    audio,
    video {
      height: auto;
      max-width: 100%;
    }

    iframe {
      border: 0;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    td,
    th {
      padding: 0;
      text-align: left;
    }

    html {
      background-color: white;
      font-size: 16px;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      min-width: 300px;
      overflow-x: hidden;
      overflow-y: scroll;
      text-rendering: optimizeLegibility;
      -webkit-text-size-adjust: 100%;
         -moz-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
              text-size-adjust: 100%;
    }

    article,
    aside,
    figure,
    footer,
    header,
    hgroup,
    section {
      display: block;
    }

    body,
    button,
    input,
    select,
    textarea {
      font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    code,
    pre {
      -moz-osx-font-smoothing: auto;
      -webkit-font-smoothing: auto;
      font-family: monospace;
    }

    body {
      color: #4a4a4a;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    }

    a {
      color: #3273dc;
      cursor: pointer;
      text-decoration: none;
    }

    a strong {
      color: currentColor;
    }

    a:hover {
      color: #363636;
    }

    code {
      background-color: whitesmoke;
      color: #ff3860;
      font-size: 0.875em;
      font-weight: normal;
      padding: 0.25em 0.5em 0.25em;
    }

    hr {
      background-color: whitesmoke;
      border: none;
      display: block;
      height: 2px;
      margin: 1.5rem 0;
    }

    img {
      height: auto;
      max-width: 100%;
    }

    input[type="checkbox"],
    input[type="radio"] {
      vertical-align: baseline;
    }

    small {
      font-size: 0.875em;
    }

    span {
      font-style: inherit;
      font-weight: inherit;
    }

    strong {
      color: #363636;
      font-weight: 700;
    }

    pre {
      -webkit-overflow-scrolling: touch;
      background-color: whitesmoke;
      color: #4a4a4a;
      font-size: 0.875em;
      overflow-x: auto;
      padding: 1.25rem 1.5rem;
      white-space: pre;
      word-wrap: normal;
    }

    pre code {
      background-color: transparent;
      color: currentColor;
      font-size: 1em;
      padding: 0;
    }

    table td,
    table th {
      text-align: left;
      vertical-align: top;
    }

    table th {
      color: #363636;
    }
    `
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
  layout: {
    container() {
      return `
      margin: 0 auto;
      position: relative;
      @media screen and (min-width: 1088px) {
        max-width: 960px;
        width: 960px;
        &.is-fluid {
          margin-left: 64px;
          margin-right: 64px;
          max-width: none;
          width: auto;
        }
      }
      @media screen and (max-width: 1279px) {
        &.is-widescreen {
          max-width: 1152px;
          width: auto;
        }
      }
      @media screen and (max-width: 1471px) {
        &.is-fullhd {
          max-width: 1344px;
          width: auto;
        }
      }
      @media screen and (min-width: 1280px) {
        max-width: 1152px;
        width: 1152px;
      }
      @media screen and (min-width: 1472px) {
        max-width: 1344px;
        width: 1344px;
      }
      `
    },
    level() {
      return `
      align-items: center;
      justify-content: space-between;
      &code {
        border-radius: 4px;
      }
      &img {
        display: inline-block;
        vertical-align: top;
      }
      &.is-mobile {
        display: flex;
      }
      &.is-mobile .level-left,
      &.is-mobile .level-right {
        display: flex;
      }
      &.is-mobile .level-left + .level-right {
        margin-top: 0;
      }
      &.is-mobile .level-item {
        margin-right: 0.75rem;
      }
      &.is-mobile .level-item:not(:last-child) {
        margin-bottom: 0;
      }
      &.is-mobile .level-item:not(.is-narrow) {
        flex-grow: 1;
      }
      @media screen and (min-width: 769px), print {
        display: flex;
        & > .level-item:not(.is-narrow) {
          flex-grow: 1;
        }
      }`;
    }
  },
};

export default theme;
