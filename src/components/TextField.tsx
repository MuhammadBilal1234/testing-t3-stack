import { ChangeEvent, KeyboardEvent } from "react";

interface ITextField {
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function TextField({
  label,
  value,
  handleChange,
  handleKeyDown,
}: ITextField) {
  return (
    <div className="  w-full">
      {/* <label
        htmlFor="success"
        className="text-md mb-2 block text-center  font-medium "
      >
        {label}
      </label> */}
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown && handleKeyDown(e)}
        id="success"
        className="block w-full rounded-lg border p-2.5  text-sm outline-none "
        placeholder="Search Company"
      />
      {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
        <span className="font-medium">Well done!</span> Some success message.
      </p> */}
    </div>
  );
}
