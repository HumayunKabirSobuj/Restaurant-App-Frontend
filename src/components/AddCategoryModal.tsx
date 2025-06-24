/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Modal from "./Modal";
import { toast } from "sonner";
import { createCategory } from "@/services/category";
interface Props {
  onCategoryAdded?: () => void;
}
export default function AddCategoryModal({ onCategoryAdded }: Props) {
  const [isAddCategory, setIsAddCategory] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Handle form submission logic here

    const name = e.target.name.value;
    // console.log(name);
    const categoryData = {
      name,
    };
    // console.log(categoryData);
    try {
      const result = await createCategory(categoryData);
      //   toast.success("Category added successfully!");
      //   console.log(result);
      toast.success(result.message || "Category added successfully!");
      onCategoryAdded?.();

      setIsAddCategory(false);
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
          onClick={() => setIsAddCategory(true)}
          className="px-6 lg:py-2 bg-black text-white rounded-full transition-colors"
        >
          Add Category
        </button>
      </div>

      {/* Form Modal */}
      <Modal
        isOpen={isAddCategory}
        onClose={() => setIsAddCategory(false)}
        title="Add Category"
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category name"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsAddCategory(false)}
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
