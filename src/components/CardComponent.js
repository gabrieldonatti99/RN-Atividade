import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function CardComponent({ children }) {
  return <View style={styles.cardLogin}>{children}</View>;
}
