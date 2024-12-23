// components/Reviews.tsx
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";
import Comment from "@/components/Comment";

const Reviews = ({ reviews, rating }: { reviews: any[], rating: number }) => {
  return (
    <View className="mt-7">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <Image source={icons.star} className="size-6" />
          <Text className="text-black-300 text-xl font-rubik-bold ml-2">{rating} ({reviews.length} reviews)</Text>
        </View>

        <TouchableOpacity>
          <Text className="text-primary-300 text-base font-rubik-bold">View All</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5">
        <Comment item={reviews[0]} />
      </View>
    </View>
  );
};

export default Reviews;
