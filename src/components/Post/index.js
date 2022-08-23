import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Video } from "expo-av";
import styles from "./styles";

const Post = (props) => {
  // console.log(props);
  // const { post } = props;

  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);

  const [shouldPlay, setShouldPlay] = useState(true);

  const onPlayPausePress = () => {
    setShouldPlay(!shouldPlay);
  };

  const onLikePress = () => {
    // console.warn("like");
    const likesToAdd = isLiked ? -1 : 1;
    setPost({ ...post, likes: post.likes + likesToAdd });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{
              uri: post.videoUri,
            }}
            shouldPlay={shouldPlay}
            style={styles.video}
            resizeMode="cover"
            repeat={true}
            isLooping
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: post.user.imageUri,
                }}
              />

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}
              >
                <AntDesign
                  name="heart"
                  size={40}
                  color={isLiked ? "red" : "white"}
                />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome name="commenting" size={40} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name="share-a" size={35} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>

                <View style={styles.songRow}>
                  {/* {Icon} */}
                  <Entypo name="beamed-note" size={24} color="white" />
                  {/* {Name} */}
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{
                  uri: post.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
