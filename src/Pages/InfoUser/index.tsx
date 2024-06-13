import { useNavigate } from "react-router-dom";
import Button from "@Components/Button";
import Card from "@Components/Cards";

const InfoUser = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative px-10">
      <div className="w-full cursor-pointer" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left text-4xl"></i>
      </div>
      <div className="flex flex-col items-start w-full md:flex-row">
        <div className="w-full flex justify-center items-center md:w-3/12 mt-10">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            className="w-60 h-60 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-4xl font-bold">Nguyễn Văn A</h1>
            <p className="text-xl">Admin</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center md:w-9/12 p-4">
          <h2 className="text-4xl font-bold mt-4 text-start w-full">Posts</h2>

          <div className="flex flex-col justify-center items-center gap-4 w-full mt-10">
            <Card
              title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
              description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
              className="bg-white w-full"
              fatherSize={false}
              type="simple"
              buttonChildren={
                <div className="w-full flex justify-start items-center mt-4">
                  <Button
                    text="Button"
                    color="text-primary border-primary hover:bg-primary hover:text-white rounded-full"
                    ghostButton
                  />
                </div>
              }
            />

            <Card
              title="Lorem ipsum dolor sit amet consectetur. Et donec ult."
              description="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. "
              className="bg-white w-full"
              fatherSize={false}
              type="simple"
              buttonChildren={
                <div className="w-full flex justify-start items-center mt-4">
                  <Button
                    text="Button"
                    color="text-primary border-primary hover:bg-primary hover:text-white rounded-full"
                    ghostButton
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
