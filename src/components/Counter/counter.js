import { connect } from 'react-redux';
import { Plus, Minus, PlusFive, Zero, Multiplication, Division } from "../../actions/counterActions"


const Counter = ({ counter, Plus, Minus, PlusFive, Zero, Multiplication, Division}) => {
   
    
    return (
        <div className="container d-flex justify-content-center counter">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success" onClick={ Plus }>+</button>
                    <span>{counter}</span>
                    <button type="button" className="btn btn-warning" onClick={ Minus }>-</button>
                    <button type="button" className="btn btn-danger" onClick={ () =>  PlusFive(5) }>+5</button>
                    <button type="button" className="btn btn-danger" onClick={ Zero }>Zero</button>
                    <button type="button" className="btn btn-danger" onClick={ Multiplication }>Multiplication</button>
                    <button type="button" className="btn btn-danger" onClick={ () => Division(2) }>Division</button>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( {CounterReducer} ) => {
    const { counter } = CounterReducer;
    return { counter }
};

const mapDispatchToProps =  { Plus, Minus, PlusFive, Zero, Multiplication, Division };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);