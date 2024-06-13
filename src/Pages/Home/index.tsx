import { useEffect, useState } from "react";
import { HookHomeList } from "./hook";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import CardUsers from "@Components/CardsUsers";
import Button from "@Components/Button";
import Input from "@Components/Input";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

const options = [
  { value: "name", label: "Name" },
  { value: "gender", label: "Gender" },
  { value: "status", label: "Status" },
  { value: "email", label: "Email" },
];

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterBy, setFilterBy] = useState<string>("name");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const response = await HookHomeList(page, name, filterBy);
        setUsers([...users, ...response.data]);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, name, filterBy]);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-100">
      <h1 className="text-4xl text-center">Welcome to MySpaces</h1>
      <div className="w-full flex justify-center items-top mt-5 px-4 space-x-4">
        <Input
          type="text"
          placeholder="Enter your name"
          width="w-full sm:w-10/12"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setPage(1);
            setUsers([]);
          }}
        />
        <div className="w-full sm:w-1/12">
          <Select
            options={options}
            placeholder="Search by"
            isSearchable={false}
            value={options.find((option) => option.value === filterBy)}
            onChange={(e) => {
              setFilterBy(e?.value);
              setPage(1);
              setUsers([]);
            }}
          />
        </div>
      </div>
      <div className="w-full">
        {users ? (
          <InfiniteScroll
            className="w-full flex flex-row flex-wrap justify-center items-center gap-8 overflow-hidden px-4"
            style={{ overflow: "hidden !important" }}
            dataLength={users.length}
            next={() => setPage(page + 1)}
            hasMore={users.length !== 0}
            loader={
              <div className="w-full flex justify-center items-center">
                <i className="animate-spin fa-duotone fa-spinner-third text-[100px] text-primary"></i>
              </div>
            }
            endMessage={
              loading ? (
                <div className="w-full flex justify-center items-center">
                  <i className="animate-spin fa-duotone fa-spinner-third text-[100px] text-primary"></i>
                </div>
              ) : (
                <div className="w-full flex justify-center items-center">
                  <p className="text-xl text-gray-500">You have seen it all</p>
                </div>
              )
            }
          >
            {users.map((user) => (
              <CardUsers
                key={user.id}
                name={user.name}
                description={user.email}
                image={`https://avatar.iran.liara.run/public/${
                  user.gender === "female" ? "girl" : "boy"
                }?username=${user.name}`}
                status={user.status}
                gender={user.gender}
                width="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                buttonChildren={
                  <div className="w-full flex justify-center items-center mt-4">
                    <Button
                      text="Button"
                      path={`/posts-user/${user.id}`}
                      color="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white rounded-full w-full"
                      ghostButton
                    />
                  </div>
                }
              />
            ))}
          </InfiniteScroll>
        ) : (
          // not found
          <div className="w-full flex justify-center items-center">
            <p className="text-lg text-gray-500">Users not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
