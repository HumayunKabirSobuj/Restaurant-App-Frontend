import BestSellerDishes from "@/components/BestSellerDishes";
import PartnersSection from "@/components/PartnerSection";
import RestaurantBanner from "@/components/RestaurantBanner";
import Reviews from "@/components/Reviews";
import TeamSection from "@/components/TeamSection";
import React from "react";

const page = () => {
  return (
    <div>
      <RestaurantBanner />
      <div className="container mx-auto px-4">
        <BestSellerDishes />
        <Reviews />
      </div>
      <TeamSection />
      <div className="container mx-auto px-4">
        <PartnersSection />
      </div>
    </div>
  );
};

export default page;
