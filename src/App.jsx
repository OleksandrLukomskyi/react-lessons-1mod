import PaintingList from 'components/PaintingList.jsx';
import Section from 'components/Section';
// import Painting from './components/Painting.jsx'
import paintings from './paintings.json'
export default function App() {
   return (
     <div>
      {/* {paintings.map(painting => <Painting
     key={painting.id}
     imageUrl={painting.url}
     title={painting.title}
     authorName={painting.author.tag}
     profileUrl={painting.author.url}
     price={painting.price}
     quantity={painting.quantity}
   />)} */}
       

<Section title="Топ Недели"><PaintingList items={paintings}/></Section>
<Section />
     </div>
   );
 };