import {
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { HStack, IconButton, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";

const img1 = require("../assets/lodg1.png");
const img2 = require("../assets/lodg2.png");
const img3 = require("../assets/lodg3.png");
const img4 = require("../assets/lodg4.png");
const img5 = require("../assets/lodg5.png");

export default function SlideCard_Lodg({ num }) {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(true);
  const [img, setImg] = useState(img1);
  useEffect(() => {
    if (num == "1") {
      setImg(img1);
    } else if (num == "2") {
      setImg(img2);
    } else if (num == "3") {
      setImg(img3);
    } else if (num == "4") {
      setImg(img4);
    } else if (num == "5") {
      setImg(img5);
    }
  }, []);

  return (
    <HStack>
      <ImageBackground source={img} style={styles.bestImg} borderRadius={15}>
        <HStack
          justifyContent={"space-between"}
          paddingBottom={3}
          alignItems="center"
        >
          <Text style={styles.bestCon}>여기 묵을 수 있나요?</Text>
          {like ? (
            <IconButton
              onPress={() => {
                setLike(!like);
              }}
              icon={<AntDesign name="heart" size={18} color="#FF6A6A" />}
            />
          ) : (
            <IconButton
              onPress={() => {
                setLike(!like);
              }}
              icon={<AntDesign name="hearto" size={18} color="#FF6A6A" />}
            />
          )}
        </HStack>
        <Text style={styles.bestConJ}>코코니토마리마스카?</Text>
        <Text style={styles.bestConJ}>ここに泊まりますか？</Text>
        {play ? (
          <TouchableOpacity
            onPress={() => {
              setPlay(!play);
            }}
            style={{ alignItems: "flex-end" }}
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
            style={{ alignItems: "flex-end" }}
          >
            <Image
              source={require("../assets/pause.png")}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        )}
      </ImageBackground>
    </HStack>
  );
}

const styles = StyleSheet.create({
  bestImg: {
    width: 280,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 22,
  },
  bestCon: {
    fontFamily: "SUITE_Bold",
    fontSize: 14,
    color: "white",
  },
  bestConJ: {
    fontFamily: "Chassam",
    fontSize: 14,
    color: "white",
  },
});
