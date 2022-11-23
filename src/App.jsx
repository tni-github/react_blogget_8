import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './context/authContext';
import { CommentsContextProvider } from './context/commentsContext';
import { PostsContextProvider } from './context/postsContext';
import { TokenContextProvider } from './context/tokenContext';

function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostsContextProvider>
          <CommentsContextProvider>
            <Header />
            <Main />
          </CommentsContextProvider>
        </PostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
