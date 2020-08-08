import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem/inde';

import styles from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<ITeacher[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('@Proffy:favorites').then(response => {
        if (response) {
          const favoritedTeachers = JSON.parse(response);

          setFavorites(favoritedTeachers);
        }
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 260,
        }}
        style={styles.teacherList}
      >
        {favorites.map(teacher => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
