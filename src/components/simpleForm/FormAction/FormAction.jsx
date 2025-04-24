import React from 'react';
/*Form action using for get serverside data .it is another way to get datan besides onSubmits 
use Form action and formData in the action handler.formData.get("name of the input field")
*/

const FormAction = () => {
    const handleFormAction=(formData)=>{
        console.log(formData.get("name"));
        console.log(formData.get("email"));

    }
    return (
        <div>
           <form action={handleFormAction}>
            <input type="text" name="name" placeholder='Enter your name' id="" />
            <br />
            <input type="email" name="email" placeholder='Enter your email' id="" />
            <br />
            <input type="submit" value="submit" />
            </form> 
        </div>
    );
};

export default FormAction;