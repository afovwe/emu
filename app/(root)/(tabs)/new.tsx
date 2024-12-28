import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import icons from "@/constants/icons";
import React from 'react'

const New = () => {
 const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    address: "",
    facilities: "",
    image: "",
    gallery: [],
  });

  const handleSubmit = () => {
    // Add submission logic here
  };

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <View className="gap-4">
        <Text className="text-2xl font-rubik-bold text-black-300">Create New Listing</Text>

        <View className="gap-3">
          <Text className="text-black-200 font-rubik-medium">Property Name</Text>
          <TextInput
            value={formData.name}
            onChangeText={(text) => setFormData(prev => ({...prev, name: text}))}
            className="border border-primary-200 rounded-xl p-3"
            placeholder="Enter property name"
          />
        </View>

        <View className="gap-3">
          <Text className="text-black-200 font-rubik-medium">Property Type</Text>
          <TextInput
            value={formData.type}
            onChangeText={(text) => setFormData(prev => ({...prev, type: text}))}
            className="border border-primary-200 rounded-xl p-3"
            placeholder="House, Apartment, etc."
          />
        </View>

        <View className="gap-3">
          <Text className="text-black-200 font-rubik-medium">Price</Text>
          <TextInput
            value={formData.price}
            onChangeText={(text) => setFormData(prev => ({...prev, price: text}))}
            className="border border-primary-200 rounded-xl p-3"
            placeholder="Enter price"
            keyboardType="numeric"
          />
        </View>

        <View className="flex-row gap-4">
          <View className="flex-1 gap-3">
            <Text className="text-black-200 font-rubik-medium">Bedrooms</Text>
            <TextInput
              value={formData.bedrooms}
              onChangeText={(text) => setFormData(prev => ({...prev, bedrooms: text}))}
              className="border border-primary-200 rounded-xl p-3"
              keyboardType="numeric"
            />
          </View>

          <View className="flex-1 gap-3">
            <Text className="text-black-200 font-rubik-medium">Bathrooms</Text>
            <TextInput
              value={formData.bathrooms}
              onChangeText={(text) => setFormData(prev => ({...prev, bathrooms: text}))}
              className="border border-primary-200 rounded-xl p-3"
              keyboardType="numeric"
            />
          </View>

          <View className="flex-1 gap-3">
            <Text className="text-black-200 font-rubik-medium">Area (sqft)</Text>
            <TextInput
              value={formData.area}
              onChangeText={(text) => setFormData(prev => ({...prev, area: text}))}
              className="border border-primary-200 rounded-xl p-3"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View className="gap-3">
          <Text className="text-black-200 font-rubik-medium">Description</Text>
          <TextInput
            value={formData.description}
            onChangeText={(text) => setFormData(prev => ({...prev, description: text}))}
            className="border border-primary-200 rounded-xl p-3"
            multiline
            numberOfLines={4}
          />
        </View>

        <View className="gap-3">
          <Text className="text-black-200 font-rubik-medium">Address</Text>
          <TextInput
            value={formData.address}
            onChangeText={(text) => setFormData(prev => ({...prev, address: text}))}
            className="border border-primary-200 rounded-xl p-3"
            placeholder="Enter property address"
          />
        </View>

        <TouchableOpacity 
          onPress={handleSubmit}
          className="bg-primary-300 py-4 rounded-full mt-4"
        >
          <Text className="text-white text-center font-rubik-bold text-lg">
            Create Listing
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default New