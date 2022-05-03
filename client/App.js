import { SafeAreaView, StatusBar } from "react-native";
import Header from './src/component/Header';
import Styles from "./src/theme/Styles";

export default function App() {
  return (
    <SafeAreaView style={[ Styles.app, Styles.flex1 ]}>
      <StatusBar />
      <Header title="Filemanager" />
    </SafeAreaView>
  );
}
