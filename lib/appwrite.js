const APPWRITE_PROJECT_ID = "68324c49000c7feaa9a1";
import { Client, Account, ID, Models, Avatars } from "react-native-appwrite";

export const client = new Client();
client
  // .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
  .setProject("68324c49000c7feaa9a1") // Your Project ID
  .setPlatform("dev.atims.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
