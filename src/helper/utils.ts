export function shufflePost(array: any[], shouldShuffle?: boolean) {
  if (!shouldShuffle) return array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//snippet to capitalize first letter of a text
export const FormatText = (text: string) => {
  if (!text) return '';
  return text.replace(/(^|\s)\S/g, (letter: string) => letter?.toUpperCase());
};

export function lightenColor(hex: string, factor: number = 0.2): string {
  // Remove the # if present
  hex = hex.replace(/^#/, '');

  // Handle both 3-digit and 6-digit hex codes
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');
  }

  // Validate hex format
  if (!/^[0-9A-F]{6}$/i.test(hex)) {
    throw new Error('Invalid hex color format');
  }

  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Lighten by increasing each RGB component
  const lighten = (color: number) => {
    return Math.min(255, Math.round(color + (255 - color) * factor));
  };

  // Apply lightening to each channel
  const newR = lighten(r);
  const newG = lighten(g);
  const newB = lighten(b);

  // Convert back to hex
  const toHex = (color: number) => {
    const hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  //return a lighter version of that color based on the factor
  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`.toUpperCase();
}

export const formatNumber = (num: number, precision = 1): string => {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find(x => Math.abs(num) >= x.threshold);
  if (found) {
    const value = num / found.threshold;
    const formatted =
      value % 1 === 0 // Check if the number is an integer
        ? value.toFixed(0) // No decimals for whole numbers
        : value.toFixed(precision); // Keep decimals for non-round numbers
    return formatted + found.suffix;
  }

  return num.toString();
};
