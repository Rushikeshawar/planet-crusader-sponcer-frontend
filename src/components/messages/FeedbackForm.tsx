import React, { useState } from 'react';
import { Card } from '../common/Card';
import { Dropdown } from '../common/Dropdown';
import { Button } from '../common/Button';

interface FeedbackFormProps {
  categories: string[];
  onCancel: () => void;
  onSubmit: (category: string, feedback: string) => void;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  categories,
  onCancel,
  onSubmit
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = () => {
    onSubmit(selectedCategory, feedbackText);
    setFeedbackText("");
    setSelectedCategory("");
  };

  return (
    <Card padding="md">
      {/* Feedback Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl text-gray-900 font-normal mb-1 leading-[30px]">
            Send Feedback
          </h2>
          <p className="text-base text-gray-600 leading-6">
            Help us improve the platform with your suggestions
          </p>
        </div>
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      {/* Feedback Form */}
      <div className="flex flex-col gap-6">
        <Dropdown
          label="Category"
          value={selectedCategory}
          onChange={setSelectedCategory}
          options={categories}
          placeholder="Select a Category"
        />

        {/* Feedback Text Area */}
        <div>
          <label className="block text-base text-gray-700 mb-2 leading-6">
            Your Feedback
          </label>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Share your thoughts, suggestions, or report issues..."
            className="w-full py-3 px-4 border border-gray-200 rounded-[14px] text-base text-gray-900 resize-none min-h-[169.6px] outline-none focus:border-orange-600"
          />
        </div>

        {/* Submit Button */}
        <Button variant="primary" onClick={handleSubmit} className="w-full">
          Submit Feedback
        </Button>
      </div>
    </Card>
  );
};