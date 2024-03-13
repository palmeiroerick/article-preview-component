import Author from "@/components/Author";
import Drawers from "@/components/Drawers";
import Text from "@/components/Text";
import Title from "@/components/Title";
import ShareProvider from "@/context/ShareContext";

export default function Home() {
  return (
    <main className="w-80 rounded-xl bg-white shadow-xl lg:flex lg:h-64 lg:w-[680px]">
      <Drawers />
      <section className="flex flex-col gap-6 lg:gap-0 lg:justify-between">
        <div className="flex flex-col gap-4 p-8 pb-0">
          <Title>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </Title>
          <Text>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </Text>
        </div>
        <ShareProvider>
          <Author />
        </ShareProvider>
      </section>
    </main>
  );
}
