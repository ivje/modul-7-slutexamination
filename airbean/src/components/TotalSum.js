import './TotalSum.css';

function TotalSum({sum}) {
    return (
        <div className="totalSumRow"> 
        <div className="totalSumRowColumn1">
            <div className="totalSumRow1">
                <h2>Total</h2>
                <div className="cartLine">&nbsp;</div>
                <h2>{sum} kr</h2>
            </div>
            <div className="totalSumRow2">inkl moms + drönarleverans</div>
        </div> 
    </div>
    )
}

export default TotalSum;