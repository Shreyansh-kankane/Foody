import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanityClient';
import { 
    ArrowLeftIcon,
    ChevronRightIcon,
    MapPinIcon,
    StarIcon,
    QuestionMarkCircleIcon

} from 'react-native-heroicons/solid';
import { View, Image,Text,ScrollView,StatusBar,StyleSheet,TouchableOpacity } from 'react-native';

import DishRow from '../components/DishRow';

export default function RestaurantScreen() {
    const navigation = useNavigation();
    const { 
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            short_description,
            address,
            dishes,
            long,
            lat
        }
     } = useRoute();

     useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
     },[])




  return (
    <ScrollView style={styles.container}>
        <View className={'relative'}>
            <Image
                source={
                    { uri: urlFor(imgUrl).url()}
                }
                className={'w-full h-56 bg-gray-300 p-4'}
            />
            <TouchableOpacity className={'absolute top-7 left-5 p-2 bg-gray-100 rounded-full'}
                onPress={navigation.goBack}
            >
                <ArrowLeftIcon 
                    size={20}
                    color={"#00CCBB"}
                />
            </TouchableOpacity>
            
            <View className='bg-white'>
                <View className={'px-4 pt-4'} >
                    <Text className={'text-3xl font-bold'} >{title}</Text>
                    <View className={'flex-row space-x-2 my-1'} >
                        <View className={'flex-row items-center space-x-1'} >
                            <StarIcon 
                                color={'green'}
                                opacity={0.5}
                                size={22}
                            />
                            <Text className='text-xs text-gray-500'>
                                <Text className={'text-green-500'} >{rating}</Text>
                            </Text>
                        </View>

                        <View className={'flex-row items-center space-x-1'} >
                            <MapPinIcon 
                                color={'gray'}
                                opacity={0.4}
                                size={22}
                            />
                            <Text className='text-xs text-gray-500'>
                                <Text className={'text-gray-500'} >Nearby. {address}</Text>
                            </Text>
                        </View>
                    </View>

                    <Text className={'text-gray-500 mt-2 pb-2'} >{short_description} </Text>
                </View>
            </View>

            <TouchableOpacity className={'flex-row items-center space-x-2 p-4 border-y border-gray-300'} >
                <QuestionMarkCircleIcon size={20} color={'gray'} opacity={0.5}/>
                <Text className={'flex-1 pl-2 text-md font-bold'} >
                    Have a food Alergy ?
                </Text>
                <ChevronRightIcon size={20} color={'gray'} opacity={0.5} />
            </TouchableOpacity>

            <View>
                <Text 
                    className={'px-4 pt-6 mb-3 font-bold text-xl'}
                >Menu
                </Text>

                {/* Dishes */}
                {dishes.map(dish=>{
                    return <DishRow 
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                })}
                
            </View>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    }
})