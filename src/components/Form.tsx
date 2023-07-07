import { type PropsType } from "@/lib/types";
import { cn } from "@/lib/utils";

import { IconStar } from "./Icons";

export default function Form(props: PropsType) {
  const { vote, setVote, handleSubmit } = props;

  return (
    <>
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full bg-neutral-dark-blue",
          "sm:h-12 sm:w-12"
        )}
      >
        <span className="h-3.5 w-3.5 sm:h-4 sm:w-4">
          <IconStar />
        </span>
      </div>
      <h1
        className={cn(
          "pb-3 pt-4 text-2xl leading-normal",
          "sm:pb-2 sm:pt-7 sm:text-[1.75rem]"
        )}
      >
        How did we do?
      </h1>
      <p
        className={cn(
          "text-[14px] font-light leading-relaxed text-neutral-light-grey",
          "sm:pr-10 sm:leading-6"
        )}
      >
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul
        className={cn(
          "flex items-center justify-between py-6",
          "sm:pb-8 sm:pt-7"
        )}
      >
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <li key={value}>
              <button
                type="button"
                className={cn(
                  "flex h-10 w-10 content-center items-center justify-center rounded-full bg-neutral-dark-blue pt-1 text-sm text-neutral-light-grey",
                  "sm:h-12 sm:w-12 sm:text-base",
                  "hover:bg-primary-orange hover:text-neutral-white active:bg-neutral-light-grey",
                  {
                    "bg-neutral-light-grey text-neutral-white hover:bg-neutral-medium-grey":
                      value == vote,
                  }
                )}
                onClick={() => setVote(value)}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="submit"
        className="rounded-full bg-primary-orange pb-3 pt-4 text-sm font-medium leading-none tracking-widest hover:bg-neutral-white hover:text-primary-orange"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </>
  );
}
