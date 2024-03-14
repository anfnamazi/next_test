import { FunctionComponent } from "react";

interface SingleProps {
  params: { id: string };
}

const Single: FunctionComponent<SingleProps> = ({ params }) => {
  return <div>My Post: {params.id}</div>;
};

export default Single;
