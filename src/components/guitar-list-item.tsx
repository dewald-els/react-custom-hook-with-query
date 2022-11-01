import { Guitar } from "../models/guitar.model";
import styles from "./guitar.module.css";

type GuitarListItemProps = {
  guitar: Guitar;
};

const GuitarListItem = (props: GuitarListItemProps) => {
  const { guitar } = props;
  
  return (
    <li className={styles.GuitarListItem}>
      <header>
        <img src={guitar.image} width="250" />
      </header>
      <span>{guitar.model}</span>
      <span>by {guitar.manufacturer}</span>
      <ul>
        <li>Neck: {guitar.materials.neck}</li>
        <li>Fretboard: {guitar.materials.fretboard}</li>
        <li>Body: {guitar.materials.body}</li>
      </ul>
    </li>
  );
};

export default GuitarListItem;