// ...import statements...

const DATA = Array.from({length: 1000}, (_, i) => ({id: i, text: "`Item ${i}"`}));

const FlatListExample = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Text>{item.text}</Text>}
    />
  );
};

export default FlatListExample;