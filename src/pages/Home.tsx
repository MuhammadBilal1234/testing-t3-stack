import { ChangeEvent, useState } from "react";
import Button from "~/components/Button";
import TextField from "~/components/TextField";
import Header from "~/layouts/header";

function HomePage() {
  const [search, setSearch] = useState("");
  const [moveSearchBartoTop, setMoveSearchBartoTop] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="h-screen w-screen">
      <Header />
      <div
        className={`m-auto flex ${
          !moveSearchBartoTop ? "h-[80%]" : "h-[10%]"
        } w-[70%]  max-w-[550px] items-center justify-center space-x-2 transition-[height] duration-500 ease-in-out`}
      >
        <TextField
          value={search}
          handleChange={handleSearchChange}
          label="Search"
        />
        <Button
          label="Search"
          handleClick={() => setMoveSearchBartoTop(true)}
        />
      </div>
    </main>
  );
}

export default HomePage;
