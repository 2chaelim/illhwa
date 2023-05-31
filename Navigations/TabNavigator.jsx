import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Box } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";
import StudyPage from "../pages/StudyPage";
import SearchPage from "../pages/SearchPage";

// expo 에서 제공하는 아이콘
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "HomePage") {
            iconName += "home";
          } else if (route.name === "StudyPage") {
            iconName += "book";
          } else if (route.name === "MyPage") {
            iconName += "person";
          } else if (route.name === "SearchPage") {
            iconName += "search";
          }

          return (
            <LinearGradient
              style={styles.tabBarIcon}
              colors={
                focused
                  ? ["#FED2CF", "#CDDBF5"]
                  : ["transparent", "transparent"]
              }
              start={{ x: 0.1, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
              <Ionicons
                name={iconName}
                size={26}
                color={focused ? "white" : "#D3D3D3"}
              />
            </LinearGradient>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          display: "flex",
          borderTopColor: "transparent",
          paddingBottom: 14,
          paddingTop: 14,
          paddingHorizontal: 16,
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen name="HomePage" component={HomePage} />
      <Tabs.Screen name="StudyPage" component={StudyPage} />
      <Tabs.Screen name="MyPage" component={MyPage} />
      <Tabs.Screen name="SearchPage" component={SearchPage} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 73,
    height: 45,
    paddingLeft: "25%",
    paddingVertical: 8,
    borderRadius: 50,
  },
});
export default TabNavigator;
