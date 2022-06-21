import './App.css';
import Character from "./components/Character";

// task1
// function App() {
//   return (<div>
//           <Character
//               name={'Bart'}
//               text = {'blablabla'}
//               picture={'https://www.pngall.com/wp-content/uploads/2016/06/Bart-Simpson.png'}
//      />
//
//           <Character
//               name={'Homer'}
//               text = {'blablabla'}
//               picture={'https://flyclipart.com/thumb2/simpsons-png-images-free-download-homer-simpson-png-308720.png'}
//           />
//
//           <Character
//               name={'Marge'}
//               text = {'blablabla'}
//               picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
//           />
//
//           <Character
//               name={'Lisa'}
//               text = {'blablabla'}
//               picture={'https://c.neh.tw/thumb/f/720/m2i8Z5H7G6m2H7H7.png'}
//           />
//
//           <Character
//               name={'Maggie'}
//               text = {'blablabla'}
//               picture={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
//           />
//       </div>
//
//   );
// }

// task2
function App() {
  return (<div>
          <Character
              id={'1'}
              name={'Rick Sanchez'}
              status = {'alive'}
              species = {'human'}
              gender = {'male'}
             image={'https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Download-Image.png'}
     />

          <Character
              id={'2'}
              name={'Morty Smith'}
              status = {'alive'}
              species = {'human'}
              gender = {'male'}
              image={'https://upload.wikimedia.org/wikipedia/ru/c/c3/Morty_Smith.png'}
          />

          <Character
              id={'3'}
              name={'Summer Smith'}
              status = {'alive'}
              species = {'human'}
              gender = {'female'}
              image={'https://upload.wikimedia.org/wikipedia/en/9/9f/Summer_Smith.png'}
          />

          <Character
              id={'4'}
              name={'Beth Smith'}
              status = {'alive'}
              species = {'human'}
              gender = {'female'}
              image={'https://i.pinimg.com/736x/78/ae/2a/78ae2ad4b6fc01dc7788a7e3b381a86e.jpg'}
          />

          <Character
              id={'5'}
              name={'Jerry Smith'}
              status = {'alive'}
              species = {'human'}
              gender = {'male'}
              image={'https://e1.pngegg.com/pngimages/327/87/png-clipart-rick-and-morty-hq-resource-rick-and-morty-character-raising-both-hands-illustration-thumbnail.png'}
          />

          <Character
              id={'302'}
              name={'Ruben'}
              status = {'dead'}
              species = {'human'}
              gender = {'male'}
              image={'https://image.pngaaa.com/309/1232309-middle.png'}
          />







      </div>

  );
}

export default App;
