import React from 'react';
import {View, Text, Linking, Image} from 'react-native';
import Modal from 'react-native-modal';
import images from '../../../assets/images';
import Button from '../Button/Button.view';
import styles from './UpdateModal.styles';

export const UpdateModal = ({
  isModalVisible,
  updateData,
  setModalVisibility,
}: {
  isModalVisible: boolean;
  updateData?: any;
  setModalVisibility: Function;
}): JSX.Element => {
  const openStore = () => {
    const link = 'itms-apps://apps.apple.com/eg/app/fransimobile/id428927940';
    Linking.canOpenURL(link).then(
      supported => {
        supported && Linking.openURL(link);
      },
      err => console.log(err),
    );
  };
  return (
    <Modal
      isVisible={isModalVisible}
      hideModalContentWhileAnimating={true}
      animationOut="slideOutDown"
      useNativeDriver={true}>
      <View style={styles.mainContainer}>
        <Image
          source={images.updateModalImage}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.mainTitle}>We're better than ever!</Text>

        <Text style={styles.updateMessage}>
          {updateData.updateMessage}. We've done some enhancements and want you
          to have the best version
        </Text>

        <View style={styles.buttonsContainer}>
          {!updateData.forceUpdate && (
            <Button
              title="Close"
              titleStyle={styles.closeButtonTitle}
              viewStyle={styles.closeButton}
              onPress={() => setModalVisibility(false)}
            />
          )}
          <Button
            title="Update Now"
            onPress={() => openStore()}
            titleStyle={styles.updateButtonTitle}
            viewStyle={styles.updateButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default UpdateModal;
