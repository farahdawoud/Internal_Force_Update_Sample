import React, {useEffect, useState} from 'react';
import Apis from '../../networking/Apis';
import axiosInstance from '../../networking/AxiosInstance';
import {HomeScreenView} from './HomeScreen.view';

const HomeScreen = (): JSX.Element => {
  const [checkUpdateData, setCheckUpdateData] = useState({});
  const [isModalVisible, setModalVisibility] = useState(false);

  const checkVersion = async () => {
    try {
      const response = await axiosInstance.get(Apis.checkUpdate);
      console.log('Data ', response.data);
      setCheckUpdateData(response.data);
      if (response.data.flexibleUpdate || response.data.forceUpdate) {
        setModalVisibility(true);
      }
    } catch (e) {
      console.log('Error ', e);
    }
  };

  useEffect(() => {
    checkVersion();
  }, []);

  return (
    <HomeScreenView
      isModalVisible={isModalVisible}
      updateData={checkUpdateData}
      setModalVisibility={setModalVisibility}
    />
  );
};

export default HomeScreen;
