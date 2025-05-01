import { icons } from "@/constants/icons";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Save = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <LinearGradient
        colors={["rgba(20,20,20,0.9)", "#141414"]}
        className="absolute inset-0"
      />
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <View className="bg-accent/10 p-8 rounded-full">
          <Image source={icons.save} className="size-12" tintColor="#E50914" />
        </View>
        <Text className="text-light-100 text-xl font-medium">My List</Text>
        <Text className="text-light-300 text-base text-center px-8">
          Save shows and movies to watch later
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Save;
