import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import Images from '../../../../global/AssetsImages';
import styles from './styles';
import Colors from '../../../../global/Colors';
import Header from '../../../../components/Header';

class VarifyKeyStep1 extends Component {
 
  onNextButtonPressed() {
  
    this.props.navigator.push({
      screen: 'Pangea.VarifyKeyStep3',
    });
  }
  
  onCancelButtonPressed(){
      alert('cancel');
  }

  render() {
    return(

            <View style= {styles.container}> 
                <Image
                    style ={styles.backgroundImage}
                    source ={Images.background}
                />

                <Header leftButtonDisabled rightButtonTitle='New' onRightButtonPress={() => this.onNextButtonPressed()}></Header>
                <Text style ={styles.title}>Verify Private Key</Text>
                <View style ={styles.wholeText}>

                  <Text style ={styles.description}>Now that you have written down your private key, we will ask you to verify it.</Text>
                  <Text style ={styles.description}>You will type the 12 words of your private key into the app, and we will check that your written private key is correct.</Text>
                  <Text style ={styles.description}>Your private key protects everything in Bitnation, so be sure to put your paper with your private key in a safe place.</Text>

              </View>

              <View style={styles.buttonContainer}>                
                    <TouchableOpacity onPress={() => this.onNextButtonPressed()}>
                      <View style={styles.buttonStyle}>
                          <Text style={styles.buttonText}>Begin</Text>
                      </View>
                    </TouchableOpacity>
              </View>
            </View>
        );
    }
}

VarifyKeyStep1.propTypes = {
};

VarifyKeyStep1.defaultProps = {
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(VarifyKeyStep1);