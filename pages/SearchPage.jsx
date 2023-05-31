import { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  ScrollView,
  Input,
  View,
  HStack,
  Divider,
  Flex,
  Box,
  Center,
  VStack,
  IconButton,
} from "native-base";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import dt from "../data.json";
import Card from "../Components/Card";

export default function SearchPage({ navigation, route }) {
  const data = dt.datas;
  const [searchValue, setSearchValue] = useState([]);

  // console.log(data);

  useEffect(() => {
    setSearchValue(data);
    // console.log(searchValue[0]);
    navigation.setOptions({
      title: "검색",
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
    <ScrollView backgroundColor={"white"} flex={1} paddingTop={4}>
      <View marginX={4}>
        <HStack alignItems="center">
          <Input
            style={styles.inputCon}
            placeholder={"검색어를 입력하세요"}
            placeholderTextColor="#656565"
            borderColor={"transparent"}
            paddingLeft={3}
            focusOutlineColor="transparent"
            width={"89%"}
          />
          <IconButton
            icon={<FontAwesome name="search" size={24} color="#656565" />}
            flex={1}
            padding={0}
            height={"100%"}
            paddingLeft={4}
          />
        </HStack>
        <Text style={styles.searchT}>최근 검색</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <Text style={styles.recentS}>음식주문</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>택시</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>공항</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>호텔예약</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>화장실</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>카페</Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style={styles.searchT}>인기 검색</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          paddingBottom={22}
        >
          <TouchableOpacity>
            <Text
              style={{
                borderRadius: 50,
                paddingHorizontal: 16,
                paddingVertical: 8,
                fontFamily: "Chassam",
                fontSize: 14,
                color: "white",
                backgroundColor: "#FF6A6A",
                marginBottom: 6,
                marginRight: 16,
              }}
            >
              호텔예약
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                borderRadius: 50,
                paddingHorizontal: 16,
                paddingVertical: 8,
                fontFamily: "Chassam",
                fontSize: 14,
                color: "white",
                backgroundColor: "#FF8A8A",
                marginBottom: 6,
                marginRight: 16,
              }}
            >
              식당
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                borderRadius: 50,
                paddingHorizontal: 16,
                paddingVertical: 8,
                fontFamily: "Chassam",
                fontSize: 14,
                color: "white",
                backgroundColor: "#FED2CF",
                marginBottom: 6,
                marginRight: 16,
              }}
            >
              음식주문
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>항공편</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>화장실</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.recentS}>팁</Text>
          </TouchableOpacity>
        </ScrollView>

        {searchValue.map((item, i) => {
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
  inputCon: {
    height: 41,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    fontFamily: "Chassam",
    fontSize: 14,
  },
  searchT: {
    fontFamily: "SUITE_Regular",
    color: "#656565",
    paddingTop: 22,
    fontSize: 16,
    paddingBottom: 10,
  },
  recentS: {
    fontFamily: "Chassam",
    fontSize: 14,
    color: "#656565",
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
    marginRight: 16,
  },
});
