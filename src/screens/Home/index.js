import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import Post from "../../components/Post/index";

import posts from "../../../data/posts";

const Home = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height - 120}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default Home;
