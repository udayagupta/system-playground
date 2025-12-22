import { motion } from "motion/react";

const ProgressBar = ({ className, max, current, barColor, barShadowColor, label, width }) => {
  // take care of the applied effects from player context and provide the feedback on the health bar
  const fullWidth = 42;
  const percent = current / max;
  const pixelFill = percent * fullWidth;
  // burn: #fa6a0a, #f9a31b
  // poison: #59c135, #14a02e
  // health: #b4202a, #73172d,
  // exp: #f9a31b, #fa6a0a

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 -0.5 48 8" shape-rendering="crispEdges">
      <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
      <path stroke="#171c4d" d="M2 0h3M6 0h2M9 0h2M13 0h1M15 0h1M17 0h2M20 0h1M22 0h2M25 0h5M31 0h4M36 0h3M40 0h6M1 1h2M45 1h1M1 2h1M0 3h2M45 3h1M47 3h1M0 4h3M0 5h1M46 5h2M1 6h1M45 6h2M2 7h2M5 7h2M9 7h1M12 7h3M16 7h1M19 7h1M22 7h2M25 7h2M28 7h3M33 7h5M40 7h1M42 7h1M44 7h2" />
      <path stroke="#171c4c" d="M5 0h1M8 0h1M11 0h1M14 0h1M35 0h1M2 2h1M47 2h1M2 3h1M47 4h1M2 5h1M2 6h1M8 7h1M11 7h1M17 7h1M20 7h1M32 7h1M38 7h1M41 7h1" />
      <path stroke="#161c4d" d="M12 0h1M21 0h1M24 0h1M30 0h1M39 0h1M0 2h1M45 2h1M45 4h1M45 5h1M15 7h1M18 7h1M21 7h1M24 7h1M27 7h1M39 7h1" />
      <path stroke="#171d4d" d="M16 0h1M19 0h1M46 1h1M46 2h1M46 3h1M46 4h1M1 5h1M4 7h1M7 7h1M10 7h1M31 7h1M43 7h1" />
      <path stroke="#424c52" d="M3 1h2M8 1h3M12 1h2M15 1h5M24 1h1M30 1h1M32 1h1M34 1h2M37 1h2M41 1h1M44 1h1" />
      <path stroke="#424c53" d="M5 1h1M11 1h1M14 1h1M20 1h1M23 1h1M26 1h1M29 1h1" />
      <path stroke="#434c52" d="M6 1h1M21 1h1M27 1h1M33 1h1M36 1h1M39 1h1M42 1h1" />
      <path stroke="#424d52" d="M7 1h1M22 1h1M25 1h1M28 1h1M31 1h1M40 1h1M43 1h1" />
      <path stroke="#263238" d="M3 2h2M6 2h12M19 2h1M21 2h1M24 2h2M27 2h2M31 2h2M34 2h6M41 2h4M3 3h1M5 3h2M8 3h5M15 3h1M17 3h3M21 3h1M23 3h3M27 3h4M33 3h1M36 3h2M39 3h4M44 3h1M4 4h1M6 4h1M8 4h4M13 4h2M16 4h4M21 4h2M24 4h1M29 4h1M31 4h12M44 4h1M3 5h6M12 5h1M14 5h2M18 5h2M23 5h3M27 5h1M31 5h2M35 5h3M39 5h3M43 5h2M4 6h3M8 6h1M10 6h7M19 6h1M22 6h1M24 6h3M30 6h4M35 6h1M38 6h2M41 6h3" />
      <path stroke="#263239" d="M5 2h1M20 2h1M23 2h1M26 2h1M29 2h1M14 3h1M20 3h1M26 3h1M32 3h1M35 3h1M38 3h1M5 4h1M20 4h1M23 4h1M26 4h1M11 5h1M17 5h1M20 5h1M26 5h1M29 5h1M38 5h1M17 6h1M20 6h1M23 6h1M29 6h1M44 6h1" />
      <path stroke="#273238" d="M18 2h1M30 2h1M33 2h1M3 4h1M12 4h1M15 4h1M27 4h1M30 4h1M9 5h1M21 5h1M30 5h1M33 5h1M42 5h1M3 6h1M9 6h1M18 6h1M21 6h1M27 6h1M36 6h1" />
      <path stroke="#263338" d="M22 2h1M40 2h1M4 3h1M7 3h1M13 3h1M16 3h1M22 3h1M31 3h1M34 3h1M43 3h1M7 4h1M25 4h1M28 4h1M43 4h1M10 5h1M13 5h1M16 5h1M22 5h1M28 5h1M34 5h1M7 6h1M28 6h1M34 6h1M37 6h1M40 6h1" />

      <motion.rect initial={{width: 0}} animate={{width: pixelFill}} transition={{duration: 0.3, ease: "circInOut"}} fill={barColor} x={3} y={.5} width={pixelFill} height={6} />
      <motion.rect initial={{width: 0}} animate={{width: pixelFill}} transition={{duration: 0.3, ease: "circInOut"}} fill={barShadowColor} x={3} y={.5} width={pixelFill} height={1} />
      {/* <motion.rect
    fill="rgba(255, 80, 40, 0.35)"
    x={3}
    y={0.5}
    height={6}
    width={pixelFill}
    animate={{ opacity: [0.2, 0.5, 0.2] }}
    transition={{ duration: 0.8, repeat: Infinity }}
  /> */}
    </svg>
  )
}

export default ProgressBar;