import { View, Text,StyleSheet,TouchableOpacity,StatusBar,Image,ScrollView } from 'react-native'
import React, { useMemo,useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanityClient';
import Currency from 'react-currency-formatter';

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector( selectRestaurant );
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    const [groupedItems, setGroupedItems] = useState([]);

    useMemo(()=>{
        const groupItems = items.reduce((result,item)=>{
            (result[item.id] = result[item.id] || [] ).push(item);
            return result;
        },{});

        setGroupedItems(groupItems);
        console.log(groupItems);
    },[items])

  return (
    <View style={styles.container} >
      <View className="bg-gray-100" >
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs" >
            <Text className="text-lg font-bold text-center" >Basket</Text>
            <Text className="text-center text-gray-400" >
                {restaurant.title}
            </Text>
        </View>
        <TouchableOpacity 
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
        >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
        </TouchableOpacity>
      </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5" >
            <Image
                source={{
                    uri: urlFor(restaurant.imgUrl).url()
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1" >Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            {Object.entries(groupedItems).map(([key,items])=>(
                <View key={key} >
                    <Text>{items.length} x</Text>
                    <Image 
                        source={{
                            uri: urlFor(items[0]?.image).url()
                        }}
                        className="h-12 w-12 rounded-full"
                    />
                    <Text className="flex-1">{items[0]?.name}</Text>
                    <Text className="text-gray-600">
                        <Currency quantity={items[0]?.price} currency='INR' />
                    </Text>
                    <TouchableOpacity>
                        <Text>
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '90%',
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: '#F3F4F4',
    }
})
