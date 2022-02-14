import { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const items = [
    { value: 'Home', href: '/main', icon: 'account_balance' },
    { value: 'Services', href: '/services', icon: 'attach_money' },
    { value: 'Store', href: '/store', icon: 'android' },
    { value: 'About us', href: '/about', icon: 'chrome_reader_mode' },
  ];

  return (
    <div className='App'>
      <nav>
        <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate reiciendis ipsa aperiam qui vel similique
          fugiat recusandae voluptatum quia unde, dolore aliquid laborum, dignissimos laudantium eveniet praesentium
          eius tempora temporibus! Animi consequuntur quibusdam deleniti, officia odit obcaecati quas? Debitis animi,
          soluta tempora nulla ipsum esse voluptas. Exercitationem harum maxime quas nobis nam corrupti accusantium
          aspernatur dolorem nemo voluptatibus esse ipsa, consequatur quasi vel nihil sint culpa labore, temporibus quae
          optio odit sunt? Sapiente, consectetur quia! Vel delectus odio cupiditate repellendus dicta ullam architecto.
          Dolorem consequuntur minima id laudantium voluptatibus, sunt dicta beatae unde velit commodi harum facere
          voluptatum reprehenderit? Sequi, nisi. Eligendi voluptate, suscipit similique sit nesciunt maiores, vitae
          blanditiis beatae facere et dolorem laborum enim, saepe reiciendis. Ipsum accusantium molestiae architecto
          debitis aperiam sint blanditiis, aliquam provident facere, consectetur obcaecati aut et! Alias et fugit
          eveniet odit. Nisi laboriosam nam expedita, ab voluptatum odit necessitatibus recusandae a labore, possimus
          repellendus asperiores error sint dolore vel incidunt enim excepturi accusantium reiciendis sequi. Laudantium
          quae magni reiciendis atque nam quibusdam dolor, optio exercitationem dolorum culpa sint qui ipsam earum
          consectetur deleniti perferendis necessitatibus doloribus. Pariatur unde voluptatum minus cupiditate
          asperiores harum similique earum, ratione distinctio non adipisci necessitatibus, sit optio sed?
        </p>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} items={items} header={'Burger menu'} />
    </div>
  );
}

export default App;
