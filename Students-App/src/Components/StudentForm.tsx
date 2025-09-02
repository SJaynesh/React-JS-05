import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";



function StudentForm() {


    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [std, setStd] = useState<string>("");
    const [hobby, setHobby] = useState<string[]>([]);
    const [error, setError] = useState<any>({});
    const [allStudents, setAllStudents] = useState<studentObject[]>(
        JSON.parse(localStorage.getItem("students") || "[]")
    );
    const [editId, setEditId] = useState<number>();

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(allStudents));
    }, [allStudents]);



    const allStd: string[] = [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th",
        "11th",
        "12th",
    ];

    const allHobby: string[] = ["Reading", "Writing", "Sleeping", "Eating"];

    type studentObject = {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        gender: string;
        std: string;
        hobby: string[];
    };

    const getHobby = (event: any) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) setHobby((data) => [...data, value]);
        else setHobby((data) => data.filter((element) => element !== value));
    };

    const validation = () => {
        const newError: any = {};
        if (!firstName.trim()) newError.firstName = "First Name is required...";
        if (!lastName.trim()) newError.lastName = "Last Name is required...";
        if (!email.trim()) newError.email = "Email is required...";
        else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        )
            newError.email = "Invalid email format";
        if (!phone.trim()) newError.phone = "Phone Number is required...";
        else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(phone))
            newError.phone = "Invalid phone number";
        if (!gender.trim()) newError.gender = "Gender is required...";
        if (!std.trim() || std === "Select") newError.std = "Std is required...";
        if (hobby.length == 0) newError.hobby = "Please select at least one hobby";

        setError(newError);
        return Object.keys(newError).length;
    };

    const submitStudentForm = (event: any) => {
        event.preventDefault();
        if (validation() !== 0) return;

        const student: studentObject = {
            firstName,
            lastName,
            email,
            phone,
            gender,
            std,
            hobby,
        };

        if (editId === undefined) {
            // const data = [...allStudents, student];
            setAllStudents(allStudents => [...allStudents, student]);

            toast.success("Student added successfully...");
        } else {
            const data = allStudents.map((stud, index) =>
                (editId === index) ? student : stud
            );
            console.log(data);
            setAllStudents(data);
            toast.success("Student updated successfully...");
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setGender("");
        setStd("");
        setHobby([]);
        setEditId(undefined)
    };

    const deleteStudent = (i: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This student will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",   // Blue button
            cancelButtonColor: "#d33",       // Red button
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
            reverseButtons: false, // Yes / No order reversed for better UX
            background: "#fff",   // Light background
        }).then((result) => {
            if (result.isConfirmed) {
                setAllStudents((allStudents) =>
                    allStudents.filter((_, index) => index !== i)
                );

                // toast.success(
                //     `${allStudents[i].firstName} ${allStudents[i].lastName} deleted successfully!`
                // );

                Swal.fire({
                    title: "Deleted!",
                    text: "Student has been removed.",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    title: "Cancelled",
                    text: "Student data is safe 🙂",
                    icon: "info",
                    confirmButtonColor: "#3085d6",
                });
            }
        });
    };

    const editStudent = (i: number) => {

        setEditId(i);

        // console.log(allStudents[i]);
        setFirstName(allStudents[i].firstName);
        setLastName(allStudents[i].lastName);
        setEmail(allStudents[i].email);
        setPhone(allStudents[i].phone);
        setGender(allStudents[i].gender);
        setStd(allStudents[i].std);
        setHobby(allStudents[i].hobby);
    }



    return (
        <>
            {/* Form Card */}
            <div className="w-full flex justify-center mt-10">
                <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-2xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={submitStudentForm}>
                        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                            {editId !== undefined ? "Update Student" : "Student Registration"}
                        </h2>


                        {/* First & Last Name in same row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter first name"
                                    className={`w-full p-2.5 rounded-lg text-sm 
                  ${error.firstName ? "border-red-500" : "border-gray-300"}
                  bg-gray-50 border dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                                />
                                {error.firstName && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {error.firstName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter last name"
                                    className={`w-full p-2.5 rounded-lg text-sm 
                  ${error.lastName ? "border-red-500" : "border-gray-300"}
                  bg-gray-50 border dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                                />
                                {error.lastName && (
                                    <p className="text-red-500 text-xs mt-1">{error.lastName}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className={`w-full p-2.5 rounded-lg text-sm 
                ${error.email ? "border-red-500" : "border-gray-300"}
                bg-gray-50 border dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                            />
                            {error.email && (
                                <p className="text-red-500 text-xs mt-1">{error.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Phone
                            </label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className={`w-full p-2.5 rounded-lg text-sm 
                ${error.phone ? "border-red-500" : "border-gray-300"}
                bg-gray-50 border dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                            />
                            {error.phone && (
                                <p className="text-red-500 text-xs mt-1">{error.phone}</p>
                            )}
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Gender
                            </label>
                            <div className="flex gap-6 mt-2">
                                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="text-blue-600 focus:ring-blue-500"
                                    />
                                    Male
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="text-pink-600 focus:ring-pink-500"
                                    />
                                    Female
                                </label>
                            </div>
                            {error.gender && (
                                <p className="text-red-500 text-xs mt-1">{error.gender}</p>
                            )}
                        </div>

                        {/* Std */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Std
                            </label>
                            <select
                                value={std}
                                onChange={(e) => setStd(e.target.value)}
                                className={`w-full p-2.5 rounded-lg text-sm 
                ${error.std ? "border-red-500" : "border-gray-300"}
                bg-gray-50 border dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                            >
                                <option>Select</option>
                                {allStd.map((element, index) => (
                                    <option key={index}>{element}</option>
                                ))}
                            </select>
                            {error.std && (
                                <p className="text-red-500 text-xs mt-1">{error.std}</p>
                            )}
                        </div>

                        {/* Hobby */}
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                Hobby
                            </label>
                            <div className="flex flex-wrap gap-4 mt-2">
                                {allHobby.map((data, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        <input
                                            type="checkbox"
                                            value={data}
                                            checked={hobby.includes(data)}
                                            onChange={getHobby}
                                            className="text-blue-600 focus:ring-blue-500"
                                        />
                                        {data}
                                    </label>
                                ))}
                            </div>
                            {error.hobby && (
                                <p className="text-red-500 text-xs mt-1">{error.hobby}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className={`w-full py-2.5 rounded-lg ${(editId === undefined) ? "bg-blue-600 hover:bg-blue-700" : "bg-yellow-400 hover:bg-yellow-500"}  text-white font-medium text-sm transition-colors`}
                        >
                            {(editId === undefined) ? "Add Student" : "Update Student"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Student Table */}
            <div className="max-w-6xl mx-auto mt-12">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
                    Students List
                </h2>

                <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                            <tr>
                                <th className="px-6 py-3">No</th>
                                <th className="px-6 py-3">First Name</th>
                                <th className="px-6 py-3">Last Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Phone</th>
                                <th className="px-6 py-3">Gender</th>
                                <th className="px-6 py-3">Std</th>
                                <th className="px-6 py-3">Hobby</th>
                                <th className="px-6 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allStudents.map((stud, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-3">{index + 1}</td>
                                    <td className="px-6 py-3">{stud.firstName}</td>
                                    <td className="px-6 py-3">{stud.lastName}</td>
                                    <td className="px-6 py-3">{stud.email}</td>
                                    <td className="px-6 py-3">{stud.phone}</td>
                                    <td className="px-6 py-3">{stud.gender}</td>
                                    <td className="px-6 py-3">{stud.std}</td>
                                    <td className="px-6 py-3">{stud.hobby.join(", ")}</td>
                                    <td className="px-6 py-3 flex gap-2 justify-center">
                                        <button onClick={() => editStudent(index)} className="px-3 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-medium">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteStudent(index)} className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-medium">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {allStudents.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="text-center py-4 text-gray-500 dark:text-gray-400"
                                    >
                                        No students added yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}

export default StudentForm;
