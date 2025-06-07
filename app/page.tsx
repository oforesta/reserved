import BannerImage from "@/components/shared/banners/BannerImage";
import NewCollectionPanel from "@/components/shared/NewCollectionPanel";

export default function Home() {
  return (
    <div className="flex-grow min-h-screen py-4">
      <BannerImage />
      <NewCollectionPanel />
    </div>
  );
}
