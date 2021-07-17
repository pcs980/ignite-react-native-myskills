import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, guest
      </Text>
      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={{...styles.title, marginVertical: 30}}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  input: {
    marginTop: 30,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});