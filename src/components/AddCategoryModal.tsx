"use client"

import { useState } from "react"
import Modal from "./Modal"

export default function AddCategoryModal() {
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Modal Examples</h1>

      {/* Trigger Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setIsBasicModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Basic Modal
        </button>

        <button
          onClick={() => setIsFormModalOpen(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Open Form Modal
        </button>

        <button
          onClick={() => setIsConfirmModalOpen(true)}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Open Confirm Modal
        </button>
      </div>

      {/* Basic Modal */}
      <Modal isOpen={isBasicModalOpen} onClose={() => setIsBasicModalOpen(false)} title="Basic Modal" size="md">
        <div className="space-y-4">
          <p className="text-gray-600">This is a basic modal example. You can put any content here.</p>
          <p className="text-gray-600">
            The modal can be closed by clicking the X button, pressing Escape, or clicking outside the modal.
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => setIsBasicModalOpen(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} title="Contact Form" size="lg">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setIsFormModalOpen(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
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
          <p className="text-gray-600">Are you sure you want to delete this item? This action cannot be undone.</p>
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
                setIsConfirmModalOpen(false)
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
