import { useState } from "react";

interface HeroBackgroundProps {
  videoSrc?: string;
  imageSrc?: string;
  poster?: string; // Video poster/thumbnail
  /**
   * A value between 0 and 1 controlling how dark the overlay is.
   * Higher = darker. Defaults to 0.45.
   */
  overlayOpacity?: number;
  /**
   * Opacity for the decorative pattern overlay (0-1). Defaults to 0.2.
   */
  patternOpacity?: number;
}

const HeroBackground = ({
  videoSrc,
  imageSrc,
  poster,
  overlayOpacity = 0.45,
  patternOpacity = 0.2,
}: HeroBackgroundProps) => {
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // If no video or video failed, use image
  const useImage = !videoSrc || videoError;

  return (
    <>
      {/* Video Background */}
      {videoSrc && !videoError && (
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Image Background Fallback */}
      {useImage && imageSrc && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
      )}

      {/* Dark overlay for better text readability. Controlled by overlayOpacity prop. */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Pattern Overlay (optional decorative layer) */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"
        style={{ opacity: patternOpacity }}
      />
    </>
  );
};

export default HeroBackground;
