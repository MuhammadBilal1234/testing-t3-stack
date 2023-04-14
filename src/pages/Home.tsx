import { ChangeEvent, useState, KeyboardEvent } from "react";
import Button from "~/components/Button";
import TextField from "~/components/TextField";
import Header from "~/layouts/header";

function HomePage() {
  const [search, setSearch] = useState("");
  const [moveSearchBartoTop, setMoveSearchBartoTop] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  function moveSearchPosition(position: boolean) {
    setMoveSearchBartoTop(position);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      moveSearchPosition(true);
    }
  }

  return (
    <main className="h-screen w-screen">
      <Header />
      <div
        className={`m-auto flex ${
          !moveSearchBartoTop ? "h-[80%]" : "h-[10%]"
        } w-[80%] flex-col items-center justify-center  space-x-2 space-y-3 transition-[height] duration-500 ease-in-out sm:flex-row sm:space-y-0 md:max-w-[550px]`}
      >
        <TextField
          value={search}
          handleChange={handleSearchChange}
          label="Search"
          handleKeyDown={handleKeyDown}
        />
        <Button label="Search" handleClick={() => moveSearchPosition(true)} />
      </div>
    </main>
  );
}

export default HomePage;
