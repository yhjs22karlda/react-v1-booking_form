import './Form.css'

function Form() {
    return (
        <form className="form">
            <div className='class2'>
                <input type="radio" id="class2" name="class" defaultChecked />
                <label htmlFor="class2">2:a klass</label>
            </div>
            <div className='class1'>
                <input type="radio" id="class1" name="class" />
                <label htmlFor="class1">1:a klass</label>
            </div>
            <div className='ticket'>
                <label htmlFor="ticket">Antal biljetter</label>
                <select id="ticket">
                    <option value="tic1">1</option>
                    <option value="tic2">2</option>
                    <option value="tic3">3</option>
                    <option value="tic4">4</option>
                    <option value="tic5">5</option>
                    <option value="tic6">6</option>
                </select>
            </div>
            <div className='title'>
                <label htmlFor="title">Title</label>
                <select id="title">
                    <option value="titMs">Ms</option>
                    <option value="titMrs">Mrs</option>
                    <option value="titMr">Mr</option>
                    <option value="titOther">Other</option>
                </select>
            </div>
        </form>
    )
}

export default Form