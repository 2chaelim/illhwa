import { useEffect } from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { HStack, ScrollView, View } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function StudyPage({ navigation, route }) {
  const goQ1 = () => {
    navigation.navigate("Q1page");
  };
  useEffect(() => {
    navigation.setOptions({
      title: "학습",
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
  return (
    <ScrollView backgroundColor={"white"} flex={1}>
      <View marginX={4} paddingTop={22}>
        <HStack justifyContent={"space-between"} paddingBottom={4}>
          <TouchableOpacity
            style={[styles.studyBox, styles.studyBox1]}
            onPress={goQ1}
          >
            <Image
              source={require("../assets/collect.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                fontFamily: "SUITE_Bold",

                color: "#71BD7E",
                paddingTop: 16,
                paddingBottom: 6,
              }}
            >
              Level 1
            </Text>
            <Text
              style={{
                fontFamily: "SUITE_Bold",
                fontSize: 16,
                color: "#477B50",
              }}
            >
              잘 했어요!
            </Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.studyBox, styles.studyBox2]}>
            <Image
              source={require("../assets/fail.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                fontFamily: "SUITE_Bold",

                color: "#FF9898",
                paddingTop: 16,
                paddingBottom: 6,
              }}
            >
              Level 2
            </Text>
            <Text
              style={{
                fontFamily: "SUITE_Bold",
                fontSize: 16,
                color: "#FF6A6A",
              }}
            >
              다시 풀어보세요!
            </Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
        </HStack>
        <HStack justifyContent={"space-between"} paddingBottom={4}>
          <TouchableOpacity style={[styles.studyBox, styles.studyBox1]}>
            <Image
              source={require("../assets/collect.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                fontFamily: "SUITE_Bold",

                color: "#71BD7E",
                paddingTop: 16,
                paddingBottom: 6,
              }}
            >
              Level 3
            </Text>
            <Text
              style={{
                fontFamily: "SUITE_Bold",
                fontSize: 16,
                color: "#477B50",
              }}
            >
              잘 했어요!
            </Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.studyBox, styles.lockBox]}>
            <Image
              source={require("../assets/lock.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.lockLevel}>Level 4</Text>
            <Text style={styles.lockTitle}>학습 전이에요</Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
        </HStack>
        <HStack justifyContent={"space-between"} paddingBottom={4}>
          <TouchableOpacity style={[styles.studyBox, styles.lockBox]}>
            <Image
              source={require("../assets/lock.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.lockLevel}>Level 5</Text>
            <Text style={styles.lockTitle}>학습 전이에요</Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.studyBox, styles.lockBox]}>
            <Image
              source={require("../assets/lock.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.lockLevel}>Level 6</Text>
            <Text style={styles.lockTitle}>학습 전이에요</Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
        </HStack>
        <HStack justifyContent={"space-between"} paddingBottom={4}>
          <TouchableOpacity style={[styles.studyBox, styles.lockBox]}>
            <Image
              source={require("../assets/lock.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.lockLevel}>Level 7</Text>
            <Text style={styles.lockTitle}>학습 전이에요</Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.studyBox, styles.lockBox]}>
            <Image
              source={require("../assets/lock.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.lockLevel}>Level 8</Text>
            <Text style={styles.lockTitle}>학습 전이에요</Text>
            <Text
              style={{
                fontFamily: "SUITE_Regular",
                color: "#656565",
                textAlign: "right",
                paddingTop: 22,
              }}
            >
              2023 / 05 / 31
            </Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  studyBox: {
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 22,
    width: "47.5%",
  },
  studyBox1: {
    backgroundColor: "#D7F5DC",
  },
  studyBox2: {
    backgroundColor: "#FFF0EF",
  },
  lockBox: {
    backgroundColor: "#F6F6F6",
  },
  lockLevel: {
    fontFamily: "SUITE_Bold",
    color: "#B6B6B6",
    paddingTop: 16,
    paddingBottom: 6,
  },
  lockTitle: {
    fontFamily: "SUITE_Bold",
    fontSize: 16,
    color: "#898989",
  },
});
