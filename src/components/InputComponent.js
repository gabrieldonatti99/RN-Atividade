import { View, Image, TextInput } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function InputComponent() {
  const iconUser = require("../assets/images/iconuser.png");
  const iconPassword = require("../assets/images/iconpassword.png");

  return (
    <View>
      <View style={styles.areaInputs}>
        <Image style={styles.icon} source={iconUser} />
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.areaInputs}>
        <Image style={styles.icon} source={iconPassword} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
}
