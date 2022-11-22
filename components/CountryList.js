import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { countries } from '../assets/data/data'
import CountryDetails from './CountryDetails'

const CountryList = ({onValuePicked, searched}) => {

    const [flatListValue, setFlatListValue] = useState([]);

    useEffect(()=>{

        if(searched !== ""){

            var pattern = new RegExp(searched);

            var newCountryList = countries.filter(country => pattern.test(country.name) || pattern.test(country.code))

            setFlatListValue(newCountryList);

        }else{
            setFlatListValue(countries);
        }
        
    }, [searched])

  return (

    <>
        <View style={{paddingVertical: 20, paddingBottom: 90}}>

            <SafeAreaView>

                <FlatList 
                    initialNumToRender={countries.length}
                    style={{width: "100%", height: "auto"}}
                    data={flatListValue}
                    extraData={flatListValue}
                    renderItem={({item}) => <CountryDetails onValuePicked={onValuePicked} item={item} />}
                    keyExtractor={item=>item.code}
                />

            </SafeAreaView>
        </View>
    </>

    
  )

}

export default CountryList

const styles = StyleSheet.create({})