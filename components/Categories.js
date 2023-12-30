import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard';
import sanityclient, { urlFor } from '../sanityClient';

export default function Categories() {

  const [categories,setCategories]  = useState([]);

  useEffect(()=>{
    sanityclient.fetch(
      `
      *[_type=="category"]
      `
    ).then(data=>{
      setCategories(data)
    }
  )
  },[])


  return (
    <ScrollView
        contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 15
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    > 
        {categories.map(category=>{
          return <CategoriesCard 
          key={category._id}
          imgUrl={category.image}
          title={category.name}/>
        })}

    </ScrollView>
  )
}