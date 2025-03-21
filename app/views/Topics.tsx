import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { AppDispatch } from '../redux/store';

const Topics = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { topics, loading, error } = useSelector((state: RootState) => state.topics);

  // TODO: Fetch topics on mount
  // useEffect(() => {
  //   dispatch(fetchTopics());
  // }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Button title="Create Topic" onPress={() => {/* Navigate to create screen */}} />
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Likes: {item.likes.length}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Topics;