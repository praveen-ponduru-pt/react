import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddressBook = () => {

    const countryData = {
        USA: ['Florida', 'Texas'],
        India: ['Andhra Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana']
    };
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [addresses, setAddresses] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const selectedCountry = watch('country');

    const onSubmit = (data) => {
        if (editingIndex !== null) {
            const updatedAddresses = [...addresses];
            updatedAddresses[editingIndex] = data;
            setAddresses(updatedAddresses);
            setEditingIndex(null);
        } else {
            setAddresses([...addresses, data]);
        }
        reset();
        setIsFormVisible(false);
    };

    const handleEdit = (index) => {
        const addressToEdit = addresses[index];
        reset(addressToEdit);
        setEditingIndex(index);
        setIsFormVisible(true);
    };

    const handleDelete = (index) => {
        const updatedAddresses = addresses.filter((_, i) => i !== index);
        setAddresses(updatedAddresses);
        if (editingIndex === index) {
            setEditingIndex(null);
            reset();
        }
    };

    return (
        <>
            <div className="container">
                <h1 >Addresses</h1>

                {!isFormVisible && (
                    <button onClick={() => setIsFormVisible(true)}>Add Address</button>
                )}

                {isFormVisible && (<div className="edit-form">
                    <h2>
                        {editingIndex !== null ? 'Edit Address' : 'Add New Address'}
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="address">

                            <div>
                                <label htmlFor="address1"> Address Line 1* </label>
                                <input id="address1" type="text" className="address1"
                                    {...register('address1', { required: 'Address Line 1 is required' })} />
                                {errors.address1 && (
                                    <p className="error">{errors.address1.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="street">Street</label>
                                <input id="street" type="text" className="street" {...register('street')} />
                            </div>

                            <div>
                                <label htmlFor="country">Country*</label>
                                <select
                                    id="country" className="country" {...register('country', { required: 'Country is required' })}>
                                    <option value="">Select Country</option>
                                    {Object.keys(countryData).map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {errors.country && (
                                    <p className="error">{errors.country.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="state"> State* </label>
                                <select
                                    id="state" {...register('state', { required: 'State is required' })}
                                    disabled={!selectedCountry}>
                                    <option value="">Select State</option>
                                    {selectedCountry &&
                                        countryData[selectedCountry].map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                </select>
                                {errors.state && (
                                    <p className="error">{errors.state.message}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="pincode"> Pincode* </label>
                                <input
                                    id="pincode" type="text" {...register('pincode', {
                                        required: 'Pincode is required',
                                        pattern: {
                                            value: /^\d+$/,
                                            message: 'Pincode must be a number',
                                        },
                                    })}
                                />
                                {errors.pincode && (
                                    <p className="error">{errors.pincode.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            {editingIndex !== null && (
                                <button type="button" onClick={() => {
                                    setEditingIndex(null);
                                    reset();
                                }}> Cancel </button>
                            )}
                            <button type="submit"> {editingIndex !== null ? 'Update Address' : 'Add Address'} </button>
                        </div>
                    </form>
                </div>)}

                <div className="address-list">
                    {addresses.map((address, i) => (
                        <div key={i}>
                            <h3> Address {i + 1} </h3>
                            <p> {address.address1} </p>
                            {address.street && <p>{address.street} </p>}
                            <p> {address.state}, {address.country} </p>
                            <p>Pincode: {address.pincode} </p>
                            <div>
                                <button onClick={() => handleEdit(i)}> Edit </button>
                                <button onClick={() => handleDelete(i)}> Delete </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AddressBook;