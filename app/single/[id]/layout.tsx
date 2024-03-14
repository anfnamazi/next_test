import { Trends } from "@/app/components";
import { FunctionComponent } from "react";

interface SingleLayoutProps {
  readonly children: React.ReactNode;
}

const SingleLayout: FunctionComponent<SingleLayoutProps> = ({ children }) => {
  return (
    <main className="grid grid-flow-col gap-4 w-full">
      <main className="col-span-10">{children}</main>
      <section className="col-span-2">
        <Trends />
      </section>
    </main>
  );
};

export default SingleLayout;
