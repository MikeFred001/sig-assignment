import PharmacyDetails from "./PharmacyDetails";

export default function PharmacyDetailsList() {
  return (
    <div className="flex flex-col gap-6">
      {pharmaciesData.map((pharmacyData, index) => (
        <PharmacyDetails key={index} data={pharmacyData} />
      ))}
    </div>
  );
}

const pharmaciesData = [
  {
    name: "Dragonfly Wellness",
    website: "www.dragonflywellness.com",
    promotion: "New Patient Specials",
    locations: [
      {
        address: "711 South State Street, Salt Lake City UT 84111",
        phone: "801-413-6945",
      },
      {
        address: "20 Main Street, Price UT 84501",
        phone: "435-216-3400",
      },
    ],
  },
  {
    name: "Bloc Pharmacy",
    website: "www.blocdispensary.com",
    promotion: null,
    locations: [
      {
        address: "10392 South Jordan Gateway South Jordan UT 84095",
        phone: "385-249-9400",
      },
      {
        address: "1624 S Convention Center Dr. St. George UT 84790",
        phone: "435-216-3400",
      },
    ],
  },
  {
    name: "Beehive Farmacy",
    website: "beehivefarmacy.com",
    promotion: null,
    locations: [
      {
        address: "1991 S 3600 W Salt Lake City UT 84004",
        phone: "385-212-0088",
      },
      {
        address: "870 W 1150 S Suite C Brigham City UT 84032",
        phone: "435-919-0966",
      },
    ],
  },
  {
    name: "Cannabist",
    website: "www.gocannabist.com",
    promotion: null,
    locations: [
      {
        address: "484 South 1750 West Springville UT 84663",
        phone: "385-327-0922",
      },
    ],
  },
  {
    name: "Curaleaf",
    website: "www.curaleaf.com",
    promotion: null,
    locations: [
      {
        address: "3633 N Thanksgiving Way, Lehi UT 84043",
        phone: "385-338-8010",
      },
      {
        address: "1351 Kearns Blvd Suite 110-B Park City UT 84060",
        phone: "435-252-1052",
      },
      {
        address: "222 N Draper Ln Provo UT 84601",
        phone: "801-872-7447",
      },
      {
        address: "757 S 1040 W Payson UT 84651",
        phone: "385-404-4422",
      },
    ],
  },
  {
    name: "Dragonfly Wellness",
    website: "www.dragonflywellness.com",
    promotion: null,
    locations: [
      {
        address: "711 South State Street, Salt Lake City UT 84111",
        phone: "801-413-6945",
      },
      {
        address: "20 Main Street, Price UT 84501",
        phone: "435-216-3400",
      },
    ],
  },
  {
    name: "The Flower Shop",
    website: "www.theflowershopusa.com",
    promotion: null,
    locations: [
      {
        address: "3775 S Wall Ave South Ogden UT 84405",
        phone: "385-289-1800(Ext 1)",
      },
      {
        address: "2150 N Main St. Suite 1 North Logan UT 84341",
        phone: "385-289-1800(Ext 2)",
      },
    ],
  },
  {
    name: "WholesomeCo",
    website: "www.wholesome.co",
    promotion: null,
    locations: [
      {
        address: "580 W 100 N Suite 1, West Bountiful UT 84010",
        phone: "801-695-4480",
      },
    ],
  },
  {
    name: "Zion Medicinal",
    website: "www.zionmed.co",
    promotion: null,
    locations: [
      {
        address: "301 S Main St. Cedar City UT 84720",
        phone: "435-244-4485",
      },
    ],
  },
];
