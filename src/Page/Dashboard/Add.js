import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ students,setIsAdding,setStudents }){
    const [firstName,setFirstName]=useState('');
    const [rollNo,setRollNo] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = (e) =>{
        e.preventDefault();
        if (!firstName || !rollNo ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        const date=new Date();
        const datetime0 =  date.getHours();
        const date1=date.getDate();
        const datetime = " Month-"+date.getMonth()+" Date-"+date1+" hours-"+datetime0;
        const id = students.length + 1;
        const newStudent = {
            id,
            firstName,
            rollNo,
            datetime
        }
        students.push(newStudent);
        setStudents(students);
        setIsAdding(false)

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${rollNo}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="rollNo">Roll Number</label>
                <input
                    id="rollNo"
                    type="text"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
           
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add"  />
                    
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;