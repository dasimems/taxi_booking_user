import { memo } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import AllStyle from "../assets/styles/Styles";

const CountryDetails = ({item, onValuePicked}) => {

    const {pDefault} = AllStyle;

    return(

        <TouchableOpacity onPress={()=>{
            onValuePicked(item)
        }} style={{marginVertical: 10}}>

            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                <View style={{flexDirection: "row", alignItems: "center"}}>

                    <Image source={{uri: `https://countryflagsapi.com/png/${item.code.toLowerCase()}`}} style={{width: 30, height: 30, resizeMode: "cover", borderRadius: 30}} />

                    <Text style={{...pDefault, marginLeft: 20}}>{item.name}</Text>

                </View>

                <Text>{item["dial_code"]}</Text>
            </View>

        </TouchableOpacity>
    )

}

export default memo(CountryDetails);