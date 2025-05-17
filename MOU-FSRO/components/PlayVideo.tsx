import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView,  } from 'expo-video'
import { useEvent } from "expo";


type PlayVideoProps = {
  videoSource: string;
}

export default function PlayVideo({ videoSource }: PlayVideoProps) {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
  
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  return (
    <View style={styles.container}>
      <VideoView player={player} style={styles.containerVideoView} allowsFullscreen allowsPictureInPicture >
        <View>
          <Button 
            title={isPlaying ? 'Pause' : 'Play'}
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </View>
      </VideoView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  containerVideoView: {
    borderWidth: 2,
    borderColor: '#fff',
    width: 400,
    height: 540,
  }
})