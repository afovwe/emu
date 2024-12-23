import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import icons from "@/constants/icons";

// Define the type for the agent prop
interface AgentInfoProps {
  agent: {
    avatar: string;
    name: string;
    email: string;
  };
}

const AgentInfo: React.FC<AgentInfoProps> = ({ agent }) => {
  return (
    <View className="w-full border-t border-primary-200 pt-7 mt-5">
      <Text className="text-black-300 text-xl font-rubik-bold">Agent</Text>

      <View className="flex flex-row items-center justify-between mt-4">
        {/* Agent Info */}
        <View className="flex flex-row items-center">
          <Image
            source={{ uri: agent?.avatar }}
            className="size-14 rounded-full border border-primary-100 shadow-md"
          />

          <View className="flex flex-col ml-3">
            <Text className="text-lg text-black-300 font-rubik-bold">{agent?.name}</Text>
            <Text className="text-sm text-black-200 font-rubik-medium">{agent?.email}</Text>
          </View>
        </View>

        {/* Contact Options */}
        <View className="flex flex-row items-center gap-4">
          <TouchableOpacity>
            <Image source={icons.chat} className="size-7" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={icons.phone} className="size-7" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AgentInfo;
