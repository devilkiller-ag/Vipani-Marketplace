import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboard("a72a88a8-9b51-43ae-82b0-6d6515fae568");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>

    </Container>
  )
}

export default HomePage