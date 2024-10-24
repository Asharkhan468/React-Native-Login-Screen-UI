import { View, Text , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider , SafeAreaView  } from 'react-native-safe-area-context'

const SignUp = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
        <View className='mt-[50px]'>
      <Text className='text-5xl ml-6 font-bold '>Explore now</Text>
      <Text className='text-2xl ml-7 mt-3 font-extrabold'>Join SO today.</Text>
    </View>



    <View className='mt-9'>
    <TouchableOpacity className='items-center p-4 m-3 mx-6 bg-grey rounded-full border' >
          <View className='flex flex-row gap-5'>
          <Image className='w-[30] h-[30]' source={require('../assets/images/googlelogo.jpeg')}  />
          <Text className='text-black text-xl'>Sign up with Google</Text>
          </View>
         
  
          
        </TouchableOpacity>



        <TouchableOpacity className='items-center p-4 m-3 mx-6 bg-grey rounded-full border' >
          <View className='flex flex-row gap-5'>
          <Image className='w-[30] h-[32]' source={require('../assets/images/apple.png')}  />
          <Text className='text-black text-xl'>Sign up with Apple</Text>
          </View>
          
        
        </TouchableOpacity>
    </View>


    <View className='mt-[50px]'>

    <TouchableOpacity className='items-center p-6 m-3 mx-6 bg-[#0098FF] rounded-full' >
          <View className='flex flex-row gap-5'>
          <Text className='text-white font-semibold text-xl'>Create account</Text>
          </View>
          
        
        </TouchableOpacity>



        <View>
            <Text className='font-bold text-xl ml-7 mt-9'>Already have an account?</Text>
        </View>



        <View className='mt-5'>

        <TouchableOpacity className='items-center p-6 m-3 mx-6 bg-white rounded-full border border-gray-400' >
          <View className='flex flex-row gap-5'>
          <Text className='text-[#0098FF] font-semibold text-xl'> Sign in</Text>
          </View>


         
          
        
        </TouchableOpacity>

        </View>

    </View>

    

        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default SignUp