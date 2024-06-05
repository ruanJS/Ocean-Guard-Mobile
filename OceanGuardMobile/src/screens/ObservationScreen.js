import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ObservationScreen({ navigation, route }) {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const { token } = route.params;

  const handleAddObservation = async () => {
    try {
      await axios.post(
        'http://localhost:5000/observations/add',
        { type, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Observation added successfully');
      navigation.navigate('Home');
    } catch (error) {
      alert('Failed to add observation');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Add Observation</Text>
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Observation" onPress={handleAddObservation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});
