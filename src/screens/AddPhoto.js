import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
 
const AddPhoto = () => {
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState('');
 
  const pickImage = async (camera = false) => {
    const config = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
 
    try {
      let result = camera
        ? await ImagePicker.launchCameraAsync(config)
        : await ImagePicker.launchImageLibraryAsync(config);
 
      if (!result.cancelled) {
        setImage({ uri: result.uri });
      }
    } catch (E) {
      Alert.alert('Erro ao tentar carregar imagem.');
    }
  };
 
  const save = async () => {
    Alert.alert('Imagem adicionada!', comment);
  };
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <TextInput
          placeholder='Algum comentário para a foto?'
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
 
        <View style={styles.optionsContainer}>
          <View style={styles.buttomContainer}>
            <TouchableOpacity onPress={() => pickImage()} style={styles.option}>
              <FontAwesome name='photo' size={30} color='#000' />
              <Text>Galeria</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pickImage(true)} style={styles.option}>
              <FontAwesome name='camera' size={30} color='#000' />
              <Text>Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={save} style={styles.option}>
              <FontAwesome name='save' size={30} color='#000' />
              <Text>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
 
export default AddPhoto;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
  },
  optionsContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    width: '90%',
    marginTop: 30,
    padding: 5,
  },
  buttomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto',
    padding: 10,
  },
  option: {
    alignItems: 'center',
  },
  buttomText: {
    fontSize: 20,
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
});