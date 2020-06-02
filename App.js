import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class meuApp extends Component {

  constructor(props){
    super(props);
    this.state = {Consumido:0, Status:'Ruim', pct:'0%'};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar(){
    let s = this.state;
    s.pct = Math.floor((s.Consumido/2000)*100);

     if(s.pct >= 100){
      s.Status = 'Excelente!';
    }
    else {
      s.Status = 'Ruim';
    }
    s.pct +='%';
    this.setState(s);
  }

  addCopo(){
    let s = this.state;
    s.Consumido += 200;
    this.setState(s)

    this.atualizar();

  }

    render(){
      return(
        <View style={styles.body}>
          <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <View>
                  <View style={styles.infoArea}>
                    <View style={styles.area}>
                      <Text style={styles.areaTitulo}>Meta</Text>
                        <Text style={styles.areaDados}>2000ml</Text>
                    </View>

                    <View style={styles.area}>
                      <Text style={styles.areaTitulo}>Consumido</Text>
                        <Text  style={styles.areaDados}>{this.state.Consumido}ml</Text>
                    </View>

                    <View style={styles.area}> 
                      <Text style={styles.areaTitulo}>Status</Text>
                        <Text  style={styles.areaDados}>{this.state.Status}</Text>
                    </View>
                  </View>

                    <View style={styles.pctArea}>
                      <Text style={styles.pctTexto}>{this.state.pct}</Text>
                    </View>

                    <View style={styles.btnArea}>
                      <Button title='Beber 200ml' onPress={this.addCopo} />

                    </View>

           </View>    
                
        
          </ImageBackground>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      paddingTop:50
    },
    bgimage:{
      flex:1,
      width:null
    }, 
    infoArea:{
      flex:1,
      flexDirection:'row',
      marginTop:70

    },
    area:{
      flex:1,
      alignItems:'center'
    },
    areaTitulo:{
      fontSize:20,
      fontWeight:'bold',
      color:'#45b2fc'
    },
    areaDados:{
      color:'#2b4274',
      fontSize:20,
      fontWeight:'bold'
    },
    pctArea:{
      alignItems:'center',
      marginTop:170
    },
    pctTexto:{
      fontSize:70,
      
      color:'white',
      backgroundColor:'transparent'
    },
    btnArea:{
      marginTop:30,
      alignItems:'center'
    }
});