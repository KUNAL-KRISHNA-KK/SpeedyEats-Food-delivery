import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
   <ScrollView>
    <Text className="font-bold text-xl">
        User:Kunal Krishna
    </Text>
    <Text>
        More ainfo
    </Text>
   </ScrollView>
  )
}

const styles = StyleSheet.create({})