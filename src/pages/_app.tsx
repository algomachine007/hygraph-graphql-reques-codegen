import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import algoliasearch from "algoliasearch/lite";
import type { AppProps } from "next/app";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!,
  );

  return (
    <QueryClientProvider client={queryClient}>
      <InstantSearch
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
        searchClient={searchClient}
      >
        <SearchBox />
        <Hits />
      </InstantSearch>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
