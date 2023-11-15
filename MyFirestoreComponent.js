import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getDataFromFirestore } from './firestoreService';

const MyFirestoreComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromFirestore('fitnes').then(fetchedData => {
      setData(fetchedData);
    });
  }, []);

  return (
    <View>
      {data.map(item => (
        <Text key={item.id}>{JSON.stringify(item)}</Text>
      ))}
    </View>
  );
};

export default MyFirestoreComponent;
