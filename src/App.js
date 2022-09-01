

export default function App() {

  let list = [
    { name: 'Uyai', id: "hdf", favouriteStack: 'React.js' },
    { name: 'Uyai', id: "href", favouriteStack: 'React.js' },
    { name: 'Gabriel', id: "iotr", favouriteStack: 'Vue.js' },
    { name: 'Gideon', id: "poas", favouriteStack: 'Next.js' },
    { name: 'Cyril', id: "xa", favouriteStack: 'Node.js' },
    { name: 'Jude', id: "ois", favouriteStack: 'Django' }
  ];

  return (
    <>
    <div>
      {list.map((listItem, index) => (
        <h1 key={listItem.id} >{`${listItem.name} loves writing ${listItem.favouriteStack}, has a key of ${listItem.id}`}</h1>
      )
      )};
        </div>
    </>
  );

};

