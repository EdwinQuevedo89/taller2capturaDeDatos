import { StatusBar } from 'expo-status-bar';
import { DataPickerIOS, Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useState } from 'react';



export default function App() {
  function Mensaje() {

    Alert.alert("Mensaje", "El usuario se ha registrado con éxito")
  }

  const mensaje2 = () => { Alert.alert("Mensaje", "El usuario se ha registrado con éxito") }

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [genero, setGenero] = useState('');
  const [informacionFormulario, setInformacionFormulario] = useState('');



  const handleRegistro = () => {
    // Aquí puedes implementar la lógica para enviar la información del formulario

    const infoFormulario = {
      nombre,
      apellido,
      email,
      contraseña,
      confirmarContraseña,
      telefono,
      fecha,
      genero,
    };
    // Establecer la información del formulario en el estado
    setInformacionFormulario(infoFormulario);

    console.log('Información del formulario:', {
      nombre,
      apellido,
      email,
      contraseña,
      confirmarContraseña,
      telefono,
      fecha,
      genero,
    });
  };







  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>REGISTRO DE USUARIO </Text>

      <Text style={styles.txtSub} >Nombre </Text>
      <TextInput
        style={styles.input}
        placeholder='Nombre'
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.txtSub} >Apellido </Text>
      <TextInput
        style={styles.input}
        placeholder='Apellido'
        value={apellido}
        onChangeText={setApellido}
      />

      <Text style={styles.txtSub} >Correo Electrónico </Text>
      <TextInput
        style={styles.input}
        placeholder='email'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.txtSub} >Contraseña </Text>
      <TextInput
        style={styles.input}
        placeholder='password'
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
      />

      <Text style={styles.txtSub} >Confirmar Contraseña </Text>
      <TextInput
        style={styles.input}
        placeholder='confirmPassword'
        value={confirmarContraseña}
        onChangeText={setConfirmarContraseña}
        secureTextEntry
      />

      <Text style={styles.txtSub} >Teléfono </Text>
      <TextInput
        style={styles.input}
        placeholder='setPhoneNumber'
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />

      <Text style={styles.txtSub} >Fecha de Nacimiento </Text>
      <TextInput
        style={styles.input}
        placeholder='seleccione fecha'
        value={fecha}
        onChangeText={setFecha}

      />

      <Text style={styles.txtSub} >Genero </Text>
      <TextInput
        style={styles.input}
        placeholder='seleccione genero'
        value={genero}
        onChangeText={setGenero}
      />

      <Text>Aceptar Términos y Condiciones</Text>
      <Text></Text>

      <View style={styles.btnButton}>
        <Text></Text>
        <Button
          title='Aceptar'
          onPress={handleRegistro}
          color='green'
        />

      </View>

      <View>
        <Text></Text>
        <Text>Nombre: {informacionFormulario.nombre}</Text>
        <Text>Apellido: {informacionFormulario.apellido}</Text>
        <Text>Email: {informacionFormulario.email}</Text>
        <Text>Teléfono: {informacionFormulario.telefono}</Text>
        <Text>Fecha de Nacimiento: {informacionFormulario.fecha}</Text>
        <Text>Género: {informacionFormulario.genero}</Text>
      </View>

      <StatusBar style="auto" />
    </View >
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aab1b3',
    alignItems: 'center',
    justifyContent: 'left',
  },

  txtTitulo: {
    fontSize: 30
  },

  txtSub: {
    fontSize: 25,
    textAlign: 'right'
  },

  input: {
    backgroundColor: 'white',
    width: '90%',
    height: '4%',
    borderRadius: 10,
  },

  btnButton: {
    flexDirection: "row",
  },

  result: {
    marginTop: 100,
    fontSize: 100,
  },
});