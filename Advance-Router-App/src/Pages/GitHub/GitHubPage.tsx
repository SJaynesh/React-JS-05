import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";


export default function GitHubPage() {
    // const { userName } = useParams();
    interface GitHubData {
        login: string,
        name: string,
    }
    const userProfile = useLoaderData();


    useEffect(() => {
        console.log("Use Effect is running...");
    }, [])

    console.log(userProfile);

    if (userProfile == undefined) {
        return <p>No Data</p>
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center text-center px-6">
            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
                GitHub <span className="text-red-500">Account</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-lg text-gray-600 max-w-xl">

            </p>
        </div>
    );
}