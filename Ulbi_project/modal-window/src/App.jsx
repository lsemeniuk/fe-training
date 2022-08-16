import { useState } from 'react';
import Modal from './Modal/Modal';
import './App.css';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className='app'>
      <main>
        <button className='open-btn' onClick={() => setModalActive(true)}>
          Open modal window
        </button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, magni aperiam. Facilis incidunt adipisci
          aut voluptatem dolor voluptas nesciunt molestias dolorum vel repudiandae praesentium harum, aliquam minima?
          Consequatur doloremque laborum vero, placeat nulla distinctio deserunt laudantium assumenda sunt enim. Eius
          natus ipsum accusamus similique. Quasi ducimus architecto corrupti adipisci necessitatibus?
        </p>
        <Modal active={modalActive} setActive={setModalActive}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel at tempora hic mollitia? Nulla hic neque
          architecto molestias mollitia, voluptate dolorem optio omnis ab, quaerat temporibus sunt harum corrupti minus
          animi consequatur itaque nam dolore suscipit! Dicta, soluta reprehenderit magnam blanditiis doloremque quo
          magni sapiente quod illo debitis a.
        </Modal>
      </main>
    </div>
  );
}

export default App;
