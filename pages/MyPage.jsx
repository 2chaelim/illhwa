import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  HStack,
  VStack,
  Box,
  Switch,
  Center,
  AlertDialog,
  Button,
} from "native-base";

export default function MyPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "마이페이지",
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

  const logOut = () => {
    navigation.navigate("SignInPage");
  };

  const myProfile = () => {
    navigation.navigate("MyProfilePage");
  };

  // alert Modal
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <View style={{ paddingTop: 16, backgroundColor: "white", flex: 1 }}>
      <View style={{ marginHorizontal: 16 }}>
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
            <TouchableOpacity onPress={logOut}>
              <HStack alignItems={"center"}>
                <Text
                  style={{
                    fontFamily: "SUITE_Regular",
                    paddingRight: 4,
                  }}
                >
                  로그아웃
                </Text>
                <Entypo name="chevron-right" size={16} color="#656565" />
              </HStack>
            </TouchableOpacity>
          </VStack>
        </HStack>
        <TouchableOpacity style={styles.myBtn} onPress={myProfile}>
          <HStack justifyContent="space-between" alignItems={"center"}>
            <Text style={styles.myT}>내 프로필</Text>
            <Entypo name="chevron-right" size={18} color="#656565" />
          </HStack>
        </TouchableOpacity>
        <Box
          borderRadius={20}
          backgroundColor="#f6f6f6"
          paddingY={1}
          marginBottom={22}
        >
          <HStack
            justifyContent="space-between"
            alignItems={"center"}
            paddingX={22}
            borderBottomWidth={0.2}
            borderBottomColor="#656565"
          >
            <Text>알림 받기</Text>
            <Switch size="md" onTrackColor={"#FED2CF"} />
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems={"center"}
            paddingX={22}
          >
            <Text>다크 모드</Text>
            <Switch size="md" onTrackColor={"#FED2CF"} />
          </HStack>
        </Box>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6A6A",
            borderRadius: 50,
            paddingVertical: 14,
          }}
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text
            style={{
              fontFamily: "SUITE_Regular",
              color: "white",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            계정삭제
          </Text>
        </TouchableOpacity>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.Header>
              <Text
                style={{
                  fontFamily: "SUITE_Bold",
                  textAlign: "center",
                }}
              >
                계정삭제
              </Text>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text
                style={{
                  fontFamily: "SUITE_Regular",
                  textAlign: "center",
                  paddingBottom: 12,
                }}
              >
                삭제한 계정은 복구할 수 없습니다.
              </Text>
              <Text
                style={{ fontFamily: "SUITE_Regular", textAlign: "center" }}
              >
                정말 삭제하시겠습니까?
              </Text>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={onClose}
                  ref={cancelRef}
                >
                  <Text style={{ fontFamily: "SUITE_Regular" }}> 취소</Text>
                </Button>
                <Button onPress={logOut} backgroundColor="#FF6A6A">
                  <Text
                    style={{
                      fontFamily: "SUITE_Regular",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    삭제
                  </Text>
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myT: {
    fontFamily: "SUITE_Regular",
    color: "#2c2c2c",
    fontSize: 16,
  },
  myBtn: {
    backgroundColor: "#f6f6f6",
    paddingHorizontal: 22,
    paddingVertical: 16,
    borderRadius: 50,
    marginBottom: 22,
  },
});
