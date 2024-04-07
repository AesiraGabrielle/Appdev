import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSidebar from '../components/UserSidebar'; 


function Home() {

    const navigate = useNavigate();

    const redirectToArtistPage = () => {
        // Redirect to the Artist page
        navigate('/artist');

    return (
        <div className="homepage" style={{ fontFamily: 'Montserrat' }}>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="button-header">
            <br/>
            <button style={{ borderRadius: '30px', backgroundColor: '#C70000', color: '#fff', fontSize: '12px', fontFamily: 'Montserrat', padding: '8px', marginLeft: '1540px', marginRight: '8px', marginBottom: '5px' }}> EXPLORE PREMIUM</button>
            <button style={{ borderRadius: '10px', backgroundColor: '#2C2C2C', color: '#fff', fontSize: '16px', fontFamily: 'Montserrat', padding: '9px', marginLeft: '10px', marginRight: '20px', width: '150px' }}> User Name <img src="src/assets/images/user.png" alt="User" style={{ height: '17px', width: '17px' }} /> </button>
            <br />
            </div>
            </div>
                    </div>
                    <div className="col-auto">
                        <UserSidebar />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1 className="text-left" style={{marginLeft: '400px'}}>GOOD MORNING!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="button-contained">
            <button className="button1" onClick={redirectToArtistPage} ><img className="taytay" src="src/assets/images/taylor.jpg" alt="first" />
            
              <h5> TAYLOR SWIFT </h5> 
              <h6>
                TAYLOR SWIFT IS THE DEBUT STUDIO ALBUM BY THE AMERICAN SINGER-SONGWRITER.  </h6>
            </button>
            <button className="button1" onClick={redirectToArtistPage} ><img className="taytay" src="src/assets/images/taylor.jpg" alt="first" />
              <h5> TAYLOR SWIFT </h5>  
              <h6>
                    TAYLOR SWIFT IS THE DEBUT STUDIO ALBUM BY THE AMERICAN SINGER-SONGWRITER. </h6>
            </button>
            <button className="button1" onClick={redirectToArtistPage} ><img className="taytay" src="src/assets/images/taylor.jpg" alt="first" />
              <h5> TAYLOR SWIFT </h5>  
              <h6>
                      TAYLOR SWIFT IS THE DEBUT STUDIO ALBUM BY THE AMERICAN SINGER-SONGWRITER. </h6>
            </button>
          </div>
  
           
  
          <div className="button-contained">
            <button className="button1" onClick={redirectToArtistPage} ><img className="taytay" src="src/assets/images/taylor.jpg" alt="first" />
              <h5> TAYLOR SWIFT </h5>  
              <h6>
                   TAYLOR SWIFT IS THE DEBUT STUDIO ALBUM BY THE AMERICAN SINGER-SONGWRITER.  </h6>
            </button>
            <button className="button1" onClick={redirectToArtistPage} ><img className="taytay" src="src/assets/images/taylor.jpg" alt="first" />
              <h5> TAYLOR SWIFT </h5>  
              <h6>
                   TAYLOR SWIFT IS THE DEBUT STUDIO ALBUM BY THE AMERICAN SINGER-SONGWRITER.  </h6>
            </button>
            <button className="button1" onClick={redirectToArtistPage} > <img className="taytay" src="src/assets/images/taylor.jpg" alt="first" />
              <h5> TAYLOR SWIFT </h5>  
              <h6>
                   TAYLOR SWIFT IS THE DEBUT STUDIO ALBUM BY THE AMERICAN SINGER-SONGWRITER. </h6>
            </button>
          </div>
  
          <br />
          <br />

          <div className="row" >
                    <div className="col">
                        <h3 className="text-center">YOUR TOP MIXES</h3>
                        <div className="topmixes d-flex flex-nowrap">
                        <div className="topmixes" style={{ marginLeft: '0px' }}>
                        </div>
                        </div>
                        </div>
                        <div className="buttonsbuttons">

            <button className="btn7"  onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
                </div>
            </button>
            </div>
            <br />
            <br />

            <div className="row">
                    <div className="col">
                    <h3 style={{ marginLeft: '3px', fontFamily: 'Montserrat', float: 'right', marginRight: '40px' }}>Show All</h3>

                        <h3 className="text-center">RECENTLY PLAYED</h3>
                        <div className="recplayed d-flex flex-nowrap">
              </div>
                        </div>
                        </div>
                        <div className="buttonsbuttons">

            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7" onClick={redirectToArtistPage}  style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7"  onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
                </div>
            </button>
            </div>


                    <div className="row">
                    <div className="col">
                        <h3 className="text-center">MADE FOR YOU</h3>
                        <div className="madeforu d-flex flex-nowrap">
                         <div className="madeforu" style={{ marginLeft: '0px' }}>
                         </div>
                        </div>
                        </div>
                        <div className="buttonsbuttons">

            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
                </div>
            </button>
            </div>

            <br />
            <br />

                <div className="row">
                    <div className="col">
                        <h3 className="text-center">RECOMMENDATION RADIO</h3>
                        <div className="reco d-flex flex-nowrap">
                        </div>
                        </div>
                        </div>
                        <div className="buttonsbuttons">

            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7" onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            
            <button className="btn7"  onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylor.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
              </div>
            </button>
            <button className="btn7"  onClick={redirectToArtistPage} style={{ position: 'relative' }}>
              <img className="taytay1" src="src/assets/images/taylorr.jpg" alt="second" />
              <div className="textstyles" style={{ fontFamily: 'Montserrat' }}>
                <h4>  Reputation</h4> 
                <h5>
                  Taylor Swift’s self-titled debut was released October 24th, 2006. Taylor wrote or co-wrote every song on the album during her freshman year of high school.
                </h5>
                </div>
            </button>
            </div>
            </div>
                    </div>
            {/* Add more buttons as needed */}
            </div>
                    </div>

                    </div>
   );
}}

export default Home;
  
