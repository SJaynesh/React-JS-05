import { useEffect, useState } from "react";

function StudentForm() {

    // let n: number = 10;
    // let name: any = "Hello";

    // name = 45;

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [std, setStd] = useState<string>("");
    const [hobby, setHobby] = useState<string[]>([]);
    const [error, setError] = useState<any>({});

    const [allStudents, setAllStudents] = useState<studentObject[]>(JSON.parse(localStorage.getItem('students') || "[]"));

    // useEffect(() => {
    //     const data = localStorage.getItem('students');

    //     console.log(data);


    //     if (data != null) {
    //         setAllStudents(JSON.parse(data));
    //     }
    // }, []);


    const allStd: string[] = [
        '1st',
        '2nd',
        '3rd',
        '4th',
        '5th',
        '6th',
        '7th',
        '8th',
        '9th',
        '10th',
        '11th',
        '12th',
    ];

    const allHobby: string[] = ["Reading", "Writing", "Sleeping", "Eating"];

    type studentObject = {
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        gender: string,
        std: string,
        hobby: string[]
    }

    const validation = () => {
        const newError: any = {}

        if (!firstName.trim()) newError.firstName = "First Name is required...";

        if (!lastName.trim()) newError.lastName = "Last Name is required...";

        if (!email.trim()) newError.email = "Email is required...";
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) newError.email = "email formate is wrong..."

        if (!phone.trim()) newError.phone = "Phone Number is required...";
        else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(phone)) newError.phone = "phone is wrong..."


        if (!gender.trim()) newError.gender = "Gender is required...";

        if (!std.trim() && std !== 'Select') newError.std = "Std is required...";

        if (hobby.length == 0) newError.hobby = "Please select at list one hobby";

        setError(newError)

        return Object.keys(newError).length;
    }

    const submitStudentForm = (event: any) => {
        event.preventDefault();

        if (validation() !== 0) {
            return;
        }

        // localStorage.setItem("username", "Om");

        const student: studentObject = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            gender: gender,
            std: std,
            hobby: hobby
        };
        const data = [...allStudents, student];

        setAllStudents(data)

        localStorage.setItem('students', JSON.stringify(data));

        // const fname = document.getElementById('fname') as HTMLInputElement;

        // console.log(fname.value);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setGender("")
        setStd("")
        setHobby([])
    }

    // const getFirstName = (event: any) => setFirstName(event.target.value);

    const getHobby = (event: any) => {
        const value = event.target.value;
        const checked = event.target.checked;
        // console.log("My Hobby : ", value);
        // console.log("My Hobby : ", checked);

        if (checked) {
            setHobby(data => [...data, value])
        } else {
            setHobby(data => data.filter(element => element !== value))
        }
    }

    return (<>
        <div className="w-full flex justify-center">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" method="GET" action="#" onSubmit={submitStudentForm} >
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Student Form</h5>
                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="FName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            First Name
                        </label>

                        <input
                            type="text"
                            name="fname"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            placeholder="Enter first name"
                            className={`bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors
                                    ${error.firstName
                                    ? "border border-red-500 focus:border-red-500 focus:ring-red-500"
                                    : "border border-gray-500 focus:border-blue-500 focus:ring-blue-500"
                                }`}
                        />

                        {error.firstName && (
                            <p className="text-red-500 text-xs pt-1">{error.firstName}</p>
                        )}
                    </div>




                    {/* Last Name */}
                    <div>
                        <label htmlFor="LName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" name="lname" value={lastName} onChange={event => setLastName(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter last name" />
                        {error.lastName && <p className="text-red-500 text-xs pt-1">{error.lastName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="phone" value={email} onChange={event => setEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter email" />
                        {error.email && <p className="text-red-500 text-xs pt-1">{error.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="number" name="phone" value={phone} onChange={event => setPhone(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter phone number" />
                        {error.phone && <p className="text-red-500 text-xs pt-1">{error.phone}</p>}
                    </div>

                    {/* Gender */}
                    <div>
                        <label htmlFor="Gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>

                        <fieldset>
                            <div className="flex items-center mb-4">
                                <input type="radio" name="gender" value="Male" onChange={event => setGender(event.target.value)} checked={gender === 'Male'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="gender-male" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Male
                                </label>

                                <input type="radio" name="gender" value="Female" onChange={event => setGender(event.target.value)} checked={gender === 'Female'} className="ml-4 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="gender-female" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Female
                                </label>
                            </div>
                            {error.gender && <p className="text-red-500 text-xs pt-1">{error.gender}</p>}
                        </fieldset>


                    </div>

                    {/* Std */}
                    <div>
                        <label htmlFor="std" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Std</label>
                        <select value={std} onChange={event => setStd(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option>Select</option>
                            {allStd.map((element, index) => <option key={index}>{element}</option>)}
                        </select>
                        {error.std && <p className="text-red-500 text-xs pt-1">{error.std}</p>}
                    </div>

                    {/* Hobby */}
                    <div>
                        <label htmlFor="hobby" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hobby</label>


                        <fieldset>
                            <legend className="sr-only">Checkbox variants</legend>

                            <div className="flex items-center mb-4">
                                {allHobby.map((data, index) => <div className="ml-1" key={index}>
                                    <input type="checkbox" value={data} onChange={getHobby} checked={hobby.includes(data)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-1" className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">{data}</label>
                                </div>)}

                            </div>
                            {error.hobby && <p className="text-red-500 text-xs pt-1">{error.hobby}</p>}
                        </fieldset>

                    </div>

                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Student</button>

                </form>
            </div >
        </div >

        <h2 className="text-5xl text-center m-5">Students Table</h2>
        <div className="m-5 flex justify-center relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-svw  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Std
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hobby
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allStudents.map((stud, index) =>
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td scope="row" className="px-6 py-4 ">
                                {stud.firstName}
                            </td>
                            <td className="px-6 py-4">
                                {stud.lastName}
                            </td>
                            <td className="px-6 py-4">
                                {stud.email}
                            </td>
                            <td className="px-6 py-4">
                                {stud.phone}
                            </td>
                            <td className="px-6 py-4">
                                {stud.gender}
                            </td>
                            <td className="px-6 py-4">
                                {stud.std}
                            </td>
                            <td className="px-6 py-4">
                                {stud.hobby.join(", ")}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button>Edit</button>
                                <button className="ml-1" onClick={}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    </>
    );
}

export default StudentForm;