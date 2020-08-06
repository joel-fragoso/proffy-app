import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { View, ImageBackground, Text } from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateGoBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.content}
        source={giveClassesBgImage}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
      </ImageBackground>
      <RectButton
        style={styles.okButton}
        onPress={handleNavigateGoBack}
      >
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
