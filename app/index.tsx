import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

      <View className='mt-8 flex'>
      <Text className='text-center text-3xl font-bold'>Welcome to SO</Text>
      <Text className='text-center text-xl mt-3'>Login or Sign up to access your account</Text>
    </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  
  )
}

export default index