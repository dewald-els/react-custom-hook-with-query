import { Guitar } from "../models/guitar.model";
import GuitarListItem from "./guitar-list-item";

type GuitarListProps = {
  guitars: Guitar[];
};

const GuitarList = (props: GuitarListProps) => {
  const { guitars } = props;
  return (
    <ul>
      {guitars.map((guitar) => (
        <GuitarListItem key={guitar.id} guitar={guitar} />
      ))}
    </ul>
  );
};

export default GuitarList;
