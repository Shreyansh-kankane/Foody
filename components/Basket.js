import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import Currency from 'react-currency-formatter';


export default function Basket() {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    if(items.length == 0){
        return null;
    }

  return (
    <View className="absolute bottom-10 w-full z-50" >
        <TouchableOpacity className="flex flex-row bg-[#00CCBB] mx-5 p-4 rounded-lg items-center space-x-1" 
            onPress={()=>{
                navigation.navigate("Basket")
            
            }}
        >
            <Text className="text-white font-extrabold text-lg bg-[#01A29A] py-1 px-2" >{items.length}</Text>
            <Text className="flex-1 text-white font-extrabold text-lg text-center" > View Basket </Text>
            <Text className="text-lg text-white font-extrabold" >
                <Currency quantity={basketTotal} currency='INR' />
            </Text>
        </TouchableOpacity>
    </View>
  )
}