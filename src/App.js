import './App.css';
import { ViewSizeStep1 } from './Step1/ViewSizeStep1';
import { ViewSizeStep2 } from './Step2/ViewSizeStep2';
import { ViewSizeStep3 } from './Step3/ViewSizeStep3';
import { WithSetDivHeight } from './Step3/WithSetDivHeight';

function App() {

  const ViewSizeWrapped = WithSetDivHeight(ViewSizeStep3);
  /* 
    Uncomment code parts to see solution for each step
  */
  return (
    <div >
      {/* <ViewSizeStep1 /> */}
      {/* <ViewSizeStep2 /> */}
      <ViewSizeWrapped />
    </div>
  );
}

export default App;
