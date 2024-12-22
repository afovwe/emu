import React from 'react';
import { View, Text, Image } from 'react-native';

interface Facility {
  title: string;
  icon: any; // Adjust the type based on your icon import
}

interface FacilitiesProps {
  facilitiesList: string[];
  facilities: Facility[];
  icons: { info: any }; // Adjust as needed
}

const Facilities: React.FC<FacilitiesProps> = ({ facilitiesList, facilities, icons }) => {
  return (
    <View className="mt-7">
      <Text className="text-black-300 text-xl font-rubik-bold">Facilities</Text>
      {facilitiesList.length > 0 ? (
        <View className="flex flex-row flex-wrap items-start justify-start mt-2 gap-5">
          {facilitiesList.map((item, index) => {
            const facility = facilities.find((fac) => fac.title === item);
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
      ) : (
        <Text className="text-black-200 text-sm font-rubik mt-2">No facilities available</Text>
      )}
    </View>
  );
};

export default Facilities;
