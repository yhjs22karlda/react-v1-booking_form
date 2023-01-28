import './Form.css'

function Form() {
    const status = {
        firstName: "Greta",
        lastName: "Thunberg",
        title: "Ms",
        tickets: 1,
        class: 2,
        approved: false
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(status);
    }

    return (
        <form className="form">
            <div className='class2'>
                <input type="radio" id="class2" name="class" value="2" defaultChecked
                onChange={(e) => {status.class = Number(e.target.value)}} />
                <label htmlFor="class2"> 2:a klass</label>
            </div>
            <div className='class1'>
                <input type="radio" id="class1" name="class" value="1"
                onChange={(e) => {status.class = Number(e.target.value)}} />
                <label htmlFor="class1"> 1:a klass</label>
            </div>
            <div className='ticket'>
                <label htmlFor="ticket">Antal biljetter</label><br />
                <select id="ticket"
                onChange={(e) => {status.tickets = Number(e.target.value)}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div className='title'>
                <label htmlFor="title">Title</label><br />
                <select id="title"
                onChange={(e) => {status.title = e.target.value}}>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Mr">Mr</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className='first-name'>
                <label htmlFor="fName">Förnamn</label><br />
                <input type="text" id="fName" placeholder='Greta'
                onChange={(e) => {status.firstName = e.target.value}} />
            </div>
            <div className='last-name'>
                <label htmlFor="lName">Efternamn</label><br />
                <input type="text" id="lName" placeholder='Thunberg'
                onChange={(e) => {status.lastName = e.target.value}} />
            </div>
            <div className='conditions'>
                <input type="checkbox" id="conditions" value={true}
                onChange={(e) => {status.approved = e.target.checked}} />
                <label htmlFor="conditions"> Godkänner villkoren</label>
            </div>
            <button className='button' onClick={handleClick}>Boka biljetter</button>
        </form>
    )
}

export default Form