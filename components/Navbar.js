import React from 'react';
import Logo from '../assets/appAssets/logo.svg';
import { StyleSheet, View } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Navbar() {
  return (
    <View style={styles.container}>
        
        <View style={styles.titleContainer}>
            <Logo style={styles.logo} width={130} />
            {/* <View style={styles.badge}>
                <Text style={styles.badgeTitle}>COVID-19</Text>
            </View> */}
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   maxHeight : '100%',
   overflow : 'hidden',
   flex : 1,
  },
  logo:{
    marginTop : RFPercentage(2)
  },
  titleContainer: {
      flexDirection : 'row',
      paddingLeft : RFPercentage(3),
      height : '100%',
      overflow : 'hidden',
  },
  title : {
    color:'#fff',
    paddingLeft: 15,
    fontSize : RFPercentage(2.2),
    fontWeight : "bold",
  },
  badge: {
    backgroundColor : '#FEB9D3',
    color : '#040932',
    textTransform : "uppercase",
    borderRadius : 50,
    marginLeft:10,
    paddingHorizontal : 10,
    justifyContent :"center",
    alignItems : 'center',
  },
  badgeTitle: {
    fontWeight : "bold",
  },
});