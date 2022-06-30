import React, { useState } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Ionicons from "@expo/vector-icons/Ionicons";

const VideoRoute = () => {
  const [dataSource, setDataSource] = useState([]);
  useState(() => {
    let items = Array.apply(null, Array(779)).map((v, i) => {
      return { id: i, src: "https://dummyimage.com/600x400/bbb/000" };
    });
    setDataSource(items);
  }, []);

  return (
    <FlatList
      data={dataSource}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "column", margin: 1 }}
        >
          <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
        </TouchableOpacity>
      )}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index}
    />
  );
};

const ImageRoute = () => {
  const [dataSource, setDataSource] = useState([]);
  useState(() => {
    let items = Array.apply(null, Array(779)).map((v, i) => {
      return { id: i, src: "https://dummyimage.com/600x400/bbb/000" };
    });
    setDataSource(items);
  }, []);

  return (
    <FlatList
      data={dataSource}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "column", margin: 1 }}
        >
          <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
        </TouchableOpacity>
      )}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index}
    />
  );
      }

const PDFRoute = () => {
  const [dataSource, setDataSource] = useState([]);
  useState(() => {
    let items = Array.apply(null, Array(779)).map((v, i) => {
      return { id: i, src: "https://dummyimage.com/600x400/bbb/000" };
    });
    setDataSource(items);
  }, []);

  return (
    <FlatList
      data={dataSource}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ flex: 1, flexDirection: "column", margin: 1 }}
        >
          <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
        </TouchableOpacity>
      )}
      //Setting the number of column
      numColumns={3}
      keyExtractor={(item, index) => index}
    />
  );
}

const renderScene = SceneMap({
  video: VideoRoute,
  image: ImageRoute,
  pdf: PDFRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color,
          margin: 8,
          color: focused ? "#000" : "#999",
          fontWeight: focused ? "bold" : "",
        }}
      >
        {route.title.toUpperCase()}
      </Text>
    )}
    indicatorStyle={{ backgroundColor: "green" }}
    style={{ backgroundColor: "#fff", elevation: 5 }}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "video", title: "Video" },
    { key: "image", title: "Image" },
    { key: "pdf", title: "PDF" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Ionicons
            name="albums"
            size={25}
            color="green"
            style={styles.headerIcon}
          />
          <Text style={styles.headerTxt}>Filemanager</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={25}
            color="green"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTxt: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});