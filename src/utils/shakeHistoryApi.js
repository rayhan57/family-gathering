import app from "../app/firebase";
import { get, getDatabase, push, ref, remove, set } from "firebase/database";

export const addShakeHistory = async (shakeHistory, onSuccess) => {
  const db = getDatabase(app);
  const newShakeHistory = push(ref(db, "shakeHistory"));
  set(newShakeHistory, shakeHistory)
    .then(() => onSuccess())
    .catch((error) => console.error("Failed to add shake history", error));
};

export const getShakeHistory = async () => {
  const db = getDatabase(app);
  const shakeHistoryRef = ref(db, "shakeHistory");
  const snapshot = await get(shakeHistoryRef);
  const shakeHistory = snapshot.val() || {};

  const currentTime = Date.now();
  const thirtyDaysInMillis = 30 * 24 * 60 * 60 * 1000;

  // Membersihkan entri yang lebih tua dari 30 hari
  const keysToRemove = Object.keys(shakeHistory).filter(
    (key) => currentTime - shakeHistory[key].timestamp >= thirtyDaysInMillis,
  );

  keysToRemove.forEach((key) => remove(ref(db, `shakeHistory/${key}`)));

  // Mengembalikan riwayat yang masih relevan
  const filteredShakeHistory = Object.keys(shakeHistory)
    .filter((key) => !keysToRemove.includes(key))
    .map((key) => ({
      ...shakeHistory[key],
      id: key,
    }));

  return filteredShakeHistory;
};
