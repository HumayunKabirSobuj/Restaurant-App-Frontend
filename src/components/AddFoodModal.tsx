/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import { toast } from "sonner";
import axios from "axios";
import { getCategories } from "@/services/category";
import { addFood } from "@/services/food";
interface Props {
  onFoodAdded?: () => void;
}
export default function AddFoodModal({ onFoodAdded }: Props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const catgegoris = await getCategories();
      //   console.log(catgegoris);
      setCategories(catgegoris.data || []); // Assuming the API returns an object with a 'data' property
    };

    fetchCategories();
  }, []);

//   console.log(categories);

  const [isAddFood, setIsAddFodd] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission logic here

    const formData = new FormData(e.target);
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const price = formData.get("price") as string;
    const image = formData.get("image") as File;

    const newFormData = new FormData();
    newFormData.append("file", image); // Add the image file
    newFormData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_OUPLOAD_PRESET as string
    ); // Your upload preset
    newFormData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUD_NAME as string
    ); // Not necessary for the request

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        process.env.NEXT_PUBLIC_CLOUD_NAME as string
      }/image/upload`,
      newFormData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const imageUrl = response.data.url;

    const foodData = {
      name,
      category,
      price: Number.parseFloat(price),
      image: imageUrl,
    };
    // console.log(foodData);
    try {
      const result = await addFood(foodData);
      //   toast.success("Category added successfully!");
      //   console.log(result);
      toast.success(result.message || "Food added successfully!");
      onFoodAdded?.();
      setIsAddFodd(false);
    } catch (error: any) {
      //   console.log(error);
      toast.error(error.message || "Failed to add category");
    }
  };

  return (
    <div>
      {/* Trigger Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setIsAddFodd(true)}
          className="px-6 lg:py-2 bg-black text-white rounded-full transition-colors"
        >
          Add Food
        </button>
      </div>

      {/* Form Modal */}
      <Modal
        isOpen={isAddFood}
        onClose={() => setIsAddFodd(false)}
        title="Add Food"
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Food Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter food name"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select a category</option>
              {categories.map((category: any) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Food Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsAddFodd(false)}
              className="px-4 py-2 border w-24 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 w-24 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="Confirm Action"
        size="sm"
        closeOnOverlayClick={false}
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsConfirmModalOpen(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Handle delete action here
                setIsConfirmModalOpen(false);
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
