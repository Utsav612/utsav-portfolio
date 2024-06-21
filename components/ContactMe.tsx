import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
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
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
        <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#68B2A0]/50 underline">Lets Talk!</span>
        </h4>

        <div className="space-y-1 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-3">
          <div className="flex items-center space-x-3 justify-center">
            <PhoneIcon className="text-[#68B2A0] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-lg lg:text-lg xl:text-lg">
              +1 (437)-974-0612
            </p>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <EnvelopeIcon className="text-[#68B2A0] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-lg lg:text-lg xl:text-lg">
              putsav612@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-[#68B2A0] h-6 w-6 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-lg lg:text-lg xl:text-lg">
              Cambridge, Ontario
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4 w-full max-w-sm mx-auto"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="contactInput w-full px-4 py-3 rounded-md border-gray-300"
            type="text"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="contactInput w-full px-4 py-3 rounded-md border-gray-300"
            type="email"
          />
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput w-full px-4 py-3 rounded-md border-gray-300"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput w-full px-4 py-3 rounded-md border-gray-300"
            rows={4}
          />
          <button className="bg-[#68B2A0] py-3 md:py-4 px-6 md:px-8 rounded-lg text-white font-bold text-base md:text-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
