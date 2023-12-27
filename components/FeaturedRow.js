import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({id,title,description}) {
  return (
    <View>
      <View className='flex-row justify-between items-center mt-4 px-4' >
        <Text className='font-bold text-lg' >{title}</Text>
        <ArrowRightIcon color={'#00CCBB'} />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            {/* restaurant card */}
            <RestaurantCard 
                id={'1'}
                imgUrl={'https://links.papareact.com/gn7'}
                title={'Yo! Sushi'}
                rating={4.5}
                genre={'Japanese'}
                short_description={'this is a test'}
                address={'123 Main street'}
                dishes={[]}
                long={0}
                lat={0}
            />
            <RestaurantCard 
                id={'1'}
                imgUrl={'https://links.papareact.com/gn7'}
                title={'Yo! Sushi'}
                rating={4.5}
                genre={'Japanese'}
                short_description={'this is a test'}
                address={'123 Main street'}
                dishes={[]}
                long={0}
                lat={0}
            />
            <RestaurantCard 
                id={'1'}
                imgUrl={'https://links.papareact.com/gn7'}
                title={'Yo! Sushi'}
                rating={4.5}
                genre={'Japanese'}
                short_description={'this is a test'}
                address={'123 Main street'}
                dishes={[]}
                long={0}
                lat={0}
            />


        </ScrollView>

    </View>
  )
}