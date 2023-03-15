import React from 'react';
import {View, Text} from 'react-native';
import UpdateModal from '../../ui/components/UpdateModal/UpdateModal.view';
import HomeScreenStyles from './HomeScreen.styles';

export const HomeScreenView = ({
  isModalVisible,
  updateData,
  setModalVisibility,
}: {
  isModalVisible: boolean;
  updateData: any;
  setModalVisibility: Function;
}): JSX.Element => {
  return (
    <View style={HomeScreenStyles.mainContainer}>
      <Text style={HomeScreenStyles.mainTitle}>Internal Update Sample</Text>
      <UpdateModal
        isModalVisible={isModalVisible}
        updateData={updateData}
        setModalVisibility={setModalVisibility}
      />
    </View>
  );
};

export default HomeScreenView;
