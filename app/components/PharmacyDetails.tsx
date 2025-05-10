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

export default function PharmacyDetails({ data }: PharmacyDetailsProps) {
  return (
    <div>
      <div>
        <Typography className="text-[1.5rem] text-green2">
          {data.name}
        </Typography>
        <div className="grid grid-cols-[55%_1fr_1fr]">
          <div>
            {data.locations.map(
              (location: { address: string; phone: string }, index: number) => (
                <Typography key={index} className="text-grey2">
                  {location.address}
                </Typography>
              )
            )}
          </div>
          <div>
            {data.locations.map(
              (location: { address: string; phone: string }, index: number) => (
                <Typography key={index} className="text-grey2">
                  {location.phone}
                </Typography>
              )
            )}
          </div>
          <Typography className="text-grey2">{data.website}</Typography>
        </div>
      </div>
      {data.promotion && (
        <Button className="!rounded-xl mt-4">{data.promotion}</Button>
      )}
    </div>
  );
}
