import React from 'react';
import './CrystalForm.css'
import PropTypes from 'prop-types';

const CrystalForm = ({ addCrystalCallback }) => {
    // Created CryalForm component and JSX elements, added labels, inputs (value is really imprtant aspect to form, added name and matched them to each attribute in inputs


    // return <div>CrystalForm</div>;
    // const [name, setName] = React.useState('');
    // const [color, setColor] = React.useState(''); 
    // const [powers, setPowers] = React.useState(''); 

    // DRY
    const [formFields, setFormFields] = React.useState({
        name: '',
        color: '',
        powers: '',
        charges: 0,
    });

    // const onNameChange = (event) => {
    //     const { value } = event.target;
    //     setFormFields({
    //         ...formFields, 
    //         name: value,
    //     });
    // }
    // const onColorChange = (event) => {
    //     const { value } = event.target;
    //     setFormFields({
    //         ...formFields, 
    //         color: value,
    //     });
    // }
    // const onPowersChange = (event) => {
    //     const { value } = event.target;
    //     setFormFields({
    //         ...formFields, 
    //         powers: value,
    //     });
    // }

    // DRY
    const handleChange = (evt) => 
        setFormFields({ ...formFields, [evt.target.name] : evt.target.value });
    
    const handleSubmit = (event) => {
        event.preventDefault();

        addCrystalCallback(formFields);
        
        setFormFields({
            name: '',
            color: '',
            powers: '',
            charges: 0,
        });
    }

    return (
        <form onSubmit={handleSubmit} className='new_crystal_form'>
            <section>
                <h2>Add A Crystal</h2>
                <div className = 'new_crystal_fields'>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input name='name' value={formFields.name} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='color'>Color: </label>
                        <input name='color' value={formFields.color} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='powers'>Powers: </label>
                        <input name='powers' value={formFields.powers} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='charges'>Charges: </label>
                        <input name='charges' value={formFields.charges} onChange={handleChange}></input>
                    </div>
                    <button 
                    className='button new_crystal_submit' 
                    type='submit' 
                    value='Add Crystal'
                    >
                        Add Crystal
                    </button>
                </div>
            </section>
        </form>
    )
}

CrystalForm.propTypes = {
    addCrystalCallback: PropTypes.func.isRequired
}

export default CrystalForm;