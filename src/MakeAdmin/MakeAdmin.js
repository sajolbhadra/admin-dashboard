import React from "react";
import { useForm } from "react-hook-form";



const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        fetch("http://localhost:5000/makeadmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
        console.log(data);
        // data.preventDefault();
    }


    return (
        <form className="my-5 py-5" onSubmit={handleSubmit(onSubmit)}>


            <input
                defaultValue="test"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })} /> <br />
            <input className="my-3 btn btn-primary" type="submit" />
        </form>
    );
};

export default MakeAdmin;