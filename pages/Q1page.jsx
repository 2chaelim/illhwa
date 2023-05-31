import { Text, ImageBackground, StyleSheet} from "react-native";
import { IconButton, View, Box, VStack, HStack } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Q1page({ navigation }) {
const goStudy = ()=>{
  navigation.navigate('StudyPage')
}
       
  return (
    <View>
      <ImageBackground
        source={require("../assets/Qbg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View borderBottomWidth={1} borderBottomColor='#D3D3D3' height={20} paddingTop={8} alignItems='flex-start'>
          <IconButton marginX={4} onPress={goStudy} icon={ <Entypo name="chevron-left" size={24} color="#2c2c2c" />} />
        </View>
        <View borderWidth={1} marginX={4}>
          <Text 
            style={{
              paddingTop: 22,
              fontFamily: 'SUITE_Regular',
              fontSize: 16,
              color: '#2c2c2c',
              marginBottom: 16,
            }}>
              Q. 다음 문장의 일본어 발음으로 올바른 것을 고르세요.
          </Text>
          <Box borderRadius={20} backgroundColor='white' paddingY={8} alignItems='center' marginBottom={22}>
            <Text style={[styles.qText, styles.qTitle]}>이것은 얼마입니까?</Text>
            <Text style={styles.qText}>これはいくらですか</Text>
          </Box>
          <TouchableOpacity style={styles.aCon}>
            <HStack  alignItems='center' >
              <Box style={styles.numBox}>
              <Text style={styles.aNum}>1</Text>
              </Box>
              <Text style={styles.aText}>코레와이쿠라데스카</Text>
              </HStack>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aCon}>
            <HStack  alignItems='center' >
              <Box style={styles.numBox}>
              <Text style={styles.aNum}>2</Text>
              </Box>
              <Text style={styles.aText}>하지메마시테</Text>
              </HStack>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aCon}>
            <HStack  alignItems='center' >
              <Box style={styles.numBox}>
              <Text style={styles.aNum}>3</Text>
              </Box>
              <Text style={styles.aText}>오하요고자이마스</Text>
              </HStack>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aCon}>
            <HStack  alignItems='center' >
              <Box style={styles.numBox}>
              <Text style={styles.aNum}>4</Text>
              </Box>
              <Text style={styles.aText}>코레와난데스카</Text>
              </HStack>
          </TouchableOpacity>
          {/* <HStack> */}
            <HStack width={'50%'} flexDir={'column'} borderWidth={1} paddingTop={8} justifyContent='space-between'>
              <TouchableOpacity
                style={{
                  backgroundColor: '#D3D3D3',
                  borderWidth: 1,
                  }}
                  >
                <Text style={{borderWidth: 1,}}>힌트 보기</Text>
              </TouchableOpacity>
            </HStack>
            <HStack width={'50%'} flexDir={'column'} borderWidth={1} paddingTop={8} justifyContent='space-between'>
              <TouchableOpacity
                style={{
                  backgroundColor: '#D3D3D3',
                  borderWidth: 1,
                  }}
                  >
                <Text style={{borderWidth: 1,}}>힌트 보기</Text>
              </TouchableOpacity>
            </HStack>
          {/* </HStack> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  qText: {
    fontFamily: 'Chassam',
    fontSize: 16
  },
  qTitle : {
    paddingBottom: 6
  },
  aCon : {
    paddingBottom: 12,
  },
  numBox: {
    width: 20,
    height: 20,
    backgroundColor: '#CDDBF5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  aNum: {
    color: '#2c2c2c',
    fontSize: 16,
    fontFamily: 'SUITE_Regular'
  },
  aText: {
    fontFamily: 'SUITE_Regular',
    fontSize: 16,
    color: '#2c2c2c',
    paddingLeft: 10
  }
})