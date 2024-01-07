import { TFirebaseThink } from "@/types/think";
import firebase from ".";

export const getThinkById = async (thinkId: string | number) => {
  const thinkDoc = await firebase
    .firestore()
    .collection("thinks")
    .doc(`${thinkId}`)
    .get();
  if (!thinkDoc.exists) return null;
  return thinkDoc.data() as TFirebaseThink;
};
