import { getBGColor, getBorderColor, getGlobal, getBorderHoverColor, getHoverColor, getTextColor } from './../helpers';
import { injectGlobal } from 'styled-components';

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
      return `
      appearance: none;
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
