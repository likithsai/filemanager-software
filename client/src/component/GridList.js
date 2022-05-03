//  Grid List
import React, { useState } from "react";
import { FlatList, View, RefreshControl, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Gridlist = (props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    return (
        <FlatList
        data={props.data}
        style={{ margin: 15, height: '100%' }}
        refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              title="Refresh"
              colors={['green', 'white']}
              onRefresh={() => {
                console.log('_onRefresh');
                setIsRefreshing(false);
              }}
            />
        }
        renderItem={({ item }) => (
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    margin: 2,
                    backgroundColor: '#8e8e8e',
                    alignItems: 'center',
                    paddingVertical: 30,
                    borderRadius: 5
                }}>
                <Ionicons name="cloud" size={60} color="#fff" style={{ marginBottom: 15 }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>{item.value}</Text>
            </TouchableOpacity>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => (
            <View style={{ flexDirection: 'column', alignItems:'center', flex: 1, width: '100%', height: '100%' }}>
                <Ionicons name="cloud" size={60} color="green" style={{ marginBottom: 15, elevation: 3 }} />
                <Text style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.5)' }}>No Servers added, Click to add server</Text>
            </View>
        )}
        />
    );
}

export default Gridlist;