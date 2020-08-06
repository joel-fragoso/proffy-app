import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassImg from '../../assets/images/icons/give-classes.png';
import purpleHeartImg from '../../assets/images/icons/heart.png';

import styles from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, []);

  const handleNavigateToStudyPages = useCallback(() => {
    navigate('Study');
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingImg} />
      <Text style={styles.title}>
        Seja bem-vindo,{'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassImg} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de 200 conexões já realizadas {' '}
        <Image source={purpleHeartImg} />
      </Text>
    </View>
  );
};

export default Landing;
