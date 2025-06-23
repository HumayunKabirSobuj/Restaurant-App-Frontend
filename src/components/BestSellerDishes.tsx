"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AddCategoryModal from "./AddCategoryModal";
import AddFoodModal from "./AddFoodModal";
import { getCategories } from "@/services/category";

// const categories = ["All", "Breakfast", "Lunch", "Dinner"]

type Category = {
  _id: string;
  name: string;
};

export default function BestSellerDishes() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const catgegoris = await getCategories();
      //   console.log(catgegoris);
      setCategories(catgegoris.data || []); // Assuming the API returns an object with a 'data' property
    };

    fetchCategories();
  }, []);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Our Best Seller Dishes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoes all tossed in your choice of
          dressing.
        </p>
      </div>

      {/* Filter and Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleCategoryFilter("All")}
            className={`px-6 py-2  rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === "All"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400 hover:shadow-md"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => handleCategoryFilter(category.name)} // ✅ এখন string পাঠাচ্ছি
              className={`px-6 py-2  rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.name
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center gap-4">
          <h1>
            <AddFoodModal />
          </h1>
          <h1>
            <AddCategoryModal />
          </h1>
        </div>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Salad Fry Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-4">
            <Image
              // src="/breakfast-hero.png"
              src="/breakfast-hero.png"
              alt="Salad Fry"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">Salad Fry</h3>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Breakfast
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <div className="text-xl font-bold text-gray-900">$230</div>
            </div>
          </div>
        </div>

        {/* Chicken Breast Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Chicken Breast"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Chicken Breast
              </h3>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Lunch
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <div className="text-xl font-bold text-gray-900">$230</div>
            </div>
          </div>
        </div>

        {/* Chicken Legs Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Chicken Legs"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Chicken Legs
              </h3>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Dinner
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <div className="text-xl font-bold text-gray-900">$230</div>
            </div>
          </div>
        </div>

        {/* Fruit Basic Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Fruit Basic"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Fruit Basic
              </h3>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Lunch
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <div className="text-xl font-bold text-gray-900">$230</div>
            </div>
          </div>
        </div>

        {/* Veggie Salad Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Veggie Salad"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Veggie Salad
              </h3>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Lunch
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <div className="text-xl font-bold text-gray-900">$230</div>
            </div>
          </div>
        </div>

        {/* Chicken Roll Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Chicken Roll"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900">
                Chicken Roll
              </h3>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Breakfast
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <div className="text-xl font-bold text-gray-900">$230</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
