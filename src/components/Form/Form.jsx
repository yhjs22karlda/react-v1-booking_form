import './Form.css'

function Form() {
    return (
        <form className="form">
            <div className='class2'>
                <input type="radio" id="class2" name="class" defaultChecked />
                <label htmlFor="class2"> 2:a klass</label>
            </div>
            <div className='class1'>
                <input type="radio" id="class1" name="class" />
                <label htmlFor="class1"> 1:a klass</label>
            </div>
            <div className='ticket'>
                <label htmlFor="ticket">Antal biljetter</label><br />
                <select id="ticket">
                    <option value="ticket1">1</option>
                    <option value="ticket2">2</option>
                    <option value="ticket3">3</option>
                    <option value="ticket4">4</option>
                    <option value="ticket5">5</option>
                    <option value="ticket6">6</option>
                </select>
            </div>
            <div className='title'>
                <label htmlFor="title">Title</label><br />
                <select id="title">
                    <option value="titleMs">Ms</option>
                    <option value="titleMrs">Mrs</option>
                    <option value="titleMr">Mr</option>
                    <option value="titleOther">Other</option>
                </select>
            </div>
            <div className='first-name'>
                <label htmlFor="fName">Förnamn</label><br />
                <input type="text" id="fName" placeholder='Greta'/>
            </div>
            <div className='last-name'>
                <label htmlFor="lName">Efternamn</label><br />
                <input type="text" id="lName" placeholder='Thunberg'/>
            </div>
            <div className='conditions'>
                <input type="checkbox" id="conditions" />
                <label htmlFor="conditions"> Godkänner villkoren</label>
            </div>
            <button className='button'>Boka biljetter</button>
        </form>
    )
}

export default Form