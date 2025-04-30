import { windowWidth } from "@/app/assets/utils/dimensions";
import { Pressable, View, Text, StyleSheet } from "react-native";

type Props = {
    label: string;
    theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.button}>
        <Pressable
          onPress={() => alert('You pressed a button.')}
        >
          <Text style={styles.text}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: windowWidth-100
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  }
})