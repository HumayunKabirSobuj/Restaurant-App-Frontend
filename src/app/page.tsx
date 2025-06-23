import BestSellerDishes from '@/components/BestSellerDishes';
import RestaurantBanner from '@/components/RestaurantBanner';
import React from 'react';

const page = () => {
  return (
    <div>
      <RestaurantBanner/>
      <BestSellerDishes/>
    </div>
  );
};

export default page;