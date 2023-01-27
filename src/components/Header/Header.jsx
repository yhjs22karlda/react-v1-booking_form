import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className='h1'> ÅKA TÅG </div>
            <div className='from'>
                <p className='header__city'>STOCKHOLM</p>
                <p className='time'>10:30</p>
            </div>
            <div className='arrow'>&#10230;</div>
            <div className='to'>
                <p className='header__city'>GÖTEBORG</p>
                <p className='time'>14:45</p>
            </div>
        </div>
    )
}

export default Header