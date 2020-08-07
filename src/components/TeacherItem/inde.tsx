import React, { useCallback, useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Image, Text, Linking } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export interface ITeacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: number;
  subject: string;
}

interface ITeacherItemProps {
  teacher: ITeacher;
  favorited: boolean;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleLinkToWhatsApp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }, []);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('@Proffy:favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (favoriteTeacher: ITeacher) => favoriteTeacher.id === teacher.id
      );

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('@Proffy:favorites', JSON.stringify(favoritesArray));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorited : {}
            ]}
            onPress={handleToggleFavorite}
          >
            {
              isFavorited
                ? <Image source={unFavoriteIcon} />
                : <Image source={heartOutlineIcon} />
            }
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
            <Image source={whatsAppIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
