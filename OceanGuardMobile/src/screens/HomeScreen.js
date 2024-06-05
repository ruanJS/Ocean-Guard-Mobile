import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation, route }) {
  const [observations, setObservations] = useState([]);
  const { token } = route.params;

  useEffect(() => {
    const fetchObservations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/observations', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setObservations(response.data);
      } catch (error) {
        alert('Failed to fetch observations');
      }
    };

    fetchObservations();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Type: {item.type}</Text>
      <Text>Description: {item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Observations</Text>
      <FlatList
        data={observations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Add Observation"
        onPress={() => navigation.navigate('Observation', { token })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
