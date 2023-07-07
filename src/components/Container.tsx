import { useState } from "react";

import { type PropsType } from "@/lib/types";
import { cn } from "@/lib/utils";

import Form from "./Form";
import Submission from "./Submission";

export default function Container() {
  const [vote, setVote] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (vote != 0) {
      setIsSubmitted(!isSubmitted);
    }
  };

  const props: PropsType = { vote, setVote, handleSubmit };

  return (
    <section
      className={cn(
        "flex h-[360px] w-[327px] flex-col rounded-xl bg-gradient-to-t from-neutral-dark-blue/10 to-neutral-dark-blue/80 p-6",
        "sm:h-[412px] sm:w-[412px] sm:rounded-3xl sm:p-8"
      )}
    >
      {!isSubmitted ? <Form {...props} /> : <Submission vote={vote} />}
    </section>
  );
}
