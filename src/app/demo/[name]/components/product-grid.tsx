import ProductGrid from "@/components/product-grid";
import { getCategories, getProducts } from "@/lib/products";

const products = await getProducts();
const categories = await getCategories();

export const productGrid = {
  name: "product-grid",
  components: {
    Demo: (
      <div className="h-full w-full overflow-auto p-4">
        <ProductGrid products={products} categories={categories} />
      </div>
    ),
    Default: <ProductGrid products={products} categories={categories} />,
  },
};
