import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { mainStoreContext } from '../store/MainStore';
import { searchStoreContext } from '../store/SearchStore';
import { observer } from 'mobx-react-lite';
import { CustomStyle } from '../static/CustomStyle';
import { Colors } from '../static/CustomColor';
import { BannerSwiper } from '../components/main/BannerSwiper'

export const RouteMain: React.FC = observer(() => {
  const mainStore = useContext(mainStoreContext);
  const searchStore = useContext(searchStoreContext);
  const currentPage = mainStore.currentPage

  const bannerHeight = mainStore.screenWidth / 2.6
  console.log(`bannerheight` , bannerHeight)

  const handleSearchBar = (keyword: string) => {
    searchStore.searchKeyword = keyword;
  }

  const handleSearchButton = (text: string) => {
    console.log(text)
    console.log('enter')
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View>
        <BannerSwiper />
        {/* <View style={[styles.mainBanner, {height: bannerHeight}]}>
          <Image style={[styles.mainBannerImage, {height: bannerHeight}]} source={require('@foodtruckmap/common/src/static/banner/bamdokkabi_1280_480.png')} />
        </View> */}
        <View style={styles.mainButtonWrapper}>
          <TouchableOpacity style={styles.mainButton} onPress={() => { mainStore.currentPage = 'mapPage' }}><Text style={styles.sectionTitle}> 내 주변 푸드트럭 찾기 🚚 > </Text></TouchableOpacity>
        </View>
        <View style={styles.searchBarWrapper}>
          <TextInput
            style={[styles.input, { flex: 4 }]}
            underlineColorAndroid="transparent"
            placeholder={searchStore.searchPlaceholder}
            autoCapitalize="none"
            onChangeText={handleSearchBar}
            onSubmitEditing={(text) => handleSearchButton}
          />
          <TouchableOpacity style={{ marginLeft: 5, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Colors.navy }}>
            <Text style={{ color: Colors.white }}>검색</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.staticInfo}>
        <Text style={styles.staticText}>
          <Text style={styles.staticTextLink} onPress={() => console.log('hello')}>팀 정보</Text> | <Text style={styles.staticTextLink} onPress={() => console.log('hello2')}>이용 약관</Text> | <Text style={styles.staticTextLink} onPress={() => console.log('hello3')}>개인정보처리방침</Text>
        </Text>
        <Text style={styles.staticText}>foodtruck-map</Text>
      </View>
    </View>
  )
})

const LocalStyles = StyleSheet.create({
  mainBanner: {
    height: 150,
    width: '100%',
    backgroundColor: '#f3f3f3'
  },
  mainBannerImage: {
    height: 150,
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
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  searchBarWrapper: {
    height: 70,
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  staticInfo: {
    backgroundColor: '#e4e4e5',
    marginTop: 5,
    paddingTop: 8,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  staticText: {
    fontSize: 14,
    color: '#505050'
  },
  staticTextLink: {
    textDecorationLine: 'underline',
  }
})

const styles = { ...CustomStyle, ...LocalStyles }