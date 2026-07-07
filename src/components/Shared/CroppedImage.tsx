import type { CSSProperties } from 'react';

export interface CropRect {
  /** inner <img> position/size as % of the container, matching Figma export values */
  top: string;
  left: string;
  width: string;
  height: string;
}

interface CroppedImageProps {
  src: string;
  alt?: string;
  /** Fixed container width (px or any CSS length). Omit when using aspectRatio. */
  width?: number | string;
  /** Fixed container height. Omit when using aspectRatio. */
  height?: number | string;
  /** e.g. "1440 / 100" — used instead of an explicit height. */
  aspectRatio?: string;
  inner: CropRect;
  radius?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  style?: CSSProperties;
}

/**
 * Faithfully reproduces a Figma image crop: an overflow-hidden container with an
 * absolutely-positioned inner <img> sized/offset by the exact percentages Figma
 * emitted. This crops sprite sheets pixel-for-pixel without re-slicing assets.
 */
export default function CroppedImage({
  src,
  alt = '',
  width,
  height,
  aspectRatio,
  inner,
  radius,
  className,
  loading = 'lazy',
  style,
}: CroppedImageProps) {
  const toLen = (v?: number | string) =>
    typeof v === 'number' ? `${v}px` : v;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: toLen(width),
        height: aspectRatio ? undefined : toLen(height),
        aspectRatio,
        borderRadius: radius,
        pointerEvents: 'none',
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={{
          position: 'absolute',
          top: inner.top,
          left: inner.left,
          width: inner.width,
          height: inner.height,
          maxWidth: 'none',
          display: 'block',
        }}
      />
    </div>
  );
}
