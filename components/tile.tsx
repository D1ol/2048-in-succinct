import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  containerWidthDesktop,
  containerWidthMobile,
  gameTileImages,
  mergeAnimationDuration,
  tileCountPerDimension,
} from "@/constants";
import { Tile as TileProps } from "@/models/tile";
import styles from "@/styles/tile.module.css";
import usePreviousProps from "@/hooks/use-previous-props";
import Image from "next/image";

export default function Tile({ position, value }: TileProps) {
  const isWideScreen = useMediaQuery({ minWidth: 512 });
  const containerWidth = isWideScreen
    ? containerWidthDesktop
    : containerWidthMobile;

  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  const positionToPixels = (position: number) =>
    (position / tileCountPerDimension) * containerWidth;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), mergeAnimationDuration);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
    transform: `scale(${scale})`,
    zIndex: value,
  };

  const tileImage = gameTileImages[value];

  return (
    <div
      className={`${styles.tile} ${styles[`tile${value}`]}`}
      style={style}
      aria-label={`TileName ${value}`}
    >
      {tileImage ? (
        <Image
          src={tileImage}
          alt={`Tile ${value}`}
          priority
          className={styles.tileImage}
          layout="fill"
        />
      ) : (
        value
      )}
      <div className={styles.tileOverlay}>{value}</div>
    </div>
  );
}
