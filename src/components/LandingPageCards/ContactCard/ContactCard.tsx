import { yupResolver } from "@hookform/resolvers/yup";
import { Inter } from "next/font/google";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import Footer from "../Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

interface ContactCardProps {
  languages: {
    page: {
      default: {
        contact: {
          topText: string;
          title: string;
          subtitle: string;
          completeName: string;
          email: string;
          phone: string;
          send: string;
          formSuccess: string;
        };
      };
    };
  };
}

export default function ContactCard({ languages }: ContactCardProps) {
  const contact = languages.page.default.contact;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [IsFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmitHandler: SubmitHandler<FormValues> = async (data) => {
    const bodyRequest = {
      name: data.name,
      email: data.email,
      listId: "66743e5fd0dea16e07b0d532",
    };

    try {
      await fetch("https://backend.mailfy.com/v1/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "xrad6nZP+k4TclxOlRwsNFz+Dbg=",
        },
        body: JSON.stringify(bodyRequest),
      });

      /* alert("Form submitted! Check the console for details."); */
      setIsFormSubmitted(true);
      reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full 2xl:mt-[180px] 2xl:h-[calc(100vh-165px)] justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full mb-14">
        <p className="text-[#C89305] font-bold text-[14px] mt-4">
          {contact.topText}
        </p>
        <p className="text-[30px] md:text-[40px] mb-[20px]">{contact.title}</p>

        <p
          className={`max-w-[510px] text-[16px] mb-[64px] text-center ${inter.className}`}
        >
          {contact.subtitle}
        </p>

        {IsFormSubmitted ? (
          <div>
            <p className="text-green-400-500">{contact.formSuccess}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col gap-4 max-w-[488px] w-full"
          >
            <input
              className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4"
              {...register("name")}
              placeholder={contact.completeName}
              type="text"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4"
              {...register("email")}
              placeholder={contact.email}
              type="text"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4"
              {...register("phone")}
              placeholder={contact.phone}
              type="text"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}

            <button
              type="submit"
              className="w-full h-[48px] bg-[#A06A08] font-bold hover:opacity-85"
            >
              {contact.send}
            </button>
          </form>
        )}
      </div>
      <Footer languages={languages} />
    </div>
  );
}
