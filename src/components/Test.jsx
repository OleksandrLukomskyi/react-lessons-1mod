import Painting from '../components/Painting';
import painting from '../paintings.json';

export default function App() {
  return (
    <div
      
    >
      <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUrl={painting.author.url}
    price={painting.price}
  />
    </div>
  );
};
