import {Route} from 'react-router-dom';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';


const App = () => (
    <div className="app">
        <Route path="/" component={PokemonIndexContainer} />
    </div>
)

export default App