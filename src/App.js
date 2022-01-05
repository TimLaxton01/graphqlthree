import MovieList from "./components/MovieList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Watch List</h1>
        <MovieList />
      </div>
    </ApolloProvider>
  );
}

export default App;
