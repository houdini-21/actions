import { useState } from "react";
import Button from "@Components/Button";
import Input from "@Components/Input";
import Card from "@Components/Cards";
import Cover from "@Components/Cover";

function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold text-center">Components</h1>

      <div className="flex flex-col mt-8">
        <h2 className="text-2xl font-bold mt-4">Button {count}</h2>
        <div className="flex flex-row justify-center items-center space-x-4">
          <Button text="Button" onClick={() => setCount(count + 1)} />
          <Button
            text="Button"
            onClick={() => setCount(count + 1)}
            color="bg-blue-500 text-white"
            isLoader
          />
          <Button
            text="Button"
            onClick={() => setCount(count + 1)}
            color="bg-blue-500 text-white"
            icon="fa-duotone fa-home-lg-alt"
          />
          <Button
            text="Button"
            onClick={() => setCount(count + 1)}
            color="bg-blue-500 text-white"
            icon="fa-duotone fa-home-lg-alt"
            iconPosition="right"
          />
          <Button
            text="Button"
            onClick={() => setCount(count + 1)}
            color="bg-red-500 text-white"
            icon="fa-duotone fa-home-lg-alt"
            disabled
          />
          <Button
            text="Button"
            onClick={() => setCount(count + 1)}
            color="text-primary border-primary hover:bg-primary hover:text-white"
            icon="fa-duotone fa-home-lg-alt"
            ghostButton
          />
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-2xl font-bold mt-4">Input</h2>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="w-1/3">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-1/3">
            <Input
              type="text"
              disabled
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-1/3">
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              error="This field is required"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-2xl font-bold mt-4">Card</h2>
        <div className="flex flex-row justify-center items-center space-x-4">
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
            description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
            type="withImageAndDescription"
            image="https://source.unsplash.com/random"
            fatherSize={false}
            buttonChildren={
              <div className="w-full flex justify-center items-center mt-4">
                <Button
                  text="Button"
                  onClick={() => setCount(count + 1)}
                  color="text-primary border-primary hover:bg-primary hover:text-white rounded-full"
                  ghostButton
                />
              </div>
            }
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
            description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
            type="withImageAndDescription"
            image="https://source.unsplash.com/random"
            imagePosition="left"
            fatherSize
            className="w-3/12"
            buttonChildren={
              <div className="w-full flex justify-center items-center mt-4">
                <Button
                  text="Button"
                  onClick={() => setCount(count + 1)}
                  color="text-primary border-primary hover:bg-primary hover:text-white rounded-full w-full"
                  ghostButton
                />
              </div>
            }
          />
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
            description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
            type="withImageAndDescription"
            image="https://source.unsplash.com/random"
            imagePosition="right"
            fatherSize
            className="w-3/12"
            buttonChildren={
              <div className="w-full flex justify-center items-center mt-4">
                <Button
                  text="Button"
                  onClick={() => setCount(count + 1)}
                  color="text-primary border-primary hover:bg-primary hover:text-white rounded-full w-full"
                  ghostButton
                />
              </div>
            }
          />
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <Card
            title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
            description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
            fatherSize={false}
            type="simple"
            buttonChildren={
              <div className="w-full flex justify-center items-center mt-4">
                <Button
                  text="Button"
                  onClick={() => setCount(count + 1)}
                  color="text-primary border-primary hover:bg-primary hover:text-white rounded-full w-full"
                  ghostButton
                />
              </div>
            }
          />
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h2 className="text-2xl font-bold mt-4">Cover</h2>
        <Cover
          title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
          description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
          image="https://source.unsplash.com/random"
          buttonChildren={
            <Button
              text="Button"
              onClick={() => setCount(count + 1)}
              color="bg-blue-500 w-96 mt-4"
            />
          }
        />
      </div>
    </div>
  );
}

export default App;
