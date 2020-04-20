import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import Header from './Header';
import Greeting from './src/components/Greeting';
import Input from './src/components/Input';

//react-navigation container
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }


class App extends Component {

  state = {
    greeting: 'Selamat Datang. Welcome'
  }
  
  render(){
    return (
      <View style={styles.container}>
      <Greeting text={this.state.greeting}/>
      {/* <Header/>  */}
      <Text>{this.state.greeting}</Text>
      <Input/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;