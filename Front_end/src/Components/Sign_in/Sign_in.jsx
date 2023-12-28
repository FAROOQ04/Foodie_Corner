import style from './Sign_in.module.css'
import Title from '../ExploreFood/Title'
import { useState } from 'react';
function Sign_in() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        password: '',
    });
    function SendBackEnd() {
        const requestOption ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }; console.log('Request Payload:', JSON.stringify(formData));
        fetch('http://localhost:8080/api/users/signup', requestOption)
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleChange = event => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id.toLowerCase()]: value,
        }));
    };




return (
    <div>
        <Title />
        <div className="container" id={style.container}>
            <div className="form" id={style.form}>
                <form >
                    {/* <div className="row"> */}
                    <div className="col-md-6" id={style.col}>
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" id='firstName' 
                        onChange={handleChange}/>
                    </div>
                    <div className="col-md-6" id={style.col}>
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" id='lastName' 
                        onChange={handleChange}/>
                    </div>
                    {/* </div> */}
                    <div className="col-md-6" id={style.col}>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" 
                        onChange={handleChange}/>
                    </div>
                    <div className="col-md-6" id={style.col}>
                        <label htmlFor="number" className="form-label">Number:</label>
                        <input type="Number" className="form-control" id="number" placeholder="phone number" 
                        onChange={handleChange}/>
                    </div>
                    <div className="col-md-6" id={style.col}>
                        <label htmlFor="Password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="Password" placeholder="password" 
                        onChange={handleChange}/>
                    </div>
                    <button type="button" className="btn btn-primary" id={style.button} onClick={SendBackEnd}>submit</button>

                </form>
            </div>

        </div>
    </div>
)
}

export default Sign_in
