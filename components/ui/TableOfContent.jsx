import Link from "next/link";

const TableOfContent = ({ list }) => {
  return (
    <aside className="sticky top-6 bg-primary/10 py-6 px-3 rounded-xl flex flex-col gap-y-2.5 lg:gap-y-3 min-w-full xs:min-w-80 lg:min-w-96">
      <h2 className="text-black font-bold lg:text-lg">Table of Contents</h2>
      <ol className="lg:text-lg flex flex-col gap-y-2.5 lg:gap-y-3 list-decimal list-inside">
        {list.map(({ title }, i) => {
          return (
            <li key={i} className="marker:text-primary hover:marker:text-black">
              <Link
                href={`#${title.replaceAll(" ", "-")}`}
                scroll
                className="text-primary hover:text-black transition-all outline-none focus:text-black"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default TableOfContent;
