import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { mainStoreContext } from '../store/MainStore';
import { searchStoreContext } from '../store/SearchStore';
import { observer } from 'mobx-react-lite';

export const RouteMain: React.FC = observer(() => {
  const mainStore = useContext(mainStoreContext);
  const searchStore = useContext(searchStoreContext);
  const currentPage = mainStore.currentPage

  const handleSearchBar = (keyword: string) => {
    searchStore.searchKeyword = keyword;
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View>
        <Text style={styles.sectionTitle}>{currentPage}</Text>
        <View style={styles.mainBanner}>
          <Image style={styles.mainBanner} source={require('@foodtruckmap/common/src/static/banner.png')} />
        </View>
        <View style={styles.mainButtonWrapper}>
          <TouchableOpacity style={styles.mainButton} onPress={() => { mainStore.currentPage = 'mapPage' }}><Text style={styles.sectionTitle}> 내 주변 푸드트럭 찾기 🚚 > </Text></TouchableOpacity>
        </View>
        <View>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder={searchStore.searchKeyword}
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={handleSearchBar}
          />
        </View>
      </View>
      <View style={styles.staticInfo}>
        <Text style={styles.staticText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet congue felis, id accumsan est. Pellentesque lobortis diam euismod dolor consequat gravida. Donec lobortis pretium nunc, in tincidunt felis consectetur ut. Nam sollicitudin erat vel felis porta ultrices. Pellentesque aliquet dolor elit, sit amet maximus mi dapibus quis. Nam eu laoreet risus, gravida sagittis felis. Vivamus fringilla faucibus urna, ut malesuada lorem facilisis vitae. Donec felis nisl, tincidunt at consequat sit amet, dictum ac nisl.</Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  mainBanner: {
    height: 150,
    width: '100%',
    backgroundColor: '#f3f3f3'
  },
  mainBannerImage: {
    height: 100,
    width: '100%',
  },
  mainButtonWrapper: {
    height: 100,
    width: '100%',
    padding: 10
  },
  mainButton: {
    width: '100%',
    borderColor: '#f34600',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  staticInfo: {
    backgroundColor: '#a0a0a0',
    marginTop: 5,
    paddingHorizontal: 10,
    flex: 1,
    alignSelf: 'stretch'
  },
  staticText: {
    fontSize: 10,
    color: '#505050'
  }
})