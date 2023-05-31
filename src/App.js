import logo from './logo.svg';
import './App.css';

function App() {

  // const { MongoClient } = require('mongodb');

  // async function connectToMongoDB() {
  //   try {
  //     const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority';
  //     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  //     await client.connect();
  //     console.log('Connected to MongoDB Atlas');

  //     const db = client.db('<database-name>');
  //     // Perform operations on the database

  //     // Example: Insert a document
  //     const collection = db.collection('<collection-name>');
  //     await collection.insertOne({ name: 'John Doe', age: 30 });
  //     console.log('Document inserted successfully');

  //     // Example: Query documents
  //     const query = { age: { $gt: 25 } };
  //     const result = await collection.find(query).toArray();
  //     console.log('Query results:', result);

  //     // Close the connection
  //     await client.close();
  //     console.log('Disconnected from MongoDB Atlas');
  //   } catch (error) {
  //     console.error('Error connecting to MongoDB Atlas:', error);
  //   }
  // }

  // // Call the function to establish the connection
  // connectToMongoDB();

  // useEffect(() => {
  //   connectToMongoDB()
  // }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello World!
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>Ali Zia Khan</li>
            <li>Asad</li>
            <li>Nayyar</li>
            <li>Anas</li>
          </ul>
        </h2>
      </header>
    </div>
  );
}

export default App;
