import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard';

export default function Categories() {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 15
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='testing' />
        <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='testing' />
        <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='testing' />
        <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='testing' />
        <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='testing' />
        <CategoriesCard imgUrl='https://links.papareact.com/gn7' title='testing' />
    </ScrollView>
  )
}