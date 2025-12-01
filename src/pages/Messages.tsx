import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { MessageList } from '../components/messages/MessageList';
import { MessageThread } from '../components/messages/MessageThread';
import { FeedbackForm } from '../components/messages/FeedbackForm';
import { messages, feedbackCategories } from '../data/messagesData';

const MessagesAndFeedback = () => {
  const [mode, setMode] = useState<'messages' | 'feedback'>("messages");
  const [activeMessage, setActiveMessage] = useState(0);

  const handleFeedbackSubmit = (category: string, feedback: string) => {
    alert("Feedback submitted!");
    setMode("messages");
  };

  return (
    <div className="max-w-[960px] mx-auto p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-normal text-gray-900 mb-2 leading-9">
            Messages & Feedback
          </h1>
          <p className="text-base text-gray-600 leading-6">
            Communicate with schools and admin, or send feedback.
          </p>
        </div>
        <Button
          variant="primary"
          icon={Mail}
          iconPosition="left"
          onClick={() => setMode("feedback")}
        >
          Send Feedback
        </Button>
      </div>

      {mode === "messages" ? (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex h-[700px]">
          <MessageList
            messages={messages}
            activeMessage={activeMessage}
            onSelectMessage={setActiveMessage}
          />
          <MessageThread message={messages[activeMessage]} />
        </div>
      ) : (
        <FeedbackForm
          categories={feedbackCategories}
          onCancel={() => setMode("messages")}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default MessagesAndFeedback;