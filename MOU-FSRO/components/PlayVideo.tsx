import React from "react";
import { Button, View } from "react-native";
import { useVideoPlayer, VideoView } from 'expo-video'
import { useEvent } from "expo";

type PlayVideoProps = {
  videoSource: string;
}

//const videoSource = 
//'https://firebasestorage.googleapis.com/v0/b/movimentos-de-ordem-unida.appspot.com/o/IMG_0107.mp4?alt=media&token=5a899bd7-00cf-4f77-a703-bf2293cc4e0b'

export default function PlayVideo({ videoSource }: PlayVideoProps) {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
  
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  return (
    <View>
      <VideoView player={player} allowsFullscreen allowsPictureInPicture>
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
