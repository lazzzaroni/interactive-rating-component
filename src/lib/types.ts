export type PropsType = {
  vote: number;
  setVote: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: () => void;
};
