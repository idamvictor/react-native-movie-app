import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { icons } from "@/constants/icons";
import useFetch from "@/services/usefetch";
import { fetchMovieDetails } from "@/services/api";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-light-300 font-medium text-sm uppercase tracking-wider">
      {label}
    </Text>
    <Text className="text-light-100 font-medium text-base mt-1">
      {value || "N/A"}
    </Text>
  </View>
);

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  if (loading)
    return (
      <SafeAreaView className="bg-primary flex-1">
        <ActivityIndicator color="#E50914" />
      </SafeAreaView>
    );

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="relative">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="cover"
          />

          <LinearGradient
            colors={["transparent", "#141414"]}
            className="absolute bottom-0 left-0 right-0 h-32"
          />

          <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-accent flex items-center justify-center">
            <Image
              source={icons.play}
              className="w-6 h-7 ml-1"
              resizeMode="stretch"
              tintColor="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-light-100 font-bold text-2xl">
            {movie?.title}
          </Text>

          <View className="flex-row items-center gap-x-3 mt-3">
            <Text className="text-light-200 text-base font-medium">
              {movie?.release_date?.split("-")[0]}
            </Text>
            <View className="w-1 h-1 bg-light-300 rounded-full" />
            <Text className="text-light-200 text-base font-medium">
              {movie?.runtime}m
            </Text>
          </View>

          <View className="flex-row items-center bg-dark-100/40 px-3 py-1.5 rounded-md gap-x-1 mt-3">
            <Image source={icons.star} className="size-4" tintColor="#E50914" />
            <Text className="text-light-100 font-bold text-base">
              {Math.round(movie?.vote_average ?? 0)}/10
            </Text>
            <Text className="text-light-300 text-sm ml-1">
              ({movie?.vote_count.toLocaleString()} votes)
            </Text>
          </View>

          <Text className="text-light-200 text-base leading-6 mt-5">
            {movie?.overview}
          </Text>

          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g) => g.name).join(" • ") || "N/A"}
          />

          <View className="flex flex-row justify-between w-full mt-5">
            <View className="w-[48%]">
              <MovieInfo
                label="Budget"
                value={`$${(movie?.budget ?? 0).toLocaleString()}`}
              />
            </View>
            <View className="w-[48%]">
              <MovieInfo
                label="Revenue"
                value={`$${(movie?.revenue ?? 0).toLocaleString()}`}
              />
            </View>
          </View>

          <MovieInfo
            label="Production"
            value={
              movie?.production_companies?.map((c) => c.name).join(" • ") ||
              "N/A"
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        className="absolute bottom-5 left-0 right-0 mx-5 bg-accent/90 rounded-md py-4 flex flex-row items-center justify-center z-50"
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-2 rotate-180"
          tintColor="#FFFFFF"
        />
        <Text className="text-light-100 font-semibold text-base">
          Back to Browse
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;
