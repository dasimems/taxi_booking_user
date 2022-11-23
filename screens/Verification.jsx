import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { HeaderOne } from '../components';
import { colors, icons } from '../assets/data/data';

const Verification = ({navigation}) => {

  const {parentContainerStyle, h1, p} = AllStyle;
  const [codes, setCodes] = useState({
    codeOne: "",
    codeTwo: "",
    codeThree: "",
    codeFour: ""
  });

  const [wrongCode, setWrongCode] = useState(false)

  const [codeResent, setCodeResent] = useState(false)

  const [belowText, setBelowText] = useState("Enter 4 digit Code")

  const codeTwoRef = useRef(),
        codeOneRef = useRef(),
        codeThreeRef = useRef(),
        codeFourRef = useRef();

  const verify = useCallback(()=>{
    var {codeOne, codeTwo, codeThree, codeFour} = codes;
    var allCode = `${codeOne}${codeTwo}${codeThree}${codeFour}`;
    if(allCode !== "5555"){
      setWrongCode(true);
      setCodes({ 
        codeOne: "",
        codeTwo: "",
        codeThree: "",
        codeFour: ""

      })
      codeOneRef.current.focus();
    }else{

      

    }
  }, [codes])

  useEffect(()=>{

    var {codeOne, codeTwo, codeThree, codeFour} = codes;

      if(codeOne !== "" || codeTwo !== "" || codeThree !== "" || codeFour !== ""){
        setBelowText("")
      }else if(wrongCode){
        setBelowText("Invalid Code!")
      }

      if(codeOne !== "" && codeTwo !== "" && codeThree !== "" && codeFour !== ""){
        verify();
      }

  }, [codes, wrongCode])

  return (
    <SafeAreaView>
        <ScrollView scrollEnabled={true} contentContainerStyle={{...parentContainerStyle, width: "100%", height: "100%", justifyContent: "space-between"}}>

          <View style={{width: "100%", paddingHorizontal: 20}}>

            <HeaderOne></HeaderOne>

            <View style={{width: "100%", alignItems: "center"}}>

              <Image source={icons.mailSent} style={{width: 70, height: 70, resizeMode: "contain"}} />

              <Text style={{...h1, marginTop: 30}}>Verification</Text>

              <Text style={{...p}}>Enter Verification code that is sent to <Text style={{color: "black"}}>+2349036634645</Text> by SMS</Text>

            </View>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 80}}>

              <View style={{...styles.inputBox, borderWidth: wrongCode? 1: 0, borderColor: wrongCode? "red": "none"}}>
                <TextInput
                  style={{...styles.codeInputStyle, color: wrongCode? "rgba(255, 20, 20, .6)" : "black" }}
                  value={codes.codeOne}
                  keyboardType="number-pad"
                  ref={codeOneRef}
                  cursorColor={wrongCode? "rgba(255, 20, 20, .6)" : "rgba(0, 0, 0, .5)"}
                  onChangeText={(text)=>{
                    var value = text;

                    if(value.toString().length > 1){
                      value = text.slice(1,);
                    }
                    setCodes(prevState=> {
                      return({
                        ...prevState,
                        codeOne: value
                      })
                    })

                    setWrongCode(false)

                    if(value !== ""){
                      codeTwoRef.current.focus();
                    }
                  }}
                
                />
              </View>

              <View style={{...styles.inputBox, borderWidth: wrongCode? 1: 0, borderColor: wrongCode? "red": "none"}}>
                <TextInput
                  style={{...styles.codeInputStyle, color: wrongCode? "rgba(255, 20, 20, .6)" : "black" }}
                  value={codes.codeTwo}
                  keyboardType="number-pad"
                  ref={codeTwoRef}
                  cursorColor={wrongCode? "rgba(255, 20, 20, .6)" : "rgba(0, 0, 0, .5)"}
                  onChangeText={(text)=>{
                    var value = text;

                    if(value.toString().length > 1){
                      value = text.slice(1,);
                    }
                    setCodes(prevState=> {
                      return({
                        ...prevState,
                        codeTwo: value
                      })
                    })

                    setWrongCode(false)

                    if(value !== ""){
                      codeThreeRef.current.focus();
                    }
                  }}
                
                />
              </View>

              <View style={{...styles.inputBox, borderWidth: wrongCode? 1: 0, borderColor: wrongCode? "red": "none"}}>
                <TextInput
                  style={{...styles.codeInputStyle, color: wrongCode? "rgba(255, 20, 20, .6)" : "black" }}
                  value={codes.codeThree}
                  keyboardType="number-pad"
                  ref={codeThreeRef}
                  cursorColor={wrongCode? "rgba(255, 20, 20, .6)" : "rgba(0, 0, 0, .5)"}
                  onChangeText={(text)=>{
                    var value = text;

                    if(value.toString().length > 1){
                      value = text.slice(1,);
                    }
                    setCodes(prevState=> {
                      return({
                        ...prevState,
                        codeThree: value
                      })
                    })

                    setWrongCode(false)

                    if(value !== ""){
                      codeFourRef.current.focus();
                    }
                  }}
                
                />
              </View>

              <View style={{...styles.inputBox, borderWidth: wrongCode? 1: 0, borderColor: wrongCode? "red": "none"}}>
                <TextInput
                  style={{...styles.codeInputStyle, color: wrongCode? "rgba(255, 20, 20, .6)" : "black" }}
                  value={codes.codeFour}
                  keyboardType="number-pad"
                  ref={codeFourRef}
                  cursorColor={wrongCode? "rgba(255, 20, 20, .6)" : "rgba(0, 0, 0, .5)"}
                  onChangeText={(text)=>{
                    var value = text;

                    if(value.toString().length > 1){
                      value = text.slice(1,);
                    }
                    setCodes(prevState=> {
                      return({
                        ...prevState,
                        codeFour: value
                      })
                    })

                    setWrongCode(false)
                  }}
                
                />
              </View>

            </View>

            <Text style={{textAlign: "center",fontSize: 14, color:wrongCode? "rgba(255, 20, 20, .5)" : "rgba(0, 0, 0, .4)", marginTop: 7}}>{belowText}</Text>


            
          </View>

          {codeResent? <Text style={{color: "rgba(0, 0, 0, .5)"}}>Resend Code (0:30s)</Text> :<TouchableOpacity >
            <Text style={{color: colors.primary, fontSize: 18}}>Resend Code</Text>
          </TouchableOpacity>}


        </ScrollView>

    </SafeAreaView>
  )
}

export default Verification

const styles = StyleSheet.create({

  inputBox: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "rgba(0, 0, 0, .05)",
    alignItems: "center",
    justifyContent: "center"

  },

  codeInputStyle: {
    textAlign: "center",
    fontSize: 20

  }
})