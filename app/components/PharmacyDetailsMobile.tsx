import Typography from "./common/Typography";
import Button from "./common/Button";

interface Pharmacy {
  name: string;
  website: string;
  promotion: string | null;
  locations: {
    address: string;
    phone: string;
  }[];
}
interface PharmacyDetailsProps {
  data: Pharmacy;
}

export default function PharmacyDetailsMobile({ data }: PharmacyDetailsProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-4">
      <Typography className="text-[1.5rem] text-green2">{data.name}</Typography>
      <div className="flex flex-col items-center gap-3">
        {data.locations.map(
          (location: { address: string; phone: string }, index: number) => (
            <div key={index}>
              <Typography className="text-grey2 leading-none">
                {location.address}
              </Typography>
              <Typography className="text-grey2">{location.phone}</Typography>
            </div>
          )
        )}
        <Typography className="text-grey2">{data.website}</Typography>
      </div>
      {data.promotion && (
        <Button className="!rounded-xl mt-4">{data.promotion}</Button>
      )}
    </div>
  );
}
