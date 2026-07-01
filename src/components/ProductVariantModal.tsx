"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { ProductVariant, ProductCategory } from "@/types/product";

export default function ProductVariantModal({
  variant,
  category,
  onClose,
}: {
  variant: ProductVariant;
  category: ProductCategory;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isIndigo = category.category === "IT";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
            className="absolute top-4 right-4 z-10 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full h-56 sm:h-72 bg-gray-100">
          <Image
            src={variant.image}
            alt={variant.name}
            fill
            className="object-contain p-2"
            sizes="(max-width: 672px) 100vw, 672px"
          />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                isIndigo
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              {category.title}
            </span>
            <span className="bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
              {variant.availability}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {variant.price && (
            <span className="inline-block bg-teal-50 text-teal-700 text-sm font-bold px-3 py-1 rounded-full mb-3">
              {variant.price}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            {variant.name}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {variant.description}
          </p>

          {/* Specifications */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Specifications</h3>
            <div className="space-y-2">
              {variant.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between py-2 px-4 bg-gray-50 rounded-xl"
                >
                  <span className="text-sm font-medium text-gray-700">{spec.label}</span>
                  <span className="text-sm text-gray-600 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://m.me/kalmtechcoolsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md"
            >
              Inquire via Messenger
            </a>
            <button
              onClick={onClose}
              className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
