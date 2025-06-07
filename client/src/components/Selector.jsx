import { memo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Selector = memo(({ handleToneChange }) => {
  return (
    <div className="w-full h-fit lg:h-[10rem] rounded-2xl">
      <p className="tone mb-1 text-xl text-[var(--secondary-text-color)]">
        Select Tone
      </p>
      <ToneSelector onSelect={handleToneChange} />
    </div>
  );
});

const ToneSelector = ({ onSelect }) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full bg-transparent text-[var(--primary-text-color)] border border-[var(--secondary-text-color)] rounded-md h-11 px-4 focus:outline-none focus:ring-2 focus:ring-violet-500">
        <SelectValue placeholder="Fun" />
      </SelectTrigger>

      <SelectContent className="bg-[var(--secondary-bg-color)] text-[var(--primary-text-color)] border border-[var(--secondary-text-color)] rounded-md shadow-lg">
        <SelectItem
          value="fun"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Fun
        </SelectItem>
        <SelectItem
          value="romantic"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Romantic
        </SelectItem>
        <SelectItem
          value="inspirational"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Inspirational
        </SelectItem>
        <SelectItem
          value="sassy"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Sassy
        </SelectItem>
        <SelectItem
          value="aesthetic"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Aesthetic
        </SelectItem>
        <SelectItem
          value="professional"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Professional
        </SelectItem>
        <SelectItem
          value="witty"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Witty
        </SelectItem>
        <SelectItem
          value="chill"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Chill
        </SelectItem>
        <SelectItem
          value="luxury"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Luxury
        </SelectItem>
        <SelectItem
          value="dark humor"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Dark Humor
        </SelectItem>
        <SelectItem
          value="nostalgic"
          className="hover:bg-[var(--hover-bg)] px-4 py-2 cursor-pointer"
        >
          Nostalgic
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Selector;
