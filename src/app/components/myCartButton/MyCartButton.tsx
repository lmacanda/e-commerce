"use client";
import { useRouter } from "next/navigation";
import React from "react";

const MyCartButton: React.FC = () => {
  const router = useRouter();
  const goToMyCart = () => {
    router.push("/cart");
  };
  return <button onClick={goToMyCart}>View Cart</button>;
};
export default MyCartButton;
