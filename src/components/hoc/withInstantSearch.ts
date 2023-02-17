// 1. Creating the HOC
// import { ComponentType, FC } from "react";
// import { InstantSearch } from "react-instantsearch-hooks-web";
// import { SearchClient } from "algoliasearch/lite";

// type WithInstantSearch = (
//   WrappedComponent: ComponentType,
//   options: { searchClient: SearchClient; indexName: string },
// ) => FC<any>;

// export const withInstantSearch: WithInstantSearch = (
//   WrappedComponent: ComponentType,
//   { searchClient, indexName },
// ) => {
//   const ComponentWithInstantSearch = (props) => {
//     return (
//       <InstantSearch searchClient={searchClient} indexName={indexName}>
//         <WrappedComponent {...props} />
//       </InstantSearch>
//     );
//   };

//   return ComponentWithInstantSearch;
// };

//2. Pass the component to the HOC
// const Search: FC<TAlgoliaSearch> = ({ placeholder }) => {
//   const { query } = useSearchBox();

//   return (
//     <div className={styles["input-wrapper"]}>
//       <SearchBox
//         searchAsYouType
//         placeholder={placeholder?.placeholder}
//         autoFocus
//         classNames={{
//           root: styles["input-wrapper"],
//           input: styles["top-input"],
//           submitIcon: styles["algolia-icon"],
//           resetIcon: styles["algolia-icon"],
//           loadingIcon: styles["algolia-icon"],
//         }}
//         submitIconComponent={() => (
//           <div className={styles["icon-wrapper"]}>
//             <Icon icon="board" className={styles.icon} />
//           </div>
//         )}
//       />
//       {!!query && <Hits hitComponent={SearchResults} />}
//     </div>
//   );
// };

// export const AlgoliaSearch = withInstantSearch(Search, { searchClient, indexName: getFaqIndex() });

// 3. Component that displays the results
// export const SearchResults: FC<HitProps> = ({ hit }) => {
//   console.log(hit);
//   return (
//     <div className={styles.wrapper}>
//       <ul className={styles.dropdown}>
//         <li>
//           {/* TODO: link to /category/question */}
//           <Link to="" className={styles["dropdown-item"]}>
//             {hit.name}
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// .: Invoking the Higher order function
// <AlgoliaSearch placeholder={search} />,

// query FaqCategory {
//   faqCategory (query:{name:"FAQ Category - FAQ Category 4"}){
//     name
//     data{
//       title
//       slug
//       scope
//     }
//   }

//   faq{
//     name
//     data{
//       question
//       answer
//       category(query:{slug:"aq-category-4"}) {
//         title
//       }
//     }
//   }

//   faq(query:{data:{
//     faqCategory:{
//       slug:"faq-category-4"
//     }
//   }}) {
//     id
//   }
// }
