import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <div className="w-full">
        <form
          className="mx-auto w-fit flex flex-col gap-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <p className="text-3xl text-white">{t("Name")}:</p>
            <div className="flex gap-2 flex-col md:flex-row">
              <div className="flex flex-col">
                <input
                  className="border-2 border-orange-400 bg-transparent text-2xl text-white focus:border-orange-500 focus:outline-none focus:ring-0"
                  type="text"
                  {...register("firstName", { required: true })}
                />
                <p className="text-xl text-white opacity-70">
                  {t("First_Name")}:
                </p>
              </div>
              <div className="flex flex-col">
                <input
                  className="border-2 border-orange-400 bg-transparent text-2xl text-white focus:border-orange-500 focus:outline-none focus:ring-0"
                  type="text"
                  {...register("lastName")}
                />
                <p className="text-xl text-white opacity-70">
                  {t("Last_Name")}:
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl text-white">E-Mail:</p>
            <input
              className="w-full border-2 border-orange-400 bg-transparent text-2xl text-white focus:border-orange-500 focus:outline-none focus:ring-0"
              type="text"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl text-white">{t("Message")}:</p>
            <textarea
              className="w-full h-52 border-2 border-orange-400 bg-transparent text-2xl text-white focus:border-orange-500 focus:outline-none focus:ring-0"
              {...register("message")}
            />

            <button
              className="h-fit w-fit border-2 border-orange-400 p-5 text-center text-xl md:text-3xl text-white duration-100 ease-in hover:bg-orange-400 mt-2"
              type="submit"
            >
              {t("Submit")}
            </button>
          </div>
          {/*           <input type="email" name="" id="" />
          <input type="tel" name="" id="" /> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
