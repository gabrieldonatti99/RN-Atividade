import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";

function ButtonComponent() {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>Login</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
