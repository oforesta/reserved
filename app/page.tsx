import BannerImage from "@/components/shared/banners/BannerImage";
import ProductCardPannel from "@/components/shared/card/ProductCardPannel";
import NewCollectionPanel from "@/components/shared/NewCollectionPanel";

export default function Home() {
  return (
    <div className="flex-grow min-h-screen py-4">
      <BannerImage />
      <NewCollectionPanel />
      <div className="py-20"></div>
      <ProductCardPannel />
    </div>
  );
}
