/**
 * Game Layout
 */
export const containerWidthMobile = 288; // px

export const containerWidthDesktop = 464; // px

export const tileCountPerDimension = 4;

/**
 * Animations
 */
export const mergeAnimationDuration = 100; // ms

export const moveAnimationDuration = 150; // ms

/**
 * Game setup
 */
export const gameWinTileValue = Number(process.env.NEXT_PUBLIC_WIN_TILE_VALUE)||2048;

export const gameTileImages: { [key: number]: string } = {
  2: "/tiles/2.jpeg",
  4: "/tiles/4.jpeg",
  8: "/tiles/8.jpeg",
  16: "/tiles/16.jpeg",
  32: "/tiles/32.jpeg",
  64: "/tiles/64.jpeg",
  128: "/tiles/128.jpeg",
  256: "/tiles/256.jpeg",
  512: "/tiles/512.jpeg",
  1024: "/tiles/1024.jpeg",
  2048: "/tiles/2048.jpeg",
};
