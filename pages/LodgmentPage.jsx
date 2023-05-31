import { Text, StyleSheet, Image } from "react-native";
import { ScrollView, HStack, View, Box } from "native-base";
import SlideCard_Lodg from "../Components/SlideCard_Lodg";
import Card from "../Components/Card";
import dt from "../data.json";
import { useState } from "react";
import { useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

export default function LodgmentPage({ navigation }) {
  const data = dt.datas;
  const filterData = data.filter((item) => item.category === "숙박");
  const [lodg, setLodg] = useState([]);
  // console.log("aaa", lodg[0].title);

  useEffect(() => {
    setLodg(filterData);
    navigation.setOptions({
      title: "숙박",
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

  return (
    <ScrollView flex={1} backgroundColor="white">
      <HStack marginX={4} paddingTop={22}>
        <Text style={styles.lodgT}>대표 어휘</Text>
        <Image source={require("../assets/best.png")} />
      </HStack>
      <ScrollView
        horizontal={true}
        height={170}
        showsHorizontalScrollIndicator={false}
      >
        <HStack>
          <SlideCard_Lodg num={"1"} />
          <SlideCard_Lodg num={"2"} />
          <SlideCard_Lodg num={"3"} />
          <SlideCard_Lodg num={"4"} />
          <SlideCard_Lodg num={"5"} />
        </HStack>
      </ScrollView>
      <View marginX={4} paddingTop={8}>
        <HStack>
          <Text style={styles.lodgT}>필수 어휘</Text>
          <Image source={require("../assets/hot.png")} />
        </HStack>
        {lodg.map((item, i) => {
          if (i % 4 == 0) {
            return (
              <Box
                key={i}
                borderRadius={10}
                overflow={"hidden"}
                marginBottom={4}
                backgroundColor={"#FED2CF"}
              >
                <Card item={item} num={"0"} />
              </Box>
            );
          } else if (i % 4 == 1) {
            return (
              <Box
                key={i}
                borderRadius={10}
                overflow={"hidden"}
                marginBottom={4}
                backgroundColor={"#CDDBF5"}
              >
                <Card item={item} num={"1"} />
              </Box>
            );
          } else if (i % 4 == 2) {
            return (
              <Box
                key={i}
                borderRadius={10}
                overflow={"hidden"}
                marginBottom={4}
                backgroundColor={"#BDE2C3"}
              >
                <Card item={item} num={"2"} />
              </Box>
            );
          } else if (i % 4 == 3) {
            return (
              <Box
                key={i}
                borderRadius={10}
                overflow={"hidden"}
                marginBottom={4}
                backgroundColor={"#FFC480"}
              >
                <Card item={item} num={"3"} />
              </Box>
            );
          }
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lodgT: {
    fontFamily: "SUITE_Bold",
    fontSize: 16,
    paddingRight: 2,
    paddingBottom: 12,
  },
});
