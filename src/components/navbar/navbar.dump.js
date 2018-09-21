import React from 'react';
import './navbar.css';

function NavBar(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">

            <a className="navbar-brand" href="/">
                <img id="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAABICAMAAADVonkXAAAAnFBMVEUAAAD///////////////////+XyT7///////////+XyT7///+XyT6XyT6XyT7v9+P///////+XyT6XyT7///+XyT7///+XyT6XyT7///////+XyT6XyT6XyT7///////////////////+XyT7///+XyT7///+XyT7///+XyT7///////+XyT7///+XyT6XyT6XyT6XyT7///+XyT5WQtlnAAAAMnRSTlMAkBBg4FD8IG6AC7BC904D+S/ovvGyCgbx5sdoWx+jeNM/SDc2e5gtKI4YucmJ0qTbSZlyhCoAAAT5SURBVHja5dxtd5owGAbgB0RB7QoopQMrgkNLtfYF//9/m5pkkQR8yMnmOYP7U1UULhKSAKGAZLJ4mh2PPz7eHqC7ed78PLJ8dBa6/Dhe582FLuZ1dqzm6Rm6l7Oy+86zsvvOX6fGp/tOppSdE+hOuFLKvDvOs7L7zrOy+05J+dVFp6RcTObdcz5ISgAFZziVkhhO7tYtNIB/HXM1na7MOuWPKmh0Uqo4zbI2QZLLCxnwj7OzylMsG1e+ANQ63ycIU8rUvjszoWtuo6TOJ8SJMstgeG9mRNbj4co/eZadCFOOc2emV5LgStyJM3mG92XGZD0pqlR0cuaYx9h7jBnsNJimcUkGrbOu7FyS7xol4pw/NzKrHYgTsHZIg2mzmq/gjMvSqigfR7ISdW4wJott0ff9uzB5QhNuKh8BcOePZUsm2LQ8t3dmAqps43xrywSHvB+5d2fiSjnuZ2XBWWumG9Fae3cmrsSdr22ZsCUfDDCmu7NtO1Rg6itx50tr5oB8cLjF9Fd7i3Y98daxgSYkHRP5ZD9mWcMpmVEfEwAKspyPKXHnAmFKndi2kekO0rKa9FDcGnMY/JiXEpyZQ16B4EFRCcsv9dLkzKSJmRGkkNhXZTJalbmcCX3Et4ry+K1aaY0GpuM1b686cw8C81NQPigpj0vVJmhVzxyXPPrMwBaYy5GW8qN9h0LblnUtc1DSeNPVMMuGThJdM61zIkqwWMaXb1rXCVhrLDA3Kkq5ii8QpgTxTJnJx0jewQQal22jSodikn0ZuyJzrqWcTdoydxE/aGRmQgsqAx5Tkcl/xytAZP7UUR4foSXTjPkZJ2dyAKvQGkzOGoPE1FJuoCVzbbGe0K1jjllfo8fcBXQdCFNR+QbNzCHP4GCVLBnUMWlRF5rMPamyOQBSafWU+EWSA9QxXVrSoMd0KutAmiANJcpMoJbp02GgHrMg4wsrFJhKHcorqsSZhlvPXNOBgxbTjdlhwYMPD3ClKjMaAghMYWu0mGOxSuCDPVy5AUWm5YSgxrSVmDmtsibwoEN3XIkxI4snnq5yIFGotLkK002lKoufiOFKlGmDmGZmUddtwkCFuRJaWZmJn1YvEKUu0/X41TCeBGPKrWwaNjCVnbJSnwlxzVgvDETmTq7b1R/wfGhiqjs3oM8UWsUDeR0L1VBghuxbUhxhB0hMdecG9JngsbMVNj6QttMPJCZEpGY2jWVjF2G2cY74CaY+kwxyg1CoteWYbWkelTSOOGYtcxAyZVcMUCbufBlxpTZzL5TemqFSxwYws+Rc3J5YR1flrYbG8CtxBSZ+q4g7F6DDlA+85HxBhBYIi3fiESB56RSmcFqark+GMF/FxWWNUVkXU2DyG3+okyr1mUXJY9HJEGKiHfMavI+h8azL8kPyJspUu437OfkrTKH0AgIXy8TLIBWZdiDf5F+XOFPxpvx88reY9pWKvhNXyzIHGIhMyDzxCmZoqTLxKRbMqc+Egm8ebVFch9M9wyT9qcCEPL2mTMmuQJmqE2ZwZ8jv1CALDvbBpdjiEGjctRFHQZBOnR0rdGebJOO8cqMlpiVqTR375DYacv5Vn/yZq09/eudO/Zj2LgTlhH42zHylL6pPZnv//6cl3pqa2DVn/UTTHji/pOtAnUg/JoH3ZUp/Xx7Q6MvjNn15eKovj8L15cHGvjym2peHjvvyCHl3/iHAb+TFOWKbsDrOAAAAAElFTkSuQmCC" height="30" alt="" />
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                                <a className="nav-link">Clases</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/projects">Proyectos <sub><span className="new">New</span></sub></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Agenda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Foro</a>
                            </li>
                            <span className="separator"></span>
                            <li className="nav-item">
                                <a className="nav-link">2500</a>
                            </li>

                </ul>
               

            </div>
            
        </nav>
       
    );

}

export default NavBar;