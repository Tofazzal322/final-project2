import React from 'react';
import AvailableAppointments from './AvailableAppointments';
import AppointmentHeader from '../Appointment/AppointmentHeader'



const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
            {/* <Footer/> */}
        </div>
    );
};

export default Appointment;