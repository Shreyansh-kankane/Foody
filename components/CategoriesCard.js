import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function CategoriesCard({imgUrl,title}) {
  return (
    <TouchableOpacity className='mr-2 relative'>
        <Image 
            source={{
                uri:imgUrl
            }}
            className='h-20 w-20 rounded'
        />
      <Text className='absolute bottom-1 left-1 font-bold text-white' >{title}</Text>
    </TouchableOpacity>
  )
}