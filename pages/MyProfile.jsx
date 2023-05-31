import React from "react";
import {
  View,
  HStack,
  VStack,
  Box,
  Input,
  Select,
  CheckIcon,
} from "native-base";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function MyProfilePage({ navigation, route }) {
  const [service, setService] = React.useState("");
  const goMyPage = () => {
    navigation.navigate("MyPage");
  };

  return (
    <View backgroundColor={"white"} flex={1}>
      <View marginX={4} paddingTop={10}>
        <HStack alignItems="center" paddingBottom={8}>
          <Image
            source={require("../assets/profie.jpg")}
            style={{
              width: 64,
              height: 64,
              borderRadius: 100,
              marginRight: 16,
            }}
          />
          <VStack>
            <HStack>
              <Text
                style={{
                  fontFamily: "SUITE_Bold",
                  fontSize: 16,
                  paddingBottom: 9,
                  paddingRight: 4,
                  color: "#2c2c2c",
                }}
              >
                홍길동
              </Text>
              <Text
                style={{
                  fontFamily: "SUITE_Regular",
                  fontSize: 16,
                  paddingBottom: 9,
                  color: "#2c2c2c",
                }}
              >
                님
              </Text>
            </HStack>
            <TouchableOpacity>
              <HStack alignItems={"center"}>
                <Text
                  style={{
                    fontFamily: "SUITE_Regular",
                    paddingRight: 4,
                  }}
                >
                  프로필 사진 수정
                </Text>
                <Entypo name="chevron-right" size={16} color="#656565" />
              </HStack>
            </TouchableOpacity>
          </VStack>
        </HStack>
      </View>
      <View marginX={4}>
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
        <TouchableOpacity onPress={goMyPage}>
          <LinearGradient
            style={styles.btnSignIn}
            colors={["#FED2CF", "#CDDBF5"]}
            start={{ x: 0.1, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Text
              style={{
                fontFamily: "SUITE_Bold",
                color: "#2c2c2c",
                textAlign: "center",
              }}
            >
              수정하기
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
