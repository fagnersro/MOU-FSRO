import { ScrollView, StyleSheet, View, Pressable, Image, ImageSourcePropType } from "react-native";

import IMG_0086 from '../app/assets/images/png/IMG_0086.png'

type ShowMovieType = {
  type: string;
}

type blockAmountType = {
  id: number;
  imgMovie: ImageSourcePropType;
}[]

const blockAmount: blockAmountType = [
  {
    id: 1,
    imgMovie:IMG_0086,
  },
  {
    id: 2,
    imgMovie:IMG_0086,
  },
  {
    id: 3,
    imgMovie:IMG_0086,
  },
  {
    id: 4,
    imgMovie:IMG_0086,
  },
  {
    id: 5,
    imgMovie:IMG_0086,
  },
  {
    id: 6,
    imgMovie:IMG_0086,
  },
  {
    id: 7,
    imgMovie:IMG_0086,
  },
]

export default function ShowMovie({type}: ShowMovieType) {
  return (
    <ScrollView horizontal={true}>
      {blockAmount.map((amount) => (
        <View style={containerMovie.container} key={amount.id}>
        <View style={containerMovie.wrapper}>
          {blockAmount.map((amount) => (
            <View style={containerMovie.block} key={amount.id}></View>
          ))}
        </View>

        <View style={containerMovie.wrapperPressable}>
          <Pressable style={containerMovie.pressabeArea} onPress={() => alert('Vídeo precisa ser programado!!')}>
            <Image source={amount.imgMovie} style={containerMovie.pressableImage}/>
          </Pressable>
        </View>
        
        <View style={containerMovie.wrapper}>
          {blockAmount.map((amount) => (
            <View style={containerMovie.block} key={amount.id}></View>
          ))}
        </View>
      </View>
      ))}
    </ScrollView>
  )
}

const containerMovie = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flexDirection: 'row',
  },
  block: {
    width: 30,
    height: 30,
    borderWidth:10,
    borderColor: '#000000'
  },
  wrapperPressable: {
    backgroundColor: '#000000',
    width: 210,
  },
  pressabeArea: {
    overflow: 'hidden'
  },
  pressableImage: {
    width: 180,
    height: 300,
    resizeMode: 'stretch',
  }
})