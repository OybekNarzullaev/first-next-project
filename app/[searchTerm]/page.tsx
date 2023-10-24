import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

const page = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results = data?.query?.pages;
  const content = (
    <main className="bg-slate-600 w-96 mx-auto">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
};

export default page;
