import { View, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ImageComponent({ children }) {
  const iconLogin = require("../assets/images/iconlogin.png");

  return (
    <View style={styles.iconContainer}>
      <Image style={styles.iconLogin} source={iconLogin} />
      {children}
    </View>
  );
}
