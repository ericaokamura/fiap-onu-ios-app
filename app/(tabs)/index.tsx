import { ActivityIndicator, StyleSheet, View, Text, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Anuncio } from '../models/anuncio';
import axios from "axios";

export default function HomeScreen() {

  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState<Anuncio[]>([]);

  const [token, setToken] = useState<string>('');
  
  const body = {"nomeUsuario": "ericaokamura", "senha": "12345678" };

  const getLogin = async (data: any) => {
    const retorno = axios.post('http://192.168.15.27:8091/login', data, { headers: {'Access-Control-Allow-Origin': 'http://localhost:8081' }, withCredentials: false })
      .then((response: any) => setToken(response.data.token))
      .catch((err: any) => console.log(err)); 
  }

  console.log('token', token);

  useEffect(() => {
      getLogin(body);
  }, []);

  const getAnuncios = () => {
    console.log(token);
    return fetch('http://192.168.15.27:8091/anuncio/disponibilidade', { headers: { 'Authorization': `Bearer ${token}`, 'Access-Control-Allow-Origin': '*', "User-Agent": "Chrome/125.0.0.0" }})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json.data;
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAnuncios();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={{width: 70, height: 70}}
        />
      </View>
      <View style={styles.body}>
        <View style={{flex: 1, padding: 24}}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
          <FlatList
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <View>  
                <Text>item.titulo</Text>
                <Image style={{width: 50, height: 50}} source={{uri: 'data:image/png;base64, item.fotoAnuncio'}}/>
              </View>
            )}
          />
          )}
        </View>
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    backgroundColor: '#3CA6A6',
    height: 100,
  },
  menuBar: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    marginVertical: 200,
  },
  anuncios: {

  }
});


