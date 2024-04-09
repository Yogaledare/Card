import logo from './logo.svg';
import './App.css';
import useCardDrawer from "./useCardDrawer";
import CardDisplay from "./CardDisplay";

function App() {


    const {drawCard, imageUrl, value, suit, loading, error} = useCardDrawer();


    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <header className='my-5 '>
                        <h1 className={'text-center my-5'}>Draw a Card!</h1>
                        {/*<p>*/}
                        {/*    Explanation...*/}
                        {/*</p>*/}
                    </header>


                    <div className={'my-5 d-flex justify-content-center'}>
                        <button onClick={drawCard} className={'btn btn-primary'}>
                            Draw Card
                        </button>
                    </div>
                    
                    <div className={'d-flex justify-content-center'}>
                        <CardDisplay
                            imageUrl={imageUrl}
                            loading={loading}
                            error={error}
                        ></CardDisplay>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default App;
