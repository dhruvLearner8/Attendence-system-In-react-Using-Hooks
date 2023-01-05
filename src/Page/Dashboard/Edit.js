import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedStudent, setStudents, setIsEditing }) {

    const id = selectedStudent.id;

    const [firstName, setFirstName] = useState(selectedStudent.firstName);
    const [rollNo, setRollNo] = useState(selectedStudent.rollNo);
    

    const handleUpdate = e => {
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
        
        const student = {
            id,
            firstName,
            rollNo,
            datetime
        }

        // const employee = {
        //     id,
        //     firstName,
        //     lastName,
        //     email,
        //     salary,
        //     date
        // };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setStudents(students);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${student.firstName} ${student.rollNo}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Roll No</label>
                <input
                    id="rollNo"
                    type="text"
                    name="rollNo"
                    value={rollNo}
                    onChange={e => setRollNo(e.target.value)}
                />
                
                
                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit