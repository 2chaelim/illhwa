import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  PanResponder,
} from "react-native";
import { HStack, View, Box, VStack, IconButton } from "native-base";
import React, { useState, useRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Card_Lodg({ num, item }) {
  const [play, setPlay] = useState(true);
  const swipeAnimation = useRef(new Animated.Value(0)).current;
  const [like, setLike] = useState(false);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx < -70) {
          // 왼쪽으로 스와이프했을 때의 동작
          Animated.timing(swipeAnimation, {
            toValue: -70,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // 원래 위치로 돌아가는 동작
          Animated.spring(swipeAnimation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  const [leftBg, setLeftBg] = useState("");
  const [rightBg, setRightBg] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (num == "0") {
      setLeftBg("#FFF0EF");
      setRightBg("#FED2CF");
    } else if (num == "1") {
      setLeftBg("#E2ECFF");
      setRightBg("#CDDBF5");
    } else if (num == "2") {
      setLeftBg("#D7F5DC");
      setRightBg("#BDE2C3");
    } else if (num == "3") {
      setLeftBg("#FFEFC7");
      setRightBg("#FFC480");
    }

    setData(item);
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateX: swipeAnimation }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <HStack>
          <Box bgColor={leftBg} style={styles.conKo}>
            <HStack width="100%">
              {play ? (
                <TouchableOpacity
                  onPress={() => {
                    setPlay(!play);
                  }}
                >
                  <Image
                    source={require("../assets/play.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setPlay(!play);
                  }}
                >
                  <Image
                    source={require("../assets/pause.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </TouchableOpacity>
              )}
              <VStack justifyContent={"center"} width={"100%"} flex={1}>
                <Text style={styles.rightConJ}>{data.descjp}</Text>
                <Text style={styles.rightConK}>{data.translation}</Text>
              </VStack>
            </HStack>
          </Box>
          <Box bgColor={rightBg} style={styles.conJa}>
            <Text style={styles.leftCon}>{data.descko}</Text>
          </Box>
        </HStack>
      </Animated.View>
      <IconButton
        position="absolute"
        right={2}
        top={4}
        onPress={() => setLike(!like)}
        icon={
          like ? (
            <AntDesign name="heart" size={22} color="#FF6A6A" />
          ) : (
            <AntDesign name="hearto" size={22} color="#FF6A6A" />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conKo: {
    width: "60%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },

  conJa: {
    width: "40%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  conJa2: {
    backgroundColor: "#CDDBF5",
  },
  rightConJ: {
    fontFamily: "SUITE_Regular",
    fontSize: 12,
    color: "#656565",
    paddingBottom: 8,

    width: "100%",
  },
  rightConK: {
    fontFamily: "SUITE_Regular",
  },
  leftCon: {
    fontFamily: "Chassam",
  },
  card: {
    zIndex: 20,
  },
});
