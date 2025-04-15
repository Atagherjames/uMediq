import Svg, { Path } from "react-native-svg";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function TabBarBackground() {
  const height = 65;
  const notchDepth = 20;
  const notchRadius = 30;
  const centerX = width / 2;
  const left = centerX - notchRadius;
  const right = centerX + notchRadius;

  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "absolute", bottom: 0 }}
    >
      <Path
        fill="#ffffff"
        d={`
          M0 15
          Q0 0 15 0
          H${left}
          Q${centerX} ${notchDepth} ${right} 0
          H${width - 15}
          Q${width} 0 ${width} 15
          V${height}
          H0
          Z
        `}
      />
    </Svg>
  );
}
