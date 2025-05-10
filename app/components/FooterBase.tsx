import Typography from "./common/Typography";

export default function FooterBase() {
  return (
    <div className="h-[7.5rem] bg-green1 text-grey3">
      <div className="mx-[15rem]">
        <div className="flex gap-10 justify-end p-3">
          <Typography className="text-grey3">
            Ⓒ2023 All Rights Reserved.
          </Typography>
          <Typography className="text-grey3">Terms and Conditions</Typography>
          <Typography className="text-grey3">Privacy Policy</Typography>
        </div>
      </div>
    </div>
  );
}
