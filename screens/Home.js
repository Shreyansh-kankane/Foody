import { View, Text, Image,TextInput ,ScrollView} from 'react-native'
import React, {  useLayoutEffect,useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
// import { SafeAreaView } from 'react-native';

import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon
} from 'react-native-heroicons/outline'

import client from '../sanityClient';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

export default function Home() {
    const [featuredCategories,setFeatutedCategories] = useState([]);
    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    useEffect(()=>{
        client.fetch(
            `*[_type == "featured"]{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
            }`
        ).then(
            (data) =>{
                setFeatutedCategories(data);
            }
        )
    },[]);

    return (
        <SafeAreaView className='bg-white pt-5 mb-[100px]' >

            {/* header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <View className='flex-1'  >
                    <Text className='font-bold text-gray-400 text-xs'>Deliver now</Text>
                    <Text className='font-bold text-xl'>Current location
                        <ChevronDownIcon size={20} color={'#00CCBB'} />
                    </Text>
                </View>
                
                <UserIcon size={35} color={'#00CCBB'}/>
            </View>

            {/* search */}
            <View className='flex-row items-center mx-4 space-x-2 pb-2'>
                <View className='flex-row flex-1 bg-gray-200 space-x-2 p-3'>
                    <MagnifyingGlassIcon color={'#00CCBB'} size={20} />
                    <TextInput placeholder='Restaurant and dishes'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsHorizontalIcon color={'#00CCBB'}  />
            </View>

            <ScrollView
                className='bg-gray-100'
                contentContainerStyle={{
                    paddingBottom:10
                }}
            >
                <Categories />

                {/* featuredRows */}

                {featuredCategories.map(category=>{
                    return <FeaturedRow 
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                })}

            </ScrollView>

        </SafeAreaView>
    )
}