import Image from "next/image";
import Typography from "./common/Typography";

export default function BannerAd() {
  return (
    <div className="flex flex-col items-end py-10">
      <Image
        src="/assets/MockBannerAd@2x.png"
        alt="Banner Ad for Leaf Nation. Green background accompanied by an old-style cartoon that has a variety of mushrooms."
        width={1200}
        height={300}
        className="w-full h-auto"
      />
      <Typography className="text-grey2">Ad</Typography>
    </div>
  );
}
