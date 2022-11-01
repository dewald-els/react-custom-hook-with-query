export interface Guitar {
  id: string;
  model: string;
  manufacturer: string;
  bodyType: string;
  materials: {
    neck: string;
    fretboard: string;
    body: string;
  };
  strings: number;
  image: string;
}
