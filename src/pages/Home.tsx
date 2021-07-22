import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills([...mySkills, {
      id: String(new Date().getTime()),
      name: newSkill,
    }]);
    setNewSkill('');
  }

  function handleRemoveSkill(id: string) {
    setMySkills(state => state.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    console.log('Skill added');
  }, [mySkills]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour > 5 && hour < 12) {
      setGreeting('Good morning!');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good night!');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, guest
      </Text>
      <Text style={styles.greetings}>
        {greeting}
      </Text>
      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button
        title='Add'
        onPress={handleAddNewSkill}
      />

      <Text style={{ ...styles.title, marginVertical: 30 }}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
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
  greetings: {
    color: '#fff'
  },
});