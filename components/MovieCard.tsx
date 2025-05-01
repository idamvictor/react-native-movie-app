import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { icons } from "@/constants/icons";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%] group">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/181818/E5E5E5.png",
          }}
          className="w-full h-52 rounded-sm"
          resizeMode="cover"
        />

        <View className="absolute inset-0 bg-black/20 rounded-sm" />

        <Text
          className="text-sm font-medium text-light-100 mt-2"
          numberOfLines={1}
        >
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-3.5" tintColor="#E50914" />
          <Text className="text-xs text-light-200 font-medium">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 mt-1">
            {release_date?.split("-")[0]}
          </Text>
          <Text className="text-[10px] font-medium text-light-300 bg-dark-100/60 px-1.5 py-0.5 rounded">
            MOVIE
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
