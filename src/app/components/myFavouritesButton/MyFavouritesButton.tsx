"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MyFavouritesButton: React.FC = () => {
  const router = useRouter();
  const goToMyFavourites = () => {
    router.push("/myFavourites");
  };
  return <button onClick={goToMyFavourites}>Go to My Favourites</button>;
};
export default MyFavouritesButton;
