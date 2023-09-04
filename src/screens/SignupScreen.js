import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Pressable, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const SignupScreen = () => {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100 }}
          source={require('../../assets/logo.png')}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 0,
              color: "#041e42",
            }}
          >
            Register to your Account
          </Text>
        </View>

        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Ionicons style={{ marginLeft: 8 }} name="ios-person" size={24} color="gray" />
            <TextInput value={name} onChangeText={(text) => setName(text)} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }} placeholder="Enter Your Name" />
          </View>
        </View>

        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            {/* <Ionicons  name="ios-person" size={24} color="gray" /> */}
            <AntDesign style={{ marginLeft: 8 }} name="home" size={24} color="gray" />
            <TextInput value={company} onChangeText={(text) => setCompany(text)} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: company ? 16 : 16 }} placeholder="Company Name" />
          </View>
        </View>

        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Feather style={{ marginLeft: 8 }} name="phone-call" size={24} color="gray" />
            <TextInput value={mobile} onChangeText={(text) => setMobile(text)} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: mobile ? 16 : 16 }} placeholder="Enter Your Mob No." />
          </View>
        </View>

        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="grey" />
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder="Enter Your Email" />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput value={Password} onChangeText={(text => setPassword(text))} secureTextEntry={true} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: Password ? 16 : 16 }} placeholder="Enter Your Password" />
          </View>
        </View>

        <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text>Keep me Logged In</Text>

          <Text style={{ color: '#007fff', fontWeight: 500 }}>Forget Passowrd?</Text>
        </View>

        <View style={{ marginTop: 50 }}></View>

        <Pressable style={{ width: 200, backgroundColor: 'lightblue', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Register</Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 16, color: 'gray' }}>Already have an account?Sing In</Text>
        </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})