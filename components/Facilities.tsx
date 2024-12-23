import React from "react";
import { View, Text, Image } from "react-native";
import icons from "@/constants/icons";
import { facilities as allFacilities } from "@/constants/data";

interface FacilitiesProps {
  facilities: string[];
}

const Facilities: React.FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
      {facilities.map((item, index) => {
        const facility = allFacilities.find(
          (facility) => facility.title === item
        );

        return (
          <View
            key={index}
            className="flex flex-1 flex-col items-center min-w-16 max-w-20"
          >
            <View className="size-14 bg-primary-100 rounded-full flex items-center justify-center">
              <Image
                source={facility ? facility.icon : icons.info}
                className="size-6"
              />
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-black-300 text-sm text-center font-rubik mt-1.5"
            >
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Facilities;
