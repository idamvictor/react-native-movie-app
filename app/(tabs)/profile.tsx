import { icons } from "@/constants/icons";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <LinearGradient
        colors={["rgba(20,20,20,0.9)", "#141414"]}
        className="absolute inset-0"
      />
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <View className="bg-accent/10 p-8 rounded-full">
          <Image
            source={icons.person}
            className="size-12"
            tintColor="#E50914"
          />
        </View>
        <Text className="text-light-100 text-xl font-medium">Profile</Text>
        <Text className="text-light-300 text-base text-center px-8">
          Sign in to keep track of your favorite shows and movies
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
