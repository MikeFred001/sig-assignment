import Typography from "./common/Typography";
import PharmacyDetailsList from "./PharmacyDetailsList";
import PharmacyDetailsListMobile from "./PharmacyDetailsListMobile";

export default function UtahCannabisPharmacies() {
  return (
    <section>
      <Typography className="text-[2rem] text-center md:text-start md:text-[3rem] my-4">
        Utah Medical Cannabis Pharmacies
      </Typography>
      <PharmacyDetailsList className="hidden lg:flex" />
      <PharmacyDetailsListMobile className="lg:hidden" />
    </section>
  );
}
