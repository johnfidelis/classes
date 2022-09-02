import CreateProps from './CreateProps';
import Image1 from './images/johnfidelis.jpg';
import Image2 from './images/reactImg.jpeg';
import Image3 from './images/contact.jpg';

function App() {

  const items = [
    {image:Image1, heading: 'Basic Data', text: `Name: John Fidelis. Country: Nigeria. Profession: Web Developer/Mentor`, },
    {image:Image2, heading: 'Tech Stack', text: `JavaScript, React.js, Next.js, MaterialUI, HTML, CSS and Bootstrap5 `,  },
    {image:Image3, heading: 'Contacts', text: `LinkedIn: fidelisjohn, Twitter: heisfidelisjohn and Gmail: fidelisjohn836@gmail.com` },

  ]


  return(
<>
<CreateProps items={items}/>

</>
  );
}

export default App;


