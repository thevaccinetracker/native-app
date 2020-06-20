import React , {useState,useEffect} from 'react';
import Maps from '../assets/appAssets/background.svg';
import Exploratory_stage from '../assets/appAssets/exploratory_stage.svg';
import PreClinical from '../assets/appAssets/preClinical.svg';
import ApprovalIcon from '../assets/appAssets/approval_stage.svg';
import ProductionIcon from '../assets/appAssets/production_stage.svg';
import HumanTrialsIcon from '../assets/appAssets/human_trials.svg';
import { Entypo } from '@expo/vector-icons';

import { StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, 
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { RFPercentage } from "react-native-responsive-fontsize";
import Tabletop from '../node_modules/tabletop';
import {ProgressBar} from "react-native-multicolor-progress-bar";


export default function Homepage() {

  const [onGoingStage1, setonGoingStage1] = useState(null)
  const [onGoingStage2, setonGoingStage2] = useState(null)
  const [onGoingStage3, setonGoingStage3] = useState(null)
  const [onGoings3Phase1, setonGoings3Phase1] = useState(null)
  const [onGoings3Phase2, setonGoings3Phase2] = useState(null)
  const [onGoings3Phase3, setonGoings3Phase3] = useState(null)
  const [onGoingStage4, setonGoingStage4] = useState(null)
  const [onGoingStage5, setonGoingStage5] = useState(null)

  const [successStage1, setsuccessStage1] = useState(null)
  const [successStage2, setsuccessStage2] = useState(null)
  const [successStage3, setsuccessStage3] = useState(null)
  const [successs3Phase1, setsuccesss3Phase1] = useState(null)
  const [successs3Phase2, setsuccesss3Phase2] = useState(null)
  const [successs3Phase3, setsuccesss3Phase3] = useState(null)
  const [successStage4, setsuccessStage4] = useState(null)
  const [successStage5, setsuccessStage5] = useState(null)
  const [totalVaccines, settotalVaccines] = useState (null)

  const [loading, setloading] = useState(true)

  const fetchInfo = () => {
    return (
      Tabletop.init({
          key: '1ImpYv9-_qKmF8JkdV8YW1tN8IAycPszPpG6VCn-rH4Q',
          callback: virusInfo => {
            let ongoingStage = virusInfo.VaccineCounts.elements[0];
            let successStage = virusInfo.VaccineCounts.elements[1];

            setonGoingStage1(ongoingStage.stage1);
            setonGoingStage2(ongoingStage.stage2);
            setonGoingStage4(ongoingStage.stage4);
            setonGoingStage5(ongoingStage.stage5);

            setonGoings3Phase1(ongoingStage.s3Phase1);
            setonGoings3Phase2(ongoingStage.s3Phase2);
            setonGoings3Phase3(ongoingStage.s3Phase3);

            setsuccessStage1(successStage.stage1);
            setsuccessStage2(successStage.stage2);
            setsuccessStage4(successStage.stage4);
            setsuccessStage5(successStage.stage5);

            setsuccesss3Phase1(successStage.s3Phase1);
            setsuccesss3Phase2(successStage.s3Phase2);
            setsuccesss3Phase3(successStage.s3Phase3);

            settotalVaccines(virusInfo.vaccineData.elements.length);

            setonGoingStage3(parseInt(ongoingStage.s3Phase1)+parseInt(ongoingStage.s3Phase2)+parseInt(ongoingStage.s3Phase3));
            setsuccessStage3(parseInt(successStage.stage4)+parseInt(successStage.stage5));

            setloading(false);
          }
      })
    )
  }


  useEffect(() => {
    fetchInfo();
  })
  
  const ExploratoryStage = () => {
    return (
      (loading === true) ? <ActivityIndicator 
        size={RFPercentage(4)} 
        color="#FEB9D3" 
        animating={loading}
        style={styles.detailsData}
      /> : <Text style={styles.detailsData}> {onGoingStage1} </Text> 
    )
  }

  const PreClinicalStage = () => {
    return (
      (loading === true) ? <ActivityIndicator 
        size={RFPercentage(4)} 
        color="#FEB9D3" 
        animating={loading}
        style={styles.detailsData}
      /> : <Text style={styles.detailsData}> {onGoingStage2} </Text> 
    )
  }

  const HumanTrialsStage = () => {
    return (
      (loading === true) ? <ActivityIndicator 
        size={RFPercentage(4)} 
        color="#FEB9D3" 
        animating={loading}
        style={styles.detailsData}
      /> :  <View style={styles.HumanTrialsInfoRow}>
              <View style={styles.HumanTrialsDataSubContainer}>
                <Text style={styles.detailsData}> {onGoings3Phase1} </Text> 
                <Text style={styles.HumanTrialsSubHeadings}> S3 : Phase 1 </Text> 
              </View>
              <View style={styles.HumanTrialsDataSubContainer}>
                <Text style={styles.detailsData}> {onGoings3Phase2} </Text> 
                <Text style={styles.HumanTrialsSubHeadings}> S3 : Phase 2 </Text> 
              </View>
              <View style={styles.HumanTrialsDataSubContainer}>
                <Text style={styles.detailsData}> {onGoings3Phase3} </Text> 
                <Text style={styles.HumanTrialsSubHeadings}> S3 : Phase 3 </Text> 
              </View>
            </View> 
    )
  }

  const ApprovalStage = () => {
    return (
      (loading === true) ? <ActivityIndicator 
        size={RFPercentage(4)} 
        color="#FEB9D3" 
        animating={loading}
        style={styles.detailsData}
      /> : <Text style={styles.detailsData}> {onGoingStage4} </Text> 
    )
  }

  const ProductionStage = () => {
    return (
      (loading === true) ? <ActivityIndicator 
        size={RFPercentage(4)} 
        color="#FEB9D3" 
        animating={loading}
        style={styles.detailsData}
      /> : <Text style={styles.detailsData}> {onGoingStage5} </Text> 
    )
  }

  return (
    <View style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={styles.subHeadingContainer}>
            <Text 
              style={styles.heading}
            >
              COVID-19 Vaccine{"\n"}Tracker
            </Text>
          </View>
        </View>
        
        <View style={styles.bodyContainer}>
          <SafeAreaView style={styles.cardContainer}>
            <ScrollView 
              horizontal={true} 
              contentContainerStyle={styles.cardScroll}
              showsHorizontalScrollIndicator={false}
            >
              {/* Exploratory Stages Starts */}

              <View style={styles.vaccineInfoContainer}>
                
                <Maps style={styles.map} height = {'100%'} width={'100%'}/>
                
                <View style={styles.vaccineIconContainer}>
                  <Exploratory_stage/>
                </View>

                <View style={styles.detailsContainer}>
                  
                  <View style={styles.detailsHedingContainer}>  
                    <Text style={styles.detailsHeading}>Exploratory{"\n"}Stage</Text>
                  </View>

                  <View style={styles.detailsSubHedingContainer}>  
                    <Text style={styles.detailsSubHeading}>Stage 1</Text>
                  </View>
                  
                  <View style={styles.detailsDataContainer}>
                    <ExploratoryStage/>
                  </View>

                  <View style={styles.cradBottomDetails}> 
                    
                    <View style={styles.barContainer}>
                      <ProgressBar
                        backgroundBarStyle = {{borderRadius : 2,height : 4,backgroundColor :'#040932'}}
                        arrayOfProgressObjects={[
                          {
                            color: '#ffa502',
                            value: parseInt(onGoingStage1) / parseInt(totalVaccines),
                          },
                          {
                            color: '#16a716',
                            value: parseInt(successStage1) / parseInt(totalVaccines),
                          },
                        ]}
                      />
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#ffa502" />
                      <Text style={styles.barHeading}> Ongoing </Text> 
                      <Text style={styles.barFraction}> {onGoingStage1}/{totalVaccines} </Text> 
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#16a716" />
                      <Text style={styles.barHeading}> Success </Text> 
                      <Text style={styles.barFraction}> {successStage1}/{totalVaccines} </Text> 
                    </View>

                  </View>

                </View>
              </View>

              {/* Exploratory Stages Ends */}

              {/* Pre Clinical Stage Starts */}
              <View style={styles.vaccineInfoContainer}>
                
                <Maps style={styles.map} height = {'100%'} width={'100%'}/>

                <View style={styles.vaccineIconContainer}>
                  <PreClinical/>
                </View>

                <View style={styles.detailsContainer}>
                  
                  <View style={styles.detailsHedingContainer}>  
                    <Text style={styles.detailsHeading}>Pre Clinical{"\n"}Stage</Text>
                  </View>

                  <View style={styles.detailsSubHedingContainer}>  
                    <Text style={styles.detailsSubHeading}>Stage 2</Text>
                  </View>
                  
                  <View style={styles.detailsDataContainer}>
                    <PreClinicalStage/>
                  </View>

                  <View style={styles.cradBottomDetails}> 
                    
                    <View style={styles.barContainer}>
                      <ProgressBar
                        backgroundBarStyle = {{borderRadius : 2,height : 4,backgroundColor :'#040932'}}
                        arrayOfProgressObjects={[
                          {
                            color: '#ffa502',
                            value: parseInt(onGoingStage2) / parseInt(totalVaccines),
                          },
                          {
                            color: '#16a716',
                            value: parseInt(successStage2) / parseInt(totalVaccines),
                          },
                        ]}
                      />
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#ffa502" />
                      <Text style={styles.barHeading}> Ongoing </Text> 
                      <Text style={styles.barFraction}> {onGoingStage2}/{totalVaccines} </Text> 
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#16a716" />
                      <Text style={styles.barHeading}> Success </Text> 
                      <Text style={styles.barFraction}> {successStage2}/{totalVaccines} </Text> 
                    </View>

                  </View>

                </View>
              </View>
              {/* Pre Clinical Stage Starts */}

              {/* Human Trials Starts */}
              <View style={styles.HumanTrialsInfoContainer}>
                
                <Maps style={styles.map} height = {'100%'} width={'100%'}/>

                <View style={styles.vaccineIconContainer}>
                  <HumanTrialsIcon/>
                </View>

                <View style={styles.detailsContainer}>
                  
                  <View style={styles.detailsHedingContainer}>  
                    <Text style={styles.detailsHeading}>Human Trials{"\n"}Stage</Text>
                  </View>

                  <View style={styles.detailsSubHedingContainer}>  
                    <Text style={styles.detailsSubHeading}>Stage 3</Text>
                  </View>
                  
                  <View style={styles.HumanTrialsDataContainer}>
                    <HumanTrialsStage/>
                  </View>

                  <View style={styles.HumanTrialscradBottomDetails}> 
                    
                    <View style={styles.barContainer}>
                      <ProgressBar
                        backgroundBarStyle = {{borderRadius : 2,height : 4,backgroundColor :'#040932'}}
                        arrayOfProgressObjects={[
                          {
                            color: '#ffa502',
                            value: parseInt(onGoingStage3) / parseInt(totalVaccines),
                          },
                          {
                            color: '#16a716',
                            value: parseInt(successStage3) / parseInt(totalVaccines),
                          },
                        ]}
                      />
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#ffa502" />
                      <Text style={styles.barHeading}> Ongoing </Text> 
                      <Text style={styles.barFraction}> {onGoingStage3}/{totalVaccines} </Text> 
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#16a716" />
                      <Text style={styles.barHeading}> Success </Text> 
                      <Text style={styles.barFraction}> {successStage3}/{totalVaccines} </Text> 
                    </View>

                  </View>

                </View>
              </View>
              {/* Human Trials Ends */}

              {/* Approval Stage Starts */}
              
              <View style={styles.vaccineInfoContainer}>
                
                <Maps style={styles.map} height = {'100%'} width={'100%'}/>

                <View style={styles.vaccineIconContainer}>
                  <ApprovalIcon/>
                </View>

                <View style={styles.detailsContainer}>
                  
                  <View style={styles.detailsHedingContainer}>  
                    <Text style={styles.detailsHeading}>Approval{"\n"}Stage</Text>
                  </View>

                  <View style={styles.detailsSubHedingContainer}>  
                    <Text style={styles.detailsSubHeading}>Stage 4</Text>
                  </View>
                  
                  <View style={styles.detailsDataContainer}>
                    <ApprovalStage/>
                  </View>

                  <View style={styles.cradBottomDetails}> 
                    
                    <View style={styles.barContainer}>
                      <ProgressBar
                        backgroundBarStyle = {{borderRadius : 2,height : 4,backgroundColor :'#040932'}}
                        arrayOfProgressObjects={[
                          {
                            color: '#ffa502',
                            value: parseInt(onGoingStage4) / parseInt(totalVaccines),
                          },
                          {
                            color: '#16a716',
                            value: parseInt(successStage4) / parseInt(totalVaccines),
                          },
                        ]}
                      />
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#ffa502" />
                      <Text style={styles.barHeading}> Ongoing </Text> 
                      <Text style={styles.barFraction}> {onGoingStage4}/{totalVaccines} </Text> 
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#16a716" />
                      <Text style={styles.barHeading}> Success </Text> 
                      <Text style={styles.barFraction}> {successStage4}/{totalVaccines} </Text> 
                    </View>

                  </View>

                </View>
              </View>

              {/* Approval Stage Ends */}

              {/* Production Stage Starts */}
              
              <View style={styles.vaccineInfoContainer}>
                
                <Maps style={styles.map} height = {'100%'} width={'100%'}/>

                <View style={styles.vaccineIconContainer}>
                  <ProductionIcon/>
                </View>

                <View style={styles.detailsContainer}>
                  
                  <View style={styles.detailsHedingContainer}>  
                    <Text style={styles.detailsHeading}>Production{"\n"}Stage</Text>
                  </View>

                  <View style={styles.detailsSubHedingContainer}>  
                    <Text style={styles.detailsSubHeading}>Stage 5</Text>
                  </View>
                  
                  <View style={styles.detailsDataContainer}>
                    <ProductionStage/>
                  </View>

                  <View style={styles.cradBottomDetails}> 
                    
                    <View style={styles.barContainer}>
                      <ProgressBar
                        backgroundBarStyle = {{borderRadius : 2,height : 4,backgroundColor :'#040932'}}
                        arrayOfProgressObjects={[
                          {
                            color: '#ffa502',
                            value: parseInt(onGoingStage5) / parseInt(totalVaccines),
                          },
                          {
                            color: '#16a716',
                            value: parseInt(successStage5) / parseInt(totalVaccines),
                          },
                        ]}
                      />
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#ffa502" />
                      <Text style={styles.barHeading}> Ongoing </Text> 
                      <Text style={styles.barFraction}> {onGoingStage5}/{totalVaccines} </Text> 
                    </View>

                    <View style= {styles.barInfo}>
                      <Entypo style = {styles.dotIcon} name="dot-single" color="#16a716" />
                      <Text style={styles.barHeading}> Success </Text> 
                      <Text style={styles.barFraction}> {successStage5}/{totalVaccines} </Text> 
                    </View>

                  </View>

                </View>
              </View>

              {/* Production Stage Ends */}
            </ScrollView>
          </SafeAreaView>
        </View>

        <View style={styles.footerContainer}>
            <Text style={styles.footer}>We will be launching the detailed information version soon</Text>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : '2%',
    maxHeight : '100%',
    overflow : 'hidden',
    flex : 8,
  },
  cardContainer :{
    flex:1 ,
    justifyContent : 'center',
    marginTop : 20,
  },
  cardScroll :{
    flexDirection : 'row',
    justifyContent : 'center',
    height : '100%',
  },
  map : {
    position :'absolute',
    zIndex : -9999,
    left : 0,
    right : 0,
    height : '100%',
    width : '100%',
    marginHorizontal : 10,
    transform : [{scale : 1.1}],
  },
  headingContainer: {
    width : '100%',
    alignItems : 'center',
    maxHeight : '15%',
  },
  subHeadingContainer : {
    maxWidth : 300,
    justifyContent : 'center',
  },
  heading : {
    color:'#fff',
    fontSize : RFPercentage(3.5),
    fontWeight : "bold",
    textAlign : "center",
    marginBottom : 5,
  },
  bodyContainer:{
    minHeight:'60%',   
    overflow : "hidden",
    alignItems : 'center',
    justifyContent : 'center',
  },
  HumanTrialsInfoContainer : {
    backgroundColor:'#0F1243',
    marginHorizontal:10,
    marginVertical : 10,
    height : '90%',
    width:RFPercentage(40),
    borderRadius:8,
    borderColor : '#040932',
    borderWidth : 1,
    padding:10,
    overflow : "hidden",

  },
  HumanTrialsInfoRow : {
    flexDirection : 'row',
    width : '100%',
  },
  HumanTrialsSubHeadings : {
    fontSize : RFPercentage(1.1),
    marginTop : RFPercentage(1),
    color : '#FEB9D3',
    fontFamily : 'Roboto',
    fontStyle : 'normal',
  },
  HumanTrialsDataSubContainer : {
    marginRight : RFPercentage(3),
  },
  vaccineInfoContainer:{
    backgroundColor:'#0F1243',
    marginHorizontal:10,
    marginVertical : 10,
    height : '90%',
    width:RFPercentage(30),
    borderRadius:8,
    borderColor : '#040932',
    borderWidth : 1,
    padding:10,
    overflow : "hidden",
  },
  vaccineIconContainer:{
    padding: 15,
    width:'100%',
    height : '20%',
    borderRadius:6,
  },
  detailsContainer:{
    padding:15,
    width:'100%',
    height:'80%',
    borderRadius:6,
    overflow : 'hidden',
  },
  detailsSubHedingContainer:{
    marginTop : RFPercentage(3),
  },
  detailsSubHeading : {
    fontSize : RFPercentage(1.6),
    color : '#FEB9D3',
    fontFamily : 'Roboto'
  },
  detailsHedingContainer : {
    width : '100%'
  },
  detailsHeading:{
    fontSize:RFPercentage(3.2),
    lineHeight:RFPercentage(4),
    color: "#fff",
    fontFamily : 'Roboto',
    fontStyle : 'normal',
    fontWeight : 'normal',
    
  },
  detailsDataContainer : {
    marginTop : RFPercentage(5),
  },
  HumanTrialsDataContainer : {
    marginTop : RFPercentage(5),
  },
  detailsData : {
      fontSize: RFPercentage(3),
      lineHeight:RFPercentage(3),
      fontWeight:"bold",
      color : '#fff',
  },

  HumanTrialscradBottomDetails : {
    marginTop : RFPercentage(4.5),
    height : 80,
  },

  cradBottomDetails : {
    marginTop : RFPercentage(7.8),
    height : 80,
  },
  barInfo : {
    flexDirection : 'row',
    marginVertical : 3,
  },
  barHeading:{
    color : '#fff',
    textAlignVertical : 'center',
    fontSize : RFPercentage(1.2),
  },
  barFraction : {
    textAlignVertical : 'center',
    marginLeft : 'auto',
    color : '#ffffff',
    fontSize : RFPercentage(1.2),
  },
  dotIcon :{
    textAlignVertical : 'center',
    fontSize : RFPercentage(2),
  },
  barContainer : {
   marginBottom : 5,
  },
  footerContainer:{
      justifyContent:"center",
      height:50,
      alignItems : 'center',
      marginVertical : 10,
  },
  footer:{
      textAlign:"center",
      color:"#fff",
      fontSize : RFPercentage(1.3),
  },
});