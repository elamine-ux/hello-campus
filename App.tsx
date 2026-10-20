

import React from 'react';
import {
  View,
  Text,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
    Bonjour Campus !
    </Text>
    
    <Text style={styles.subtitle}>
    IAIL S5 - Developpement mobile
    </Text>
    
    <Text style={styles.institution}>
    Universite Ibn Zohr
    </Text>
    
    <Pressable
    style={styles.button}
    onPress={() =>
      Alert.alert(
        'Bienvenue',
        'Votre premiere application IAIL S5 fonctionne !'
      )
    }
    >
    <Text style={styles.buttonText}>Bienvenue</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#163a70',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 10,
  },
  institution: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#00897b',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
