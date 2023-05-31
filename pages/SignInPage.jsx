import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Box, Center, FormControl, HStack, Input, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

export default function SignInPage({ navigation, route }) {
  const goHome = () => {
    navigation.navigate("TabNavigator");
  };
  const goSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logoS.png")} style={styles.logoS} />
      <Image
        source={require("../assets/signInBg.png")}
        style={{
          width: "100%",
          position: "absolute",
          zIndex: -10,
        }}
      />
      <FormControl
        paddingTop={230}
        paddingBottom={50}
        w={"80%"}
        justifyContent={"center"}
        fontSize={30}
      >
        <Input
          placeholder="ID를 입력해주세요."
          w="100%"
          borderWidth={0}
          borderBottomWidth={1}
          borderBottomColor={"white"}
          borderRadius={0}
          color={"white"}
          placeholderTextColor="white"
          fontSize={14}
          py={3}
          fontFamily="Chassam"
        />
        <Input
          placeholder="PASSWORD를 입력해주세요."
          w="100%"
          borderWidth={0}
          borderBottomWidth={1}
          borderBottomColor={"white"}
          borderRadius={0}
          color={"white"}
          placeholderTextColor="white"
          fontSize={14}
          py={3}
          fontFamily="Chassam"
        />
        <TouchableOpacity onPress={goHome}>
          <LinearGradient
            style={styles.btnLogIn}
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
              로그인
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <HStack justifyContent={"space-between"} paddingTop={4}>
          <Text color={"white"} fontSize={12} fontFamily={"SUITE_Bold"}>
            아이디 찾기
          </Text>
          <Box backgroundColor={"white"} paddingX={0.4}></Box>
          <Text color={"white"} fontSize={12} fontFamily={"SUITE_Bold"}>
            비밀번호 찾기
          </Text>
          <Box backgroundColor={"white"} paddingX={0.4}></Box>
          <TouchableOpacity onPress={goSignUp}>
            <Text color={"white"} fontSize={12} fontFamily={"SUITE_Bold"}>
              회원가입
            </Text>
          </TouchableOpacity>
        </HStack>
      </FormControl>
      <Center>
        <Text fontSize={12} color="white" pb={3} fontFamily={"SUITE_Bold"}>
          간편로그인
        </Text>
        <HStack>
          <TouchableOpacity style={styles.snsLogIn}>
            <Image source={require("../assets/kakao.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.snsLogIn}>
            <AntDesign name="google" size={30} color="#2C2C2C" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.snsLogIn}>
            <FontAwesome5 name="facebook" size={30} color="#2C2C2C" />
          </TouchableOpacity>
        </HStack>
      </Center>
      <TouchableOpacity onPress={goHome}>
        <HStack alignItems={"center"} paddingY={60}>
          <Text fontSize={12} color="white" fontFamily={"SUITE_Bold"}>
            비회원으로 시작하기
          </Text>
          <Entypo name="chevron-right" size={14} color="white" />
        </HStack>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  logoS: {
    position: "absolute",
    top: 100,
  },
  btnLogIn: {
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 50,
  },
  snsLogIn: {
    backgroundColor: "rgba(250, 250, 250, 0.75)",
    width: 47,
    height: 47,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },
});
