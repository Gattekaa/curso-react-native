import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from 'expo';
const noUser = 'Você precisa estar logado para adicionar imagens';
class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  }

  pickImage = async (camera = false) => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUser);
      return;
    };
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

      if (!result.canceled) {

        this.setState({ image: result.assets })
        console.log(this.state.image)

      }
    } catch (E) {
      console.log(E)
      Alert.alert('Erro ao tentar carregar imagem.');
    }


  };


  save = async () => {
    if (!this.props.name) {
      Alert.alert('Falha!', noUser);
      return;
    };
    
    this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [{
        nickname: this.props.name,
        comment: ` ${this.state.comment}`
      }]
    })

    this.setState({ image: null, comment: '' })
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image  source={this.state.image} style={styles.image} />
          </View>
          <TouchableOpacity onPress={() => this.pickImage()} style={styles.button}>
            <Text style={styles.buttonText}>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder='Algum comentário para a foto?'
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })} />
          <TouchableOpacity onPress={this.save} style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#eee',
    marginTop: 10,
    alignItems: 'center'
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center'
  },

  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    marginTop: 20,
    width: '90%'
  }
})

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    onAddPost: post => dispatchEvent(addPost(post))
  }
}

// export default AddPhoto
export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)