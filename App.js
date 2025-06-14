import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const CORRECT_PASSWORD = '1234'; // Replace with secure logic

  const handleStart = () => {
    setIsRecording(true);
    // Start camera recording logic goes here
  };

  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setIsRecording(false);
      setShowPasswordPrompt(false);
      setPassword('');
      setError('');
      // Stop recording logic goes here
    } else {
      setError('Incorrect password. Try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {isRecording ? 'Recording in Progress' : 'Ready to Record'}
      </Text>
      {isRecording ? (
        <View style={styles.section}>
          <Button title="Stop Recording" color="red" onPress={() => setShowPasswordPrompt(true)} />
          {showPasswordPrompt && (
            <View style={styles.prompt}>
              <TextInput
                secureTextEntry
                style={styles.input}
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
              />
              <Button title="Submit" onPress={handlePasswordSubmit} />
              {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>
          )}
        </View>
      ) : (
        <Button title="Start Recording" color="green" onPress={handleStart} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  prompt: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});