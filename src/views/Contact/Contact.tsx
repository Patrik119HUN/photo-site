import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


function Contact() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => sendEmail();

  const form = useRef();
  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="w-full">
        <form
          ref={form}
          className="mx-auto w-fit flex flex-col gap-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <p className="text-3xl">{t("Name")}:</p>
            <div className="flex gap-2 flex-col md:flex-row">
              <div className="flex flex-col">
                <input
                  className="inputBar"
                  type="text"
                  {...register("firstName", { required: true, maxLength: 80 })}
                />
                {errors.firstName && (
                  <p className="text-red-600 font-bold italic">
                    This field is required
                  </p>
                )}
                <p className="opacity-70">{t("First_Name")}:</p>
              </div>
              <div className="flex flex-col">
                <input
                  className="inputBar"
                  type="text"
                  {...register("lastName", { required: true, maxLength: 100 })}
                />
                {errors.lastName && (
                  <p className="text-red-600 font-bold italic">
                    This field is required
                  </p>
                )}
                <p className="opacity-70">{t("Last_Name")}:</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl text-white">E-Mail:</p>
            <input
              className="w-full inputBar"
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <p className="text-red-600 font-bold italic">
                This field is required
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl text-white">{t("Message")}:</p>
            <textarea
              className="w-full h-52 inputBar"
              {...register("message", { required: true, maxLength: 300 })}
            />
            {errors.message && (
              <p className="text-red-600 font-bold italic">
                This field is required
              </p>
            )}
            <button
              className="h-fit w-fit p-5 text-center text-xl md:text-3xl mt-2"
              type="submit"
            >
              {t("Submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
