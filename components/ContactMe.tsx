import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid"; // Decreased icon size
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mitch.putsav612@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}(${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center">
      {" "}
      {/* Decreased padding */}
      <h3 className="absolute top-28 md:top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        {" "}
        {/* Decreased font size */}
        Contact
      </h3>
      <div className="flex flex-col space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-4 2xl:space-y-8">
        <h4 className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-center">
          {" "}
          {/* Decreased font size */}I have got what you need.{" "}
          <span className="decoration-[#68B2A0]/50 underline">Lets Talk!</span>
        </h4>

        <div className="space-y-1 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-3">
          <div className="flex items-center space-x-2 justify-center">
            {" "}
            {/* Centered icons */}
            <PhoneIcon className="text-[#68B2A0] h-5 w-5 md:h-6 md:w-6 animate-pulse" />{" "}
            {/* Increased icon size */}
            <p className="text-sm md:text-md lg:text-lg xl:text-lg">
              {" "}
              {/* Decreased font size */}
              +1 (437)-974-0612
            </p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            {" "}
            {/* Centered icons */}
            <EnvelopeIcon className="text-[#68B2A0] h-5 w-5 md:h-6 md:w-6 animate-pulse" />{" "}
            {/* Increased icon size */}
            <p className="text-sm md:text-md lg:text-lg xl:text-lg">
              {" "}
              {/* Decreased font size */}
              putsav612@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            {" "}
            {/* Centered icons */}
            <MapPinIcon className="text-[#68B2A0] h-5 w-5 md:h-6 md:w-6 animate-pulse" />{" "}
            {/* Increased icon size */}
            <p className="text-sm md:text-md lg:text-lg xl:text-lg">
              {" "}
              {/* Decreased font size */}
              Cambridge, Ontario
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-3 w-full max-w-sm mx-auto"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="contactInput w-full px-3 py-2 rounded-md border-gray-300"
            type="text"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="contactInput w-full px-3 py-2 rounded-md border-gray-300"
            type="email"
          />
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput w-full px-3 py-2 rounded-md border-gray-300"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput w-full px-3 py-2 rounded-md border-gray-300"
            rows={3}
          />
          <button className="bg-[#68B2A0] py-2 md:py-3 px-4 md:px-6 rounded-lg text-white font-bold text-sm md:text-base w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
