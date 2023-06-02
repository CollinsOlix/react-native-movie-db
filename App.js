import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Item from "./Item";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const movieSections = [
    {
      title: "New releases",
      extraInfo: [
        { id: `${Math.random() * 5.4}`, title: "swe" },
        { id: `${Math.random() * 5.4}`, title: "swe" },
        { id: `${Math.random() * 5.4}`, title: "swe" },
      ],
      id: `${Math.random() * 5.4}`,
    },
    {
      title: "BlockBusters",
      extraInfo: [
        { id: `${Math.random() * 5.4}`, title: "swe" },
        { id: `${Math.random() * 5.4}`, title: "swe" },
        { id: `${Math.random() * 5.4}`, title: "swe" },
      ],
      id: `${Math.random() * 5.4}`,
    },
    {
      title: "New releases",
      extraInfo: [
        { id: `${Math.random() * 5.4}`, title: "swe" },
        { id: `${Math.random() * 5.4}`, title: "swe" },
        { id: `${Math.random() * 5.4}`, title: "swe" },
      ],
      id: `${Math.random() * 5.4}`,
    },
  ];

  return (
    <SafeAreaView style={styles.Host}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity
            style={styles.headerHamburger}
            onPress={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faClose : faBars}
              style={{ color: "white" }}
            />
          </TouchableOpacity>
          <Text style={styles.header}>Watch</Text>
        </View>
        <Image
          source={require("./assets/icon.png")}
          style={{
            flex: 1,
            width: "100%",
            height: 100,
            resizeMode: "cover",
          }}
        />
        <LinearGradient
          start={{ x: 0.0, y: 0 }}
          end={{ x: 0.0, y: 1 }}
          locations={[0, 0.5, 1]}
          colors={["rgba(0,0,0,0)", "#3b5998", "#2e2e22"]}
          style={styles.gradient}
        >
          <View style={styles.moreMovies}>
            <FlatList
              data={movieSections}
              renderItem={({ item }) => (
                <View>
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 15,
                      fontSize: 20,
                    }}
                  >
                    {item.title}
                  </Text>
                  <FlatList
                    horizontal
                    data={item.extraInfo}
                    renderItem={({ item }) => (
                      <View>
                        <Item title={item.title} />
                      </View>
                    )}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Host: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#2e2e22",
  },
  container: {
    flex: 1,
    position: "relative",
    zIndex: 1,
  },
  header: {
    flex: 1,
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginRight: 40,
  },
  headerSection: {
    flexDirection: "row",
    backgroundColor: "#00f",
    alignItems: "center",
  },
  headerHamburger: {
    padding: 7,
    margin: 7,
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 3,
  },
  moreMovies: {
    position: "relative",
  },
  gradient: {
    flex: 1,
    zIndex: 2,
    bottom: 0,
    position: "absolute",
    height: "70%",
    width: "100%",
  },
});
