import React from 'react';
import { Text, View} from 'react-native';

export default class InstagramScreen extends React.Component {
     render(){
         return(
             <View style = {{flex: 1, justifyContent: 'cneter', alignItems: 'center'}}>
                 <Text>Instagram is Loading ...</Text>
             </View>
         )
     }
}