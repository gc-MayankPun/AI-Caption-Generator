import { memo } from "react";

const Logo = memo(() => {
  return (
    <div className="h-fit flex items-center justify-center">
      <img src="/logo.webp" alt="logo image" className="h-[4rem]" />
      <h1 className="text-3xl">SnapScribe</h1>
    </div>
  );
});

export default Logo;
