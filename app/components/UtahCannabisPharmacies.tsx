import Typography from "./common/Typography";
import PharmacyDetailsList from "./PharmacyDetailsList";

export default function UtahPharmacyList() {
  return (
    <section>
      <Typography className="text-[3rem] my-4">
        Utah Medical Cannabis Pharmacies
      </Typography>
      <PharmacyDetailsList />
    </section>
  );
}
