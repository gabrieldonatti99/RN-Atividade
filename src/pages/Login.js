import ImgBackgroundComponent from "../components/ImgBackgroundComponent";
import ImageComponent from "../components/ImageComponent";
import TextComponent from "../components/TextComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { View } from "react-native-web";
import CardComponent from "../components/CardComponent";

export default function Login() {
  return (
    <ImgBackgroundComponent>
      <CardComponent>
        <ImageComponent />
        <TextComponent />
        <InputComponent />
        <ButtonComponent />
      </CardComponent>
    </ImgBackgroundComponent>
  );
}
