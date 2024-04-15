export default function TimelineCard({ tweet }) {
  return (
    <div>
      <div
        className={`flex flex-row items-center gap-4 ${
          tweet.divider && "w-[420px]"
        }`}
      >
        <a
          className="flex min-h-44 min-w-[313px] left-0 aspect-video rounded-xl overflow-hidden border-2 border-white"
          href={tweet.link}
        >
          <img
            className="justify-center items-center self-center flex"
            src={tweet.thumb}
            alt={"tweet"}
          />
        </a>
        {tweet.divider && (
          <img className="mr-4" src="/divider.svg" alt="divider" width={100} />
        )}
      </div>
    </div>
  );
}
