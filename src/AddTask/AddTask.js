import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const AddTask = () => {
    const {taskId} = useParams();
    const { register, handleSubmit  } = useForm();



    const onSubmit = (data) => {
        fetch("http://localhost:5000/tasks", {
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
        <div>
            <h1>Assign Task to User</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className='w-25 my-1'  {...register("name")} placeholder="Task Title" /> <br />
                <input className='w-25 my-1'  {...register("name")} placeholder="Task Title" /> <br />
                <textarea className='w-25 my-1 h-25' {...register("description")} placeholder="description" /> <br />
                <input className='w-25 my-1' type="date" {...register("date")}  /> <br />
                <input className='w-25 my-1' {...register("img")} placeholder="Additional Image Path" /> <br />
                <input className='w-25 my-1' className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddTask;