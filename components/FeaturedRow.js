import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanityClient'


export default function FeaturedRow({id,title,description}) {
  const [restaurants,setRestaurants] = useState([]);
  useEffect(()=>{
    sanityClient.fetch(
        `   
        *[_type == "featured" && _id==$id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->{
              ...
            },
            type->{
              name
            }
          },
        }[0]
        `,{id}
    ).then(data =>{
      setRestaurants(data?.restaurants)
    }
    );
  },[]);

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

            {restaurants.map(restaurant=>{
              return <RestaurantCard 
                key={restaurant._id}
                id={restaurant._id}
                imgUrl={restaurant.image}
                title={restaurant.name}
                rating={restaurant.rating}
                genre={restaurant.type?.name}
                short_description={restaurant.short_description}
                address={restaurant.address}
                dishes={restaurant.dishes}
                long={restaurant.long}
                lat={restaurant.lat}
          />
            })}

        </ScrollView>

    </View>
  )
}