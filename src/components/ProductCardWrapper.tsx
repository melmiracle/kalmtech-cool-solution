"use client";

import { useState } from "react";
import ProductCategoryModal from "./ProductCategoryModal";
import type { ProductCategory } from "@/types/product";

export default function ProductCardWrapper({
  category,
  children,
}: {
  category: ProductCategory;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>
      {open && <ProductCategoryModal category={category} onClose={() => setOpen(false)} />}
    </>
  );
}
