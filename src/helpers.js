import { darken } from 'polished';

// Gets the background color needed for a button based on the isColor attribute.
export function getBGColor(props) {
  if (props.isColor) return props.theme.colors[props.isColor];
  return props.theme.colors.default;
}

// Gets the border color needed for a button based on the isColor attribute.
export function getBorderColor(props) {
  if (props.isColor !== undefined) return 'transparent';
  return '#bdbdbd';
}

// Darkens the border color for the hover state
export function getBorderHoverColor(color) {
  if (color === '#ffffff') return '#4a4a4a';
  return darken(0.2, color);
}

// Darkens the background for the hover state
export function getHoverColor(color) {
  if (color === '#ffffff') return 'transparent';
  return darken(0.2, color);
}

// Checks for element size based on the isX attribute
export function getSize(props) {
  return props.isSmall ? 'isSmall' : props.isMedium ? 'isMedium' : props.isLarge ? 'isLarge' : false;
}

// Returns the color for the spinner in a Button's isLoading state
export function getSpinnerColor(props) {
  if (props.isColor !== undefined) {
    if (props.isColor === 'warning') {
      return 'rgba(0,0,0,.7)';
    }
    return '#fff';
  }
  return '#dbdbdb';
}

// Changes the text color depending on the isColor attribute
export function getTextColor(props) {
  const isColor = props.isColor;
  if (isColor === 'warning') return 'rgba(0, 0, 0, 0.7)';
  if (isColor === 'danger' ||
    isColor === 'info' ||
    isColor === 'link' ||
    isColor === 'primary' ||
    isColor === 'success') {
      return props.theme.colors.white;
    }
  return '#363636';
}


export default { getBGColor, getBorderColor, getHoverColor, getTextColor };
