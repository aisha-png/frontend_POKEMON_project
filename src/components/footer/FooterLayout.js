import React from 'react'
// import pokemonGroup from '../../images/four_pokemons.png'


const FooterLayout = () => {
  return (
    <>
        <div className='footer-body'>
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='footer-column'>
                            <h4>Company</h4>
                            <ul className='footer-ul'>
                                <li><a href='https://www.google.co.uk/'>about us</a></li>
                                <li><a href='https://www.google.co.uk/'>our services</a></li>
                                <li><a href='https://www.google.co.uk/'>privacy policy</a></li>
                                <li><a href='https://www.google.co.uk/'>Subscribe</a></li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <h4>get help</h4>
                            <ul className='footer-ul'>
                                <li><a href='https://www.google.co.uk/'>FAQ</a></li>
                                <li><a href='https://www.google.co.uk/'>shipping</a></li>
                                <li><a href='https://www.google.co.uk/'>returns</a></li>
                                <li><a href='https://www.google.co.uk/'>order status</a></li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <h4>about pokemon</h4>
                            <ul className='footer-ul'>
                                <li><a href='https://www.google.co.uk/'>pokemons</a></li>
                                <li><a href='https://www.google.co.uk/'>trainers</a></li>
                                <li><a href='https://www.google.co.uk/'>gym leaders</a></li>
                                <li><a href='https://www.google.co.uk/'>gyms</a></li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <h4>follow us</h4>
                            <ul className='footer-ul'>
                                <a href='https://www.google.co.uk/'><i className='link-facebook'></i></a>
                                <a href='https://www.google.co.uk/'><i className='link-twitter'></i></a>
                                <a href='https://www.google.co.uk/'><i className='link-instagram'></i></a>
                                <a href='https://www.google.co.uk/'><i className='link-linkedin'></i></a>
                        
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterLayout;