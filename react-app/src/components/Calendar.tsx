import { useForm } from 'react-hook-form'
import '../css/Calendar.css'
import { useState } from 'react'

const Calendar = () => {
    // const defaultValues = { email: 'user@gmail.com' }
    const attendees = ['user1@gmail.com', 'user2@gmail.com']
    const [isOptionalClicked, setIsOptionalClicked] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError
    } = useForm();

    const onSubmit = (data: any) => {
        const start = new Date(`${data['start-date']}T${data['start-time']}`);
        const end = new Date(`${data['end-date']}T${data['end-time']}`);

        if (start >= end) {
            setError('end-time', { message: 'End time must be after start time' });
            // return;
        }
        alert('Form submitted successfully');
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text"
                            placeholder='Add a title'
                            {...register('title', { required: 'Title is required' })} />
                        {errors.title && <p className="error">{errors.title.message}</p>}

                        <input type="checkbox" name='teams-meeting' />
                        <label htmlFor="teams-meeting">Teams Meeting</label>
                    </div>
                    <div className='attendees'>
                        <input type="text" id="attendee" autoComplete='off'
                            list='attendees-list' placeholder='Required Attendees'
                            {...register('attendee')} />
                        <datalist id='attendees-list'>
                            {attendees.map((attendee, i) => (
                                <option key={i} value={attendee} />
                            ))}
                        </datalist>
                        {!isOptionalClicked && (<button onClick={() => setIsOptionalClicked(true)}>Optional</button>)}

                        {isOptionalClicked && (<div className='optional-attendees'>
                            <input type="text" id="optional-attendee" list='attendees-list' autoComplete='on'
                                placeholder='Optional Attendees' {...register('optional-attendee')} />
                            <datalist id='optional-attendees-list'>
                                {attendees.map((attendee, i) => (
                                    <option key={i} value={attendee} />
                                ))}
                            </datalist>
                        </div>)}

                    </div>
                    <div>
                        <input type="date" id="start-date" {...register('start-date', { required: 'Start date is required' })} />
                        <input type="time" id="start-time" {...register('start-time', { required: 'Start time is required' })} />
                        <span> to </span>
                        <input type="date" id="end-date" {...register('end-date', { required: 'End date is required' })} />
                        <input type="time" id="end-time" {...register('end-time', { required: 'End time is required' })} />
                        {errors['end-time'] && (
                            <p className="error">{errors['end-time'].message}</p>
                        )}

                    </div>
                    <button type='submit' disabled={isSubmitting} >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Calendar;
