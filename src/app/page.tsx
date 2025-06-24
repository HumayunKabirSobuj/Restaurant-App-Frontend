import BestSellerDishes from "@/components/BestSellerDishes";
import RestaurantBanner from "@/components/RestaurantBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <RestaurantBanner />
      <div className="container mx-auto px-4">
        <BestSellerDishes />
      </div>
    </div>
  );
};

export default page;
