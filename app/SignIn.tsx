import { View, Text , Button , TextInput ,  TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'


const index = () => {
  return (
    <SafeAreaProvider>
    
      <SafeAreaView>
        
    <View>
      <Text className='text-3xl font-extrabold p-7 mt-6 '>Sign in</Text>
      
      <View className='flex-row pl-7 gap-2'>
        <Text className='text-lg'>New user?</Text>
        <Text className='text-lg font-bold text-[#0098FF]'>Create an account</Text>
      </View>
      

{/* Email Input and continue button */}
      
    <View className='mt-8'>
    <TextInput
          className='border m-6 p-3'
          placeholder='Email address'
        />
      <View  className='flex justify-end items-end'>
      <TouchableOpacity className='items-center p-4 px-[50px] m-[10px] mr-[20px] bg-black rounded-xl' activeOpacity={0.8}>
          <Text className='text-white font-bold'>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>



    {/* Google facebook Apple buttons */}


    <View className='mt-[40px]'>
    <TouchableOpacity className='items-center p-4 m-3 mx-6 bg-grey rounded-full border' >
          <View className='flex flex-row gap-5'>
          <Image className='w-[30] h-[30]' source={require('../assets/images/googlelogo.jpeg')}  />
          <Text className='text-black text-xl'>Continue with Google</Text>
          </View>
         
  
          
        </TouchableOpacity>


        <TouchableOpacity className='items-center p-4 m-3 mx-6 bg-grey rounded-full border' >
          <View className='flex flex-row gap-3'>
          <Image className='w-[30] h-[30]' source={require('../assets/images/facebook.png')}  />
          <Text className='text-black text-xl'>Continue with Facebook</Text>
          </View>

          
        </TouchableOpacity>


        <TouchableOpacity className='items-center p-4 m-3 mx-6 bg-grey rounded-full border' >
          <View className='flex flex-row gap-5'>
          <Image className='w-[30] h-[32]' source={require('../assets/images/apple.png')}  />
          <Text className='text-black text-xl'>Continue with Apple</Text>
          </View>
          
        <Link href={'/SignUp'}>sjsjsj</Link>
        </TouchableOpacity>
    </View>

  
    



<View>
<Image className='w-[313.95px] h-[245.57px] top-[597.57px] left-[344.48px]gap-[0px] opacity-[0px]' source={require('../assets/images/men.png')}  />

</View>
    

    
   




       
     
    </View>

    
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index
