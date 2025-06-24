import BestSellerDishes from "@/components/BestSellerDishes";
import RestaurantBanner from "@/components/RestaurantBanner";
import Reviews from "@/components/Reviews";
import React from "react";

const page = () => {
  return (
    <div>
      <RestaurantBanner />
      <div className="container mx-auto px-4">
        <BestSellerDishes />
        <Reviews />
      </div>
    </div>
  );
};

export default page;
