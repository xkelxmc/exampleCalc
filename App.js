import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Calc} from './src/Calc';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
      <StatusBar barStyle={'light-content'} />
      <Calc />
    </SafeAreaView>
  );
};

export default App;
