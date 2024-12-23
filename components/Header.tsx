// components/Header.tsx
import { Image, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";

interface HeaderProps {
  property: {
    name: string;
    type: string;
    rating: number;
    reviews: { length: number }[];
    imageUrl: string; // Image URL for the property header
  };
  windowHeight: number; // The height of the window for header sizing
}

const Header: React.FC<HeaderProps> = ({ property, windowHeight }) => {
  return (
    <View className="relative w-full" style={{ height: windowHeight / 2 }}>
      {/* Property Image */}
      <Image source={{ uri: property.imageUrl }} className="size-full" resizeMode="cover" />
      
      {/* Gradient Overlay */}
      <Image source={images.whiteGradient} className="absolute top-0 w-full z-40" />

      {/* Header Controls */}
      <View className="z-50 absolute inset-x-7 top-20">
        <View className="flex flex-row items-center w-full justify-between">
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
          >
            <Image source={icons.backArrow} className="size-5" />
          </TouchableOpacity>

          {/* Favorite and Share Icons */}
          <View className="flex flex-row items-center gap-3">
            <Image source={icons.heart} className="size-7" tintColor={"#191D31"} />
            <Image source={icons.send} className="size-7" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
