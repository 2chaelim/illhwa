import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  // ScrollView,
} from "react-native";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { Box, Center, HStack, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "홈",
      headerStyle: {
        height: 70,
        borderBottomWidth: 1,
      },
      headerTintColor: "#2c2c2c",
      headerTitleAlign: "center",
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

  const studyBoxImg = require("../assets/studyBoxImg.png");

  const goLodgment = () => {
    navigation.navigate("LodgmentPage");
  };
  return (
    <View
      backgroundColor={"white"}
      flex={1}
      justifyContent="flex-start"
      alignItems={"center"}
      paddingTop={16}
    >
      <Center width="90%">
        <Image
          source={studyBoxImg}
          style={{ borderRadius: 20, width: "100%", height: 150 }}
        />
        <Box position="absolute" width="100%" paddingX={6} top={6}>
          <Text
            style={{
              fontFamily: "SUITE_Bold",
              paddingBottom: 12,
              color: "#2c2c2c",
              fontSize: 16,
            }}
          >
            내 학습 진도
          </Text>
          <HStack alignItems="center" paddingBottom={9}>
            <Box
              width={4}
              height={4}
              backgroundColor="#79A8FF"
              borderRadius={50}
              alignItems="center"
              justifyContent={"center"}
            >
              <Text
                style={{
                  fontFamily: "SUITE_Bold",
                  fontSize: 12,
                  color: "white",
                }}
              >
                5
              </Text>
            </Box>
            <Text style={{ fontFamily: "SUITE_Regular", paddingLeft: 6 }}>
              틀린 문제
            </Text>
            <TouchableOpacity style={{ paddingLeft: 16, paddingRight: 44 }}>
              <Entypo name="chevron-right" size={18} color="#656565" />
            </TouchableOpacity>
            <Box
              width={6}
              height={4}
              backgroundColor="#79A8FF"
              borderRadius={50}
              alignItems="center"
              justifyContent={"center"}
            >
              <Text
                style={{
                  fontFamily: "SUITE_Bold",
                  fontSize: 12,
                  color: "white",
                }}
              >
                30
              </Text>
            </Box>
            <Text style={{ fontFamily: "SUITE_Regular", paddingLeft: 6 }}>
              담은 문장
            </Text>
            <TouchableOpacity style={{ paddingLeft: 16 }}>
              <Entypo name="chevron-right" size={18} color="#656565" />
            </TouchableOpacity>
          </HStack>
          <HStack alignItems={"center"} flex={1}>
            <LinearGradient
              style={{
                width: "40%",
                height: 10,
                borderRadius: 10,
                flexGrow: 2 / 5,
              }}
              colors={["#F6BCFF", "#79A8FF", "#DD95FF"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            />
            <VStack
              position={"absolute"}
              alignItems={"center"}
              left={"47%"}
              top={-25}
              zIndex={10}
            >
              <Image
                source={require("../assets/bubble.png")}
                style={{ transform: [{ scale: 1.2 }] }}
                alt="bubbleBox"
              />
              <Text
                style={{
                  fontFamily: "Chassam",
                  fontSize: 12,
                  color: "white",
                  position: "absolute",
                }}
              >
                40%
              </Text>
              <LinearGradient
                style={{
                  width: 17,
                  height: 17,
                  borderRadius: 10,
                  borderWidth: 3,
                  borderColor: "white",
                }}
                colors={["#F6BCFF", "#79A8FF", "#DD95FF"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
              />
            </VStack>
            <Box
              width={"30%"}
              height={2.5}
              backgroundColor="rgba(250,250,250, 0.8)"
              borderRadius={50}
              flexGrow={3 / 5}
            ></Box>
          </HStack>
        </Box>
        <View paddingTop={32}>
          <VStack>
            <Text
              style={{
                fontFamily: "SUITE_Bold",
                fontSize: 16,
                color: "#2c2c2c",
                textAlign: "center",
                paddingBottom: 5,
              }}
            >
              카테고리
            </Text>
            <Text
              style={{
                fontFamily: "Chassam",
                color: "#656565",
                textAlign: "center",
                fontSize: 14,
                paddingBottom: 22,
              }}
            >
              상황별로 필요한 어휘를 만나보세요!
            </Text>
            <HStack>
              <TouchableOpacity
                style={{ marginRight: 22 }}
                onPress={goLodgment}
              >
                <Box
                  backgroundColor={"#F6F6F6"}
                  width={"120"}
                  height={"120"}
                  borderRadius={100}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image source={require("../assets/package.png")} alt="숙박" />
                </Box>
                <Text style={styles.cateT}>숙박</Text>
              </TouchableOpacity>
              <View>
                <Box
                  backgroundColor={"#F6F6F6"}
                  width={"120"}
                  height={"120"}
                  borderRadius={100}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image source={require("../assets/food.png")} alt="외식" />
                </Box>
                <Text style={styles.cateT}>외식</Text>
              </View>
            </HStack>
            <HStack paddingTop={22}>
              <View style={{ marginRight: 22 }}>
                <Box
                  backgroundColor={"#F6F6F6"}
                  width={"120"}
                  height={"120"}
                  borderRadius={100}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image source={require("../assets/FINANCE.png")} alt="쇼핑" />
                </Box>
                <Text style={styles.cateT}>쇼핑</Text>
              </View>
              <View>
                <Box
                  backgroundColor={"#F6F6F6"}
                  width={"120"}
                  height={"120"}
                  borderRadius={100}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Image source={require("../assets/food.png")} alt="외식" />
                </Box>
                <Text style={styles.cateT}>외식</Text>
              </View>
            </HStack>
          </VStack>
        </View>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  cateT: {
    fontFamily: "SUITE_Regular",
    textAlign: "center",
    paddingTop: 14,
  },
});
