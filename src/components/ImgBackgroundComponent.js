import { ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ImgBackgroundComponent({ children }) {
  const imgBack = require("../assets/images/background.jpg");

  return (
    <ImageBackground
      style={styles.imgBackground}
      source={imgBack}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}
