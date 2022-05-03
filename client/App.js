import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, TextInput } from "react-native";
import Header from './src/component/Header';
import Styles from "./src/theme/Styles";
import Gridlist from "./src/component/GridList";
import RBSheet from "react-native-raw-bottom-sheet";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [serverName, setServerName] = useState("");
  const [serverAddress, setServerAddress] = useState("");

  return (
    <SafeAreaView style={[ Styles.app, Styles.flex1 ]}>
      <StatusBar />
      <Header title="Filemanager" onButtonPress={() => this.RBSheet.open()} />
      <View style={{ flex: 1 }}>
        <Gridlist
          data={[
            // {id: 'a', value: '192.168.0.104'},
            // {id: 'b', value: 'B'},
            // {id: 'c', value: 'C'},
            // {id: 'd', value: 'D'},
            // {id: 'e', value: 'E'},
            // {id: 'f', value: 'F'},
          ]}
        />
      </View>

      {/* bottomsheet */}
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={350}
        openDuration={350}
        customStyles={{
            container: {
              justifyContent: "flex-start",
              padding: 30,
              elevation: 2
            }
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%', marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 20 }}>Add Server</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>Server Name:</Text>
                <TextInput
                  style={{ paddingBottom: 10, fontSize: 15, width: '100%' }}
                  onChangeText={setServerName}
                  value={serverName}
                  placeholder="Ex. MyServer"
                />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 30 }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>Server Address:</Text>
                <TextInput
                  style={{ paddingBottom: 10, fontSize: 15, width: '100%' }}
                  onChangeText={setServerAddress}
                  value={serverAddress}
                  placeholder="Ex. 192.168.0.1"
                />
            </View>
            <TouchableOpacity>
              <Ionicons name="qr-code-outline" size={30} color="green" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ borderRadius: 5, backgroundColor: 'green', paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>Save</Text>
          </TouchableOpacity>
      </RBSheet>
    </SafeAreaView>
  );
}
