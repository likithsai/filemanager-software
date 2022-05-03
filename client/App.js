import { SafeAreaView, StatusBar, TouchableOpacity, View, Text } from "react-native";
import Header from './src/component/Header';
import Styles from "./src/theme/Styles";
import Gridlist from "./src/component/GridList";

export default function App() {
  return (
    <SafeAreaView style={[ Styles.app, Styles.flex1 ]}>
      <StatusBar />
      <Header title="Filemanager" />
      <View style={{ flex: 1 }}>
        <Gridlist
          data={[
            {id: 'a', value: '192.168.0.104'},
            {id: 'b', value: 'B'},
            {id: 'c', value: 'C'},
            {id: 'd', value: 'D'},
            {id: 'e', value: 'E'},
            {id: 'f', value: 'F'},
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
