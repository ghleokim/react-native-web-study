import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react-lite';
import { Router } from './Router';
import { mainStoreContext } from './store/MainStore';
import { CustomStyle } from './static/CustomStyle';

export const App: React.FC = observer(() => {
  const mainStore = useContext(mainStoreContext);

  mainStore.screenHeight = Dimensions.get('screen').height;
  mainStore.footerHeight = 30;
  mainStore.scrollviewHeight = mainStore.screenHeight - mainStore.footerHeight;

  return (
    <View style={{ height: mainStore.screenHeight, flex: 1 }}>
      <ScrollView style={{ height: mainStore.scrollviewHeight, paddingBottom: 30 }} contentContainerStyle={{flex: 1}}>
        <View style={styles.sectionContainer}>
          <View style={styles.background}></View>
          <Router />
        </View>
      </ScrollView>
      <View style={[styles.footer]}>
        <TouchableOpacity onPress={() => mainStore.currentPage = "mainPage"} style={{ alignItems: "baseline", flex: 1, flexDirection: "row" }}><Text style={{ color: '#FFFFFF' }}>Main</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => mainStore.currentPage = "loginPage"} style={{ alignItems: "baseline", flex: 1, flexDirection: "row" }}><Text style={{ color: '#FFFFFF' }}>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => mainStore.currentPage = "mapPage"} style={{ alignItems: "baseline", flex: 1, flexDirection: "row" }}><Text style={{ color: '#FFFFFF' }}>Map</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => mainStore.currentPage = "truckDetailPage"} style={{ alignItems: "baseline", flex: 1, flexDirection: "row" }}><Text style={{ color: '#FFFFFF' }}>TruckDetail</Text></TouchableOpacity>
      </View>
    </View>
  )
})

// define new style here to override CustomStyle stylesheet.
const localStyle = StyleSheet.create({
  background: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#3f3f3f',
    zIndex: -1
  },
  sectionContainer: {
    marginTop: 0,
  },
  footer: {
    position: 'absolute',
    height: 30,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#3f3f3f',
    flexDirection: 'row'
  },
  smallButton: {
    height: 30,
    flex: 1,
    flexDirection: "column"
  }
});

const styles = { ...CustomStyle, ...localStyle }