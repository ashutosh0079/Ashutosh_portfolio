import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_dtdyjti', 'template_p8k2gvw', form.current, '34_6mHIZolGudZ_Z9')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
        I am a highly motivated BTech student specializing in Computer Science,
        currently in my fourth year of study. Eager to apply and expand my skills
        in a real-world setting, I am actively seeking opportunities for internships
        and full-time positions. My academic background, combined with 
        practical experience gained through coursework and projects, 
        has equipped me with a strong foundation in computer science principles and 
        programming languages.
        <br/>
        <br/>
        Please contact me using below form!!!
        </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Ashutosh Gupta,
          <br />
          India,
          <br />
          614, Patel Nagar New mandi Muzaffarnagar<br />
          Uttar Pradesh <br />
          <br />
          <span>ashu@gmail.com</span><br/>
          <span>ashutosh.gupta2020vitstudent.ac.in</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[29.466960, 77.711260]} zoom={12}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[29.466960, 77.711260]}>
              <Popup>Ashutosh Gupta lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact