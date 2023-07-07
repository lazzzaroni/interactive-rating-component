import { cn } from "@/lib/utils";

import { Illustration } from "./Icons";

export default function Submission({ vote }: { vote: number }) {
  return (
    <>
      <div
        className={cn(
          "mx-auto mb-0.5 mt-2 h-24 w-36",
          "sm:mb-2 sm:h-28 sm:w-40 sm:pt-1"
        )}
      >
        <Illustration />
      </div>
      <div
        className={cn(
          "mx-auto my-6 rounded-full bg-neutral-dark-blue px-3 py-2"
        )}
      >
        <span
          className={cn(
            "block pt-1 text-sm font-light leading-3 text-primary-orange"
          )}
        >
          You selected {vote} out of 5
        </span>
      </div>
      <h1 className={cn("py-0.5 text-center text-2xl leading-snug", "sm:pt-3")}>
        Thank you!
      </h1>
      <p
        className={cn(
          "py-2 text-center text-[14px] font-light leading-relaxed text-neutral-light-grey",
          "sm:px-4 sm:leading-6"
        )}
      >
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
}
