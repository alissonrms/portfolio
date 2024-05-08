import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xaygekro");

  return (
    <SectionWrapper
      id="contato"
      className="mb-16 mx-4 lg:mx-0 min-h-[calc(100dvh-240px)] md:min-h-[calc(100dvh-200px)] pt-12"
    >
      <h2 className="text-center text-4xl">Contate-me</h2>
      <ToastContainer />

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
        {/* blurDataURL="https://i.imgur.com/owZdhjA.png" */}
        <Image
          unoptimized={true}
          quality={100}
          alt="contact"
          src="/contact.png"
          className="hidden md:block w-1/2 h-full object-cover"
          width={1000}
          height={1000}
        />
        {state.succeeded ? (
          <div className="flex-1 flex items-center justify-center flex-col">
            <span className="block font-semibold mb-2">✋ Muito obrigado pela mensagem!!</span>
            <span className="text-sm">Irei responder o mais rápido possível</span>
          </div>
        ) : (
          <div className="flex-1">
            <h3 className="text-2xl">Mande-me uma mensagem</h3>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Meu inbox está sempre aberto. Quando tiver uma pergunta ou só
              quiser dar um alô, eu vou fazer o possível para responder!
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-xl"
            >
              <input
                required
                name="email"
                type="email"
                placeholder="Email *"
                className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Mensagem *"
                className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                disabled={state.submitting}
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end"
              >
                {state.submitting ? (
                  <span className="flex items-center gap-2">
                    Diga Olá <BiLoaderAlt className="animate-spin" />
                  </span>
                ) : (
                  "Diga Olá 👋"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
