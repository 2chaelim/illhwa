import {
  Input,
  View,
  Text,
  HStack,
  Box,
  Select,
  CheckIcon,
  Center,
} from "native-base";
import React, { document } from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

export default function SignUpPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "회원가입",
      headerStyle: {
        borderBottomWidth: 1,
        height: 80,
      },

      headerTitleAlign: "center",
      headerTintColor: "#2c2c2c",
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: "SUITE_Bold",
      },
      headerShown: true,
      headerBackImage: () => (
        <Entypo name="chevron-left" size={24} color="#2c2c2c" />
      ),
    });
  }, []);

  // select box
  const [service, setService] = React.useState("");

  // go home
  const goHome = () => {
    navigation.navigate("TabNavigator");
  };

  return (
    <View
      flex={1}
      width="100%"
      justifyContent={"flex-start"}
      alignItems={"center"}
      backgroundColor={"white"}
    >
      <View width={"90%"} paddingY={5}>
        <Box pb={8}>
          <Text style={styles.inputTitle}>닉네임</Text>
          <HStack paddingTop={1} justifyContent="space-between">
            <Input
              style={styles.inputCon}
              placeholder={"닉네임"}
              width="70%"
              marginRight={4}
              placeholderTextColor="#656565"
              borderColor={"transparent"}
              paddingLeft={3}
              focusOutlineColor="transparent"
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#D3D3D3",
                borderRadius: 30,
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text fontSize={12}>중복확인</Text>
            </TouchableOpacity>
          </HStack>
        </Box>
        <Box pb={8}>
          <Text style={styles.inputTitle}>이메일</Text>
          <HStack paddingTop={1} justifyContent="space-between">
            <Input
              style={styles.inputCon}
              placeholder={"이메일"}
              marginRight={2}
              placeholderTextColor="#656565"
              borderColor={"transparent"}
              paddingLeft={3}
              focusOutlineColor="transparent"
              flexGrow={3 / 5}
            />
            <Text>@</Text>
            <Box flexGrow={2 / 5} marginLeft={2}>
              <Select
                selectedValue={service}
                accessibilityLabel="선택"
                placeholder="선택"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
                borderColor={"transparent"}
                backgroundColor={"#f6f6f6"}
                borderRadius={10}
                fontFamily="Chassam"
                fontSize={14}
                placeholderTextColor="#656565"
              >
                <Select.Item label="gmail.com" value="gmail" />
                <Select.Item label="naver.com" value="naver" />
                <Select.Item label="nate.com" value="nate" />
                <Select.Item label="daum.net" value="daum" />
              </Select>
            </Box>
          </HStack>
        </Box>
        <Box pb={8}>
          <Text style={styles.inputTitle}>비밀번호</Text>
          <Input
            style={styles.inputCon}
            placeholder={"비밀번호"}
            width="100%"
            marginRight={4}
            placeholderTextColor="#656565"
            borderColor={"transparent"}
            paddingLeft={3}
            focusOutlineColor="transparent"
            marginTop={1}
          />
          <Input
            style={styles.inputCon}
            placeholder={"비밀번호 확인"}
            width="100%"
            marginRight={4}
            placeholderTextColor="#656565"
            borderColor={"transparent"}
            paddingLeft={3}
            focusOutlineColor="transparent"
            marginTop={2}
          />
        </Box>
      </View>
      <TouchableOpacity style={{ width: "90%" }} onPress={goHome}>
        <LinearGradient
          style={styles.btnSignIn}
          colors={["#FED2CF", "#CDDBF5"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <Text
            color={"#2C2C2C"}
            textAlign="center"
            stroke="purple"
            fontFamily={"SUITE_Bold"}
          >
            가입하기
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpTitle: {
    fontSize: 16,
    color: "#2C2C2C",
  },
  inputTitle: {
    color: "#2C2C2C",
    fontFamily: "SUITE_Regular",
  },
  inputCon: {
    height: 41,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontFamily: "Chassam",
    fontSize: 14,
  },
  btnSignIn: {
    paddingVertical: 16,
    borderRadius: 50,
    fontFamily: "SUITE_Regular",
  },
});
