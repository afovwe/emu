// components/PropertyDetails.tsx
import { Image, Text, View } from "react-native";
import icons from "@/constants/icons";

const PropertyDetails = ({ bedrooms, bathrooms, area }: { bedrooms: number, bathrooms: number, area: number }) => {
  return (
    <View className="flex flex-row items-center mt-5">
      <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
        <Image source={icons.bed} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">{bedrooms} Beds</Text>

      <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
        <Image source={icons.bath} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">{bathrooms} Baths</Text>

      <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
        <Image source={icons.area} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">{area} sqft</Text>
    </View>
  );
};

export default PropertyDetails;
