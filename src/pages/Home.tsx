import { ChangeEvent, useState } from "react";
import Button from "~/components/Button";
import TextField from "~/components/TextField";
import Header from "~/layouts/header";

function HomePage() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <main className="h-screen w-screen">
      <Header />
      <div className="m-auto flex h-[80%] w-[70%]  items-center justify-center space-x-2 ">
        <TextField
          value={search}
          handleChange={handleSearchChange}
          label="Search"
        />
        <Button label="Search" handleClick={() => alert(search)} />
      </div>
    </main>
  );
}

export default HomePage;
