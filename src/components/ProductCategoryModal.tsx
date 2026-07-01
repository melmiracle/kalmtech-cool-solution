"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProductCategory, ProductVariant } from "@/types/product";
import ProductVariantModal from "./ProductVariantModal";

export default function ProductCategoryModal({
  category,
  onClose,
}: {
  category: ProductCategory;
  onClose: () => void;
}) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedVariant) {
          setSelectedVariant(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, selectedVariant]);

  const isIndigo = category.category === "IT";

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={() => {
          if (selectedVariant) {
            setSelectedVariant(null);
          } else {
            onClose();
          }
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in-up"
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

          {/* Header */}
          <div className="p-6 sm:p-8 pb-4">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
                isIndigo
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              {category.availability}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {category.title}
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">{category.description}</p>
          </div>

          {/* Product List */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {category.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setSelectedVariant(item)}
                  className={`group bg-white rounded-2xl p-4 shadow-sm border text-left transition-all hover:-translate-y-0.5 ${
                    isIndigo
                      ? "border-gray-100 hover:border-indigo-200 hover:shadow-md"
                      : "border-gray-100 hover:border-cyan-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 96px, 112px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      {item.price && (
                        <span className="inline-block mt-2 text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                          {item.price}
                        </span>
                      )}
                      <span className="inline-block mt-2 ml-2 text-xs font-semibold text-gray-500">
                        View Details →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedVariant && (
        <ProductVariantModal
          variant={selectedVariant}
          category={category}
          onClose={() => setSelectedVariant(null)}
        />
      )}
    </>
  );
}
