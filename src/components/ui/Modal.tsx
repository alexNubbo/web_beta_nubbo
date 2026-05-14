import React from 'react';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = ({ title, children, isOpen }) => {
  const { closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white px-8 py-6">
          <h2 className="text-3xl font-display font-bold text-gray-900">{title}</h2>
          <button
            onClick={closeModal}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-8 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
