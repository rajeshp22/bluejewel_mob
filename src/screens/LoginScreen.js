import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View style={{marginTop:70}}>
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
              marginTop: 12,
              color: "#041e42",
            }}
          >
            Login in to your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
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
          <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize:email ? 16 : 16 }} placeholder="Enter Your Email" />
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
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
          <TextInput value={Password} onChangeText={(text => setPassword(text))} secureTextEntry={true} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize:Password ? 16 : 16 }} placeholder="Enter Your Password" />
        </View>
      </View>

      <View style={{marginTop:12, flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
        <Text>Keep me Logged In</Text>

        <Text style={{color:'#007fff', fontWeight:500}}>Forget Passowrd?</Text>
      </View>

      <View style={{marginTop:70}}></View>
      
      <Pressable style={{width:200, backgroundColor: 'lightblue', borderRadius:6, marginLeft: 'auto', marginRight: 'auto', padding:15}}>
        <Text style={{textAlign:'center', fontSize: 16, fontWeight:'bold'}}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Signup')} style={{marginTop:10}}>
        <Text style={{textAlign: 'center', fontSize:16, color:'gray'}}>Don't have an account?Singup</Text>
      </Pressable>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
