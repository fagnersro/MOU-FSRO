import React, { useState } from 'react';
import Video from 'react-native-video';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default function PlayerVideo({source}: any) {
    const [loading, setLoading] = useState(true);


  return (
    <View style={styles.container}>
       {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}

      <Video
        source={{ uri: source }}
        style={[styles.containerVideoView, loading && styles.hidden]}
        controls
        resizeMode="contain"
        onError={(e) => console.log('Erro:', e)}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerVideoView: {
   
    width: '100%',
    maxWidth: 400,
    height: 540,
  },
    hidden: {
    display: 'none',
  },
    loadingContainer: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})