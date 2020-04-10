import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Header from './Header';
import Greeting from './src/components/Greeting';

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
  // constructor(){
  //   super();
  //   this.state = {
  //     greeting= 'Selamat Datang. Welcome'
  //   }
  // }
  
  state = {
    greeting: 'Selamat Datang. Welcome'
  }
  
  render(){
    return (
      <View style={styles.container}>
      <Greeting text={this.state.greeting}/>
      {/* <Header/>  */}
      <Text>Selamat Datang!</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;