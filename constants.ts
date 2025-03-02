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
export const gameWinTileValue = process.env.NEXT_PUBLIC_WIN_TILE_VALUE || 2048;

export const gameTileImages: { [key: number]: string } = {
  2: "/tiles/2.png",
  4: "/tiles/4.png",
  8: "/tiles/8.png",
  16: "/tiles/16.png",
  32: "/tiles/32.png",
  64: "/tiles/64.png",
  128: "/tiles/128.png",
  256: "/tiles/256.png",
  512: "/tiles/512.png",
  1024: "/tiles/1024.png",
  2048: "/tiles/2048.png",
};
