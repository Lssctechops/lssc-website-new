"use client";
import Lottie from "lottie-react";

const LottiePlayer = ({
  animationData,
  loop = false,
  autoplay = true,
  className,
  style,
  speed = 1,
  rendererSettings,
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={style}
      speed={speed}
      rendererSettings={rendererSettings}
    />
  );
};

export default LottiePlayer;
