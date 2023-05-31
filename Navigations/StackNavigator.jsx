import React from "react";
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from "@react-navigation/stack";

//페이지로 만든 컴포넌트들을 불러옵니다
import SignInPage from "../pages/SignInPage";
import TabNavigator from "./TabNavigator";
import SignUp from "../pages/SignUp";
import MyProfilePage from "../pages/MyProfile";
import LodgmentPage from "../pages/LodgmentPage";
import Q1page from "../pages/Q1page";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "black",
        //   height: 50,
        // },
        headerTintColor: "white",
        headerShown: false,
      }}
    >
      {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}

      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MyProfilePage" component={MyProfilePage} />
      <Stack.Screen name="LodgmentPage" component={LodgmentPage} />
      <Stack.Screen name="Q1page" component={Q1page} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
