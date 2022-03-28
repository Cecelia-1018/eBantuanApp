import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Card, Button, Title } from 'react-native-paper';

function TestScreen({ navigation, route }) {
  return (
    <View>

      <Card>
        <Card.Content>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
            }}>
            <Title>Testing...</Title>

          </View>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        color="#045de9"
        style={styles.button}
        onPress={() => navigation.goBack()}>
        Back
      </Button>
    </View>
  );

}

const styles = StyleSheet.create({
  button: {
    width: 350,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 10,
  }

});

export default TestScreen;