"use client";
import { AtSign, MailCheck } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Alert } from "./ui/Alert";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const EmailListForm = () => {
  const [alert, setAlert] = useState(false);
  const [formData, setFormData] = useState({ email: "" });

  // post data
  const postFormData = async (endPoint = ``, data = {}) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${endPoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  };
  //Fake submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await postFormData("mailing-list", formData);
    if (response.status === "error") {
      toast.error("Please provide a valid email address");
      return;
    }
    response.id && setAlert(true);
  };
  if (!alert) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <form className="flex items-center flex-wrap xs:flex-nowrap justify-center gap-3 w-full group">
          <Input
            type="email"
            required
            placeholder="Enter your email"
            className="sm:min-w-[24rem] md:min-w-[448px] w-full sm:w-auto"
            id="email"
            setData={setFormData}
          >
            <AtSign className="size-5 stroke-primary transition-colors" />
          </Input>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full xs:w-auto group-has-[input:invalid]:pointer-events-none"
          >
            Find out first
          </Button>
        </form>
        <div className="text-white text-lg text-center">
          By submitting you agree to signup to our mailing list.
        </div>
      </div>
    );
  } else {
    return (
      <Alert className="lg:min-w-[728px]">
        <MailCheck className="size-8" />
        <p>
          <strong className="mr-3">Success!</strong>
          Thank you for joining our mailing list.
        </p>
      </Alert>
    );
  }
};

export default EmailListForm;
