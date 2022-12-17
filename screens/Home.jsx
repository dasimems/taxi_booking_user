import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import AllStyle from '../assets/styles/Styles'
import { Button, Header, Modal, Nav } from '../components';
import { useParamsContext } from '../context';
import { colors, icons, images, passengers, statusBarHeight, windowHeight, windowWidth } from '../assets/data/data';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, Ionicons, Entypo, Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const HomeScreen = ({ route, navigation }) => {
    const { parentContainerStyle } = AllStyle;
    const { active } = route.params;
    const { setActiveParam } = useParamsContext();
    const [headerHeight, setHeaderHeight] = useState(0)
    const [navHeight, setNavHeight] = useState(0)
    const [userDetails, setUserDetails] = useState({
        userType: "passenger"
    })

    const [bottomContainerHeight, setBottomContainerHeight] = useState(0)
    const [mainContainerHeight, setMainContainerHeight] = useState(0)
    const [selectedId, setSelectedId] = useState("");
    const [passengerDetails, setPassengerDetails] = useState(null);
    const [start, setStart] = useState(false)
    const [agreement, setAgreement] = useState({
        price: false,
        cancelation: false
    })
    const [agreementButton, setAgreementButton] = useState(true)
    const [accept, setAccept] = useState(false);
    const [letsGo, setLetsGo] = useState(false);
    const [userAcceptConfirmation, setUserAcceptConfirmation] = useState(false)
    const [requestCanceled, setRequestCanceled] = useState(false)
    const [userAccepts, setUserAccepts] = useState(false);
    const [destinationReached, setDestinationReached] = useState(false);
    const [cancelRequest, setCancelRequest] = useState(false);
    const [activeStar, setActiveStar] = useState(0)
    const [comment, setComment] = useState("")
    const [finishButtonDisabled, setFinishButtonDisabled] = useState(true)

    useEffect(()=>{
        var {price, cancelation} = agreement
        if(price && cancelation){
            setAgreementButton(false);
        }else{
            setAgreementButton(true);

        }
    }, [agreement])

    useEffect(()=>{

        if(comment !== "" && parseInt(activeStar) !== 0){

            setFinishButtonDisabled(false)

        }

    }, [comment, activeStar])

    useEffect(()=>{

        if(userAcceptConfirmation){

            setUserAccepts(true);
        }

    }, [userAcceptConfirmation])


    useEffect(() => {

        setActiveParam(active);

    }, [active])

    useEffect(()=>{

        var details = passengers.filter(passenger => passenger.id === selectedId);

        if(details.length > 0){
            setPassengerDetails(details[0])
        }else{
            setPassengerDetails(null)
        }

    }, [selectedId])

    const { h1, loginInput } = AllStyle;

    const getPImages = (num) => {
        var result = []

        if(num){

            for(var i = 0; i < num; i++){
                var sn = (i + 1)
                result.push(
                    <View key={i} style={{width: 30, height: 30, borderRadius: 100, marginLeft: i > 0? 10: 0, overflow: "hidden"}}>
                        <Image source={passengerDetails?.profileImage} style={{height: "100%", width: "100%", resizeMode: "contain"}} />

                        <View style={{position: "absolute", zIndex: 1, height: "100%", width: "100%", backgroundColor: "rgba(0, 0, 0, .3)", borderRadius: 100, alignItems: "center", justifyContent: "center"}}>
                            <Text style={{color: "white"}}>{sn}</Text>
                        </View>

                    </View>
                )
            }
        }
        return result;
    }

    const getStars = useCallback((total, active) => {

        var stars = [];

        if(total){

           

            for(var i = 0; i < total; i++){
                
                var sn= (i + 1);

                stars.push(
                    
                    <FontAwesome name="star" color={sn <= parseInt(active)? colors.secondary : "rgba(0, 0, 0, .1)"} size={36} />
                )

            }

        }

        return stars;

    }, [])

    const cancelCancelRequest = useCallback(()=>{
        setCancelRequest(false)

        if(setUserAcceptConfirmation){
            setUserAccepts(true)
        }else{
            setLetsGo(true);
        }
        
    },[setUserAcceptConfirmation])


    const openDestinationModal = useCallback(()=>{
        console.log(requestCanceled)

        if (requestCanceled) {
            setRequestCanceled(false)
            setUserAcceptConfirmation(false)


        } else {

            // setUserAcceptConfirmation(true)
        }


    }, [requestCanceled])


    return (
        <SafeAreaView>

            <Header style={{paddingHorizontal: 0, position: "absolute", backgroundColor: 'transparent'}} onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setHeaderHeight(height)

            }}>

                {!start && <LinearGradient colors={['#ffffff', 'transparent']} style={{flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 20}}>

                    <TouchableOpacity style={{backgroundColor: "white", borderRadius: 10, padding: 5, marginTop: 20}} onPress={()=>{
                        navigation.navigate("AllNotification");
                        setActiveParam("Notification")
                    }}>

                        <View>
                            <Feather name="bell" size={24} color="black" />

                            <View style={{width: 7, height: 7,borderRadius: 10, backgroundColor: "rgb(255, 50,20)", position: "absolute", top: 1, right: 2, zIndex: 1}}></View>

                        </View>

                    </TouchableOpacity>
                    
                </LinearGradient>}
                
            </Header>


            <View style={{ height: "100%"}}>

                <ScrollView onLayout={()=>{

                }} scrollEnabled={true} contentContainerStyle={{ ...parentContainerStyle, width: "100%", height: "100%", justifyContent: "space-between", backgroundColor: "rgba(0, 0, 0, .2)", paddingBottom: (navHeight - 3), paddingTop: 0 }}>

                    
                    <View style={{flex: 1, width: "100%", }}>

                        {start && <View style={{position: "absolute", top: 0, width: "100%", padding: 20, backgroundColor: "white", zIndex: 9, flexDirection: "row", alignItems: "flex-start", paddingTop: (statusBarHeight + 20)}}>

                            <TouchableOpacity onPress={()=>{
                                setStart(false)
                            }}>
                                <Fontisto name="angle-left" color="black" size={18} />
                            </TouchableOpacity>

                            <View style={{flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", flex: 1}}>

                                <View style={{alignItems: "center", height: 50}}>

                                    <View style={{ width: 7, height: 7, borderRadius: 50, backgroundColor: colors.tertiary}}></View>

                                    <View style={{ borderLeftColor: "rgba(0, 0, 0, .5)", borderLeftWidth: 2, borderStyle: "dotted", flex: 1, width: 0 }} />

                                    <View style={{ width: 7, height: 7, borderRadius: 50, backgroundColor: colors.dangerLight, marginBottom: 5 }}></View>
                                    

                                </View>

                                <View style={{width: "80%", height: 60, justifyContent: "space-between", marginLeft: 10}}>

                                    <View style={{...loginInput, height: 25, marginTop: 0, borderRadius: 5, paddingLeft: 8 }}>
                                        <Text>{passengerDetails?.location}</Text>
                                    </View>

                                    <View style={{ ...loginInput, height: 25, marginTop: 0, borderRadius: 5, paddingLeft: 8 }}>
                                        <Text>{passengerDetails?.destination}</Text>
                                    </View>

                                </View>

                            </View>

                        </View>}

                        {start && <View style={{width: "100%", padding: 20, position: "absolute", bottom: 0}} >

                            <TouchableOpacity onPress={()=>{
                                setAccept(true)
                            }} style={{width: "100%", paddingVertical: 15, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: colors.primary}}>

                                <Text style={{fontSize: 18, color: "white"}}>Accept</Text>

                            </TouchableOpacity>

                        </View>}


                        {!start && <View style={{ position: "absolute", bottom: 0, width: "100%"}}>

                            <FlatList 
                                style={{width: "100%"}}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={passengers}
                                extraData={passengers}
                                keyExtractor={(item)=> item.id}
                                renderItem={({item, index})=>{

                                    var {id, name, profileImage, location, destination, price, rating} = item;

                                    return(
                                        <View style={{ margin: 20, marginLeft: index !== 0? 0: 20, backgroundColor: "white", borderRadius: 20, padding: 20, width: (windowWidth * 0.8)}}>

                                            <Pressable onPress={()=>{
                                                setSelectedId(prevState => {
                                                    var val = id;
                                                    if(prevState === id){
                                                        val = "";
                                                    }

                                                    return(val)
                                                });
                                            }} style={{ width: 25, height: 25, backgroundColor: selectedId === id? colors.dangerLight : colors.primary, alignItems: "center", justifyContent: "center", borderRadius: 8, position: "absolute", top: -10, right: -10, zIndex: 9}}>
                                                {selectedId === id ? <Entypo name='minus' size={23} color="black" style={{ fontWeight: "bold" }} /> :<Ionicons name='add' size={23} color="black" style={{fontWeight: "bold"}} />}
                                            </Pressable>

                                            <View style={{flexDirection: "row", alignItems: "center"}}>

                                                <Image source={profileImage} style={{width: 40, height: 40, resizeMode: "contain", borderRadius: 100}} />

                                                <View style={{marginLeft: 15}}>

                                                    <Text style={{fontSize: 16}}>{name}</Text>
                                                    <Text style={{fontSize: 15, color: "rgba(0, 0, 0, .4)", marginTop: 6}}>{rating}/5.0</Text>

                                                </View>


                                            </View>

                                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginTop: 10}}>

                                                <View style={{ flexDirection: "row", alignItems: "flex-end"}}>

                                                    <View style={{height: 45, alignItems: "center"}}>
                                                        <View style={{width: 7, height: 7, borderRadius: 50, backgroundColor: "rgba(0, 0, 0, .5)", marginTop: 3.5}}></View>

                                                        <View style={{borderLeftColor: "rgba(0, 0, 0, .5)", borderLeftWidth: 2, borderStyle: "dotted", flex: 1, width: 0}} />

                                                        <View style={{ width: 7, height: 7, borderRadius: 50, backgroundColor: "rgba(0, 0, 0, .5)", marginBottom: 5 }}></View>
                                                    </View>

                                                    <View style={{justifyContent: "space-between", height: 50, marginLeft: 7}}>

                                                        <Text style={{fontSize: 16}}>{location}</Text>
                                                        <Text style={{fontSize: 16}}>{destination}</Text>

                                                    </View>

                                                </View>

                                                <View style={{ paddingVertical: 5, paddingHorizontal: 20, borderRadius: 50, backgroundColor: colors.primary}}>
                                                    <Text>${price}</Text>
                                                </View>

                                            </View>

                                        </View>
                                    )

                                }}

                            />

                        </View>}


                    </View>

                    {!start && <View style={{ backgroundColor: "white", padding: 20, paddingVertical: 25, width: "100%", borderTopLeftRadius: 13, borderTopRightRadius: 13 }}>

                        <View style={{...loginInput, marginTop: 0, marginBottom: 10, flexDirection: "row", justifyContent: "space-between" }}>

                            <TextInput

                                style={{flex: 1, paddingHorizontal: 12}}
                                placeholder="Where would you like to go?"
                                placeholderTextColor="rgba(0, 0, 0, .3)"
                            
                            />

                            <Ionicons name='location' size={20} color="rgba(0, 0, 0, .3)" style={{marginRight: 10}} />

                        </View>
                        

                        {selectedId !== "" && (
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>

                                <View style={{flexDirection: "row"}}>{getPImages(passengerDetails?.passenger)}</View>

                                <TouchableOpacity onPress={()=>{
                                    if(selectedId !== "" && passengerDetails){
                                        setStart(true);
                                    }
                                }} style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: colors.primary, borderRadius: 10}}>
                                    <Text style={{color: "white", fontSize: 16}}>Start</Text>
                                </TouchableOpacity>

                            </View>
                        )}

                    </View>}
                   

                </ScrollView>

            </View>


            <Nav onLayout={(event) => {
                var { height } = event.nativeEvent.layout;

                setNavHeight(height)

            }} />

            {accept && (<Modal>
                <TouchableOpacity style={{flex: 1}} onPress={()=>{

                }}>

                </TouchableOpacity>

                <View style={{borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", padding: 20, paddingVertical: 35}}>

                    <Text style={{fontSize: 20, textAlign: "center"}}>Confirmation agreement</Text>

                    <Pressable onPress={()=>{
                        setAgreement(prevState => {
                            return({
                                ...prevState,
                                price: !prevState.price
                            })
                        })
                    }} style={{flexDirection: "row", alignItems: "flex-start", marginTop: 25}}>


                        <View style={{width: 18, height: 18, borderRadius: 5, backgroundColor: "rgba(0, 0, 0, .07)", alignItems: "center", justifyContent: "center"}}>
                            {agreement.price && <View style={{width: "80%", height: "80%", backgroundColor: colors.primary, borderRadius: 5}}></View>}
                        </View>

                        <Text style={{marginLeft:20, flex: 1, fontSize: 17, color: "rgba(0, 0, 0, .7)"}}>I agree to trip price and not involved in the arrangement of any payment outside of the application</Text>

                    </Pressable>

                    <Pressable onPress={()=>{
                        setAgreement(prevState => {
                            return({
                                ...prevState,
                                cancelation: !prevState.cancelation
                            })
                        })
                    }} style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 15 }}>


                        <View style={{ width: 18, height: 18, borderRadius: 5, backgroundColor: "rgba(0, 0, 0, .07)", alignItems: "center", justifyContent: "center" }}>
                            {agreement.cancelation && <View style={{ width: "80%", height: "80%", backgroundColor: colors.primary, borderRadius: 5 }}></View>}
                        </View>

                        <Text style={{ marginLeft: 20, flex: 1, fontSize: 17, color: "rgba(0, 0, 0, .7)" }}>I agree with cancellation policy</Text>

                    </Pressable>

                    <Button buttonDisabled={agreementButton} onPress={()=>{
                        setLetsGo(true)
                        setAccept(false)

                        var openDest = setTimeout(()=>{

                            openDestinationModal()
                            clearTimeout(openDest);
                            
                        }, 10000)
                    }}>
                        <Text style={{color: "white", fontSize: 20}}>Let's Go</Text>
                    </Button>

                </View>

                 
            </Modal>)}
            

            {letsGo && (<Modal>

                <TouchableOpacity style={{ flex: 1 }}>

                </TouchableOpacity>
                
                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", padding: 20, paddingVertical: 35 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>Awaiting Confirmation</Text>

                    <TouchableOpacity style={{ width: "100%", paddingVertical: 15, alignItems: "center", borderRadius: 15, backgroundColor: colors.danger, marginTop: 50 }} onPress={()=>{
                        setLetsGo(false)
                        setCancelRequest(true);
                    }}>

                        <Text style={{ fontSize: 17, color: "white" }}>Cancel Request</Text>

                    </TouchableOpacity>
                </View>
            </Modal>)}

            {userAccepts && (<Modal>

                <TouchableOpacity style={{ flex: 1 }}>

                </TouchableOpacity>
                
                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", padding: 20, paddingBottom: 35, paddingTop: 0 }}>
                    
                    <View style={{alignItems: "center", marginTop: -20}}>
                        <View style={{paddingVertical: 12, paddingHorizontal: 18, borderRadius: 100, backgroundColor: colors.primary, flexDirection: "row", alignItems: "center"}}>
                            <Fontisto name='clock' size={20} color="black" />
                            <Text style={{fontSize: 16, marginLeft: 6}}>05:22</Text>
                        </View>
                    </View>

                    <View style={{borderBottomWidth: 2, borderBottomColor: "rgba(0, 0, 0, .4)", paddingVertical: 30}}>

                        <Text style={{fontSize: 15, color: "rgba(0, 0, 0, .4)"}}>Address</Text>
                        <View style={{marginTop: 10, flexDirection: "row"}}>
                            <FontAwesome5 name="location-arrow" size={20} color="black" />

                            <Text style={{marginLeft: 15}}>Angelina Paris Cafe</Text>
                        </View>

                    </View>

                    <View style={{marginTop: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                        <View style={{ flex: 1 / 2, }}>

                            <Text style={{fontWeight: "bold", fontSize: 15}}>Toyota RAV4</Text>

                            <View style={{flexDirection: "row", alignItems: "center", marginTop: 10}}>

                                <FontAwesome5 name="user-alt" style={{marginRight: 10}} color="rgba(0, 0, 0, .4)"/>

                                <Text style={{ color: "rgba(0, 0, 0, .4)", alignItems: "center" }}>4</Text>

                                
                            
                            </View>

                            <View style={{marginTop: 40, flexDirection: "row", alignItems: "center"}}>
                                <Image source={images.profileImage} style={{width: 30, height: 30, resizeMode: "contain", borderRadius: 50}} />

                                <View style={{marginLeft: 10}}>
                                    <Text>Bryan</Text>
                                    <Text style={{color: "rgba(0, 0, 0, .4)"}}>4.4/5.0</Text>
                                </View>

                                <View style={{width: 30, height: 30, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, .2)", marginLeft: 10}}>
                                    <FontAwesome5 name="phone-alt" size={13} color="black" />
                                </View>
                            </View>

                        </View>

                        <View style={{flex: 1/2}}>

                            <Image source={images.design} style={{position: "absolute", bottom: "-15%", right: "3%", width: "85%", resizeMode: "contain"}} />
                            <Image source={images.car} style={{width: "100%", resizeMode: "contain"}} />
                        </View>


                    </View>



                    <TouchableOpacity style={{ width: "100%", paddingVertical: 15, alignItems: "center", borderRadius: 15, backgroundColor: colors.danger, marginTop: 50 }} onPress={()=>{
                        setUserAccepts(false)
                        setCancelRequest(true);
                    }}>

                        <Text style={{ fontSize: 17, color: "white" }}>Cancel Request</Text>

                    </TouchableOpacity>

                </View>
            </Modal>)}

            {destinationReached && <Modal>

                <TouchableOpacity style={{ flex: 1 }}>

                </TouchableOpacity>

                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", padding: 20, paddingVertical: 35 }}>

                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>

                        <View style={{flexDirection: "row"}}>
                            <Image source={images.profileImage} style={{width: 50, height: 50, borderRadius: 100, resizeMode: "cover"}} />
                            <View style={{marginLeft: 15}}>
                                <Text style={{fontSize: 16}}>Duyil Ayomid</Text>
                                <Text style={{color: "rgba(0, 0, 0, .5)", fontSize: 14, marginTop: 5}}>+(234) 903-366 4645</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{backgroundColor: colors.danger, paddingVertical: 10, paddingHorizontal: 25, borderRadius: 15}}>
                            <Text style={{fontSize: 15, color: "white"}}>Report</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{width: "100%", marginTop: 40}}>
                        <Text style={{fontSize: 24, textAlign: "center"}}>How is your trip?</Text>
                        <Text style={{fontSize: 16, textAlign: "center", color: "rgba(0, 0, 0, .4)", marginTop: 10}}>Your feedback will help us improve driving experience</Text>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
                            
                            <FlatList
                                horizontal={true}
                                contentContainerStyle={{ width: "100%", justifyContent: "center" }}
                                style={{}}
                                data={getStars(5, activeStar)}
                                extraData={getStars(5, activeStar)}
                                renderItem={({item, index})=>{
                                    return(

                                        <TouchableOpacity style={{marginLeft: index === 0? 0 : 15}} onPress={()=>{
                                            setActiveStar(index + 1)
                                        }}>
                                            {item}
                                        </TouchableOpacity>

                                    )
                                }}
                            
                            />

                        </View>

                        <View style={{...loginInput, height: 160, marginTop: 30, alignItems: "flex-start", justifyContent: "flex-start"}}>
                            <TextInput 
                                style={{flex: 1, padding: 10, fontSize: 16}}
                                placeholder='Additional Comments...'
                                multiline={true}
                                value={comment}
                                onChangeText={(text)=>{
                                    setComment(text)
                                }}
                            />
                        </View>

                    </View>

                    <Button buttonDisabled={finishButtonDisabled}>
                        <Text style={{fontSize: 18, color: "white"}}>Finish</Text>
                    </Button>
                </View>
            </Modal>}

            {cancelRequest && (<Modal>

                <TouchableOpacity style={{ flex: 1 }}>

                </TouchableOpacity>

                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "white", padding: 20, paddingVertical: 35 }}>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>Are you sure?</Text>
                    <Text style={{ fontSize: 15, textAlign: "center",marginTop: 5, color: "rgba(0, 0, 0, .8)" }}>Do you want to cancel the trip?</Text>
                    <Text style={{ fontSize: 15, textAlign: "left",marginTop: 25,fontWeight: "bold" }}>Cancelation Policies</Text>
                    <Text style={{ fontSize: 15, textAlign: "left", marginTop: 10 }}>I agree trip price and not arranging any payment outside of the application. </Text>
                    <Text style={{ fontSize: 15, textAlign: "left", marginTop: 10 }}>I agree trip price and not arranging any payment outside of the application. </Text>
                    <Text style={{ fontSize: 15, textAlign: "left", marginTop: 10 }}>I agree trip price and not arranging any payment outside of the application. </Text>

                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 30}}>

                        <TouchableOpacity style={{ width: "45%", paddingVertical: 15, alignItems: "center", borderRadius: 15, backgroundColor: colors.danger}} onPress={cancelCancelRequest}>

                            <Text style={{ fontSize: 17, color: "white" }}>Cancel</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: "45%", paddingVertical: 15, alignItems: "center", borderRadius: 15, backgroundColor: colors.primary}} onPress={()=>{
                            setUserAcceptConfirmation(false)
                            setCancelRequest(false)
                            setRequestCanceled(true)
                        }}>

                            <Text style={{ fontSize: 17, color: "white" }}>Continue</Text>

                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>)}




        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})