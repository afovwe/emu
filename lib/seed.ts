import { ID } from "react-native-appwrite";
import { databases, config } from "./appwrite";
import {
  agentImages,
  galleryImages,
  propertiesImages,
  reviewImages,
} from "./data";

const COLLECTIONS = {
  AGENT: config.agentsCollectionId,
  REVIEWS: config.reviewsCollectionId,
  GALLERY: config.galleriesCollectionId,
  PROPERTY: config.propertiesCollectionId,
};

const propertyTypes = [
  "House",
  "Townhouse",
  "Condos",
  "Duplexes",
  "Studios",
  "Villa",
  "Apartments",
  "Others",
];

// Laundry, Car Parking, Sports Center, 
// Cutlery, Gym, Swimming pool, Wifi, Pet Center
const facilities = [
  "Laundry",
  "Car Parking",
  "Sports Center",
  "Cutlery",
  "Gym",
  "Swimming pool",
  "Wifi",
  "Pet Center",
];

function getRandomSubset<T>(array: T[], minItems: number, maxItems: number): T[] {
  if (minItems > maxItems) {
    throw new Error("minItems cannot be greater than maxItems");
  }
  if (minItems < 0 || maxItems > array.length) {
    throw new Error("minItems or maxItems are out of valid range for the array");
  }

  const subsetSize = Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[i]];
  }

  return arrayCopy.slice(0, subsetSize);
}

async function seed() {
  try {
    // Clear existing data from all collections
    for (const key in COLLECTIONS) {
      const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
      const documents = await databases.listDocuments(config.databaseId!, collectionId!);
      for (const doc of documents.documents) {
        await databases.deleteDocument(config.databaseId!, collectionId!, doc.$id);
      }
    }

    console.log("Cleared all existing data.");

    // Seed Agents
    const agents = [];
    for (let i = 1; i <= 5; i++) {
      const agent = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.AGENT!,
        ID.unique(),
        {
          name: `Agent ${i}`,
          email: `agent${i}@example.com`,
          avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
        }
      );
      agents.push(agent);
    }
    console.log(`Seeded ${agents.length} agents.`);

    // Seed Reviews
    const reviews = [];
    for (let i = 1; i <= 20; i++) {
      const review = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.REVIEWS!,
        ID.unique(),
        {
          name: `Reviewer ${i}`,
          avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
          review: `This is a review by Reviewer ${i}.`,
          rating: Math.floor(Math.random() * 5) + 1, // Rating between 1 and 5
        }
      );
      reviews.push(review);
    }
    console.log(`Seeded ${reviews.length} reviews.`);

    // Seed Galleries
    const galleries = [];
    for (const image of galleryImages) {
      const gallery = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.GALLERY!,
        ID.unique(),
        { image }
      );
      galleries.push(gallery);
    }

    console.log(`Seeded ${galleries.length} galleries.`);
// Define the available facilities
// Define the available facilities
const availableFacilities: string[] = [
  "Laundry", "Car Parking", "Sports Center", "Cutlery", "Gym", "Swimming pool", "Wifi", "Pet Center"
];

// Seed Properties
for (let i = 1; i <= 20; i++) {
  const assignedAgent = agents[Math.floor(Math.random() * agents.length)];

  const assignedReviews = getRandomSubset(reviews, 5, 7); // 5 to 7 reviews
  const assignedGalleries = getRandomSubset(galleries, 3, 8); // 3 to 8 galleries

  // Select random facilities from the available list
  const selectedFacilities: string[] = []; // Explicitly declare the type
  const numFacilities = Math.floor(Math.random() * availableFacilities.length) + 1; // Pick 1 to N facilities
  for (let j = 0; j < numFacilities; j++) {
    const facility = availableFacilities[Math.floor(Math.random() * availableFacilities.length)];
    // Ensure no duplicates by checking if it's already selected
    if (!selectedFacilities.includes(facility)) {
      selectedFacilities.push(facility);
    }
  }

  // Join the selected facilities into a single string (comma-separated)
  const facilitiesString = selectedFacilities.join(", ");

  // Ensure the string doesn't exceed 200 characters
  const truncatedFacilitiesString = facilitiesString.length > 200 ? facilitiesString.substring(0, 200) : facilitiesString;

  const image =
    propertiesImages.length - 1 >= i
      ? propertiesImages[i]
      : propertiesImages[Math.floor(Math.random() * propertiesImages.length)];

  // Log all property types
  console.log("Property types:", propertyTypes);

  // Select a property type
  let selectedType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)].trim();
  console.log("Selected type:", selectedType);

  // Ensure fallback for valid type
  if (!propertyTypes.includes(selectedType)) {
    console.error("Invalid selected type:", selectedType);
    selectedType = "Others"; // Fallback type
  }

  // Create property document
  const property = await databases.createDocument(
    config.databaseId!,
    COLLECTIONS.PROPERTY!,
    ID.unique(),
    {
      name: `Property ${i}`,
      type: selectedType,  // Directly store selected type as string
      description: `This is the description for Property ${i}.`,
      address: `123 Property Street, City ${i}`,
      geolocation: `192.168.1.${i}, 192.168.1.${i}`,
      price: Math.floor(Math.random() * 9000) + 1000,
      area: Math.floor(Math.random() * 3000) + 500,
      bedrooms: Math.floor(Math.random() * 5) + 1,
      bathrooms: Math.floor(Math.random() * 5) + 1,
      rating: Math.floor(Math.random() * 5) + 1,
      facilities: truncatedFacilitiesString,  // Now storing the facilities as a single string
      image: image,
      agent: assignedAgent.$id,
      reviews: assignedReviews.map((review) => review.$id),
      gallery: assignedGalleries.map((gallery) => gallery.$id),
    }
  );

  console.log(`Seeded property: ${property.name}`);
}



    console.log("Data seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

export default seed;
