import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
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
  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>We're better than ever!</Text>

        <Text style={styles.updateMessage}>{updateData.updateMessage}</Text>

        <View style={styles.buttonsContainer}>
          {updateData.forceUpdate && (
            <Button
              title="Close"
              titleStyle={styles.closeButtonTitle}
              viewStyle={styles.closeButton}
              onPress={() => setModalVisibility(false)}
            />
          )}
          <Button
            title="Update Now"
            titleStyle={styles.updateButtonTitle}
            viewStyle={styles.updateButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default UpdateModal;
