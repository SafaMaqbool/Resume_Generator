import React, { forwardRef, Ref } from "react";

// Contains reusable components used across different form sections. 
type FieldProps ={
    id: string;
    label: string;
    type: "text" | "email" | "tel" | "url" | "date" | "textarea";
    [key: string]: any; //This is an index signature in TypeScript. It allows the FieldProps type to accept any additional properties with a string key and a value of any type. This makes the Field component flexible, allowing it to accept and forward any extra props to the input element.

}

const Field =forwardRef<HTMLInputElement | HTMLTextAreaElement , FieldProps>(
    ({id, label, type, ...rest},ref)=>{
       const Component =type === "textarea"? "textarea" : "input";

       const refToUse = 
       type === "textarea"
       ? (ref as Ref<HTMLTextAreaElement>)
       : (ref as Ref<HTMLInputElement> );

       return (
        <div>
            <label
            className="block text-gray-700 select-none font-bold mb-2 dark:text-gray-300"
             htmlFor={id}>{label}</label>

             <Component 
             id={id}
             type={type}
             ref={refToUse as any}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             {...rest}
             />
        </div>
       )
    }
)

const ErrorField:React.FC<{
    error: any;

}>=({error}) =>{
    if(!error){
        return null;
    }

    return(
        <span className="text-red-500 text-xs italic">{error.message?.toString()}</span>
    )
}

type ButtonProps={
    label: string;
    onClick?: ()=> void
}

const Button=({label, onClick}: ButtonProps)=>{
    const type= label==="Previous"? "button" : "submit";

    return(
        <button type={type}
        className="px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={onClick}
        >
            {label}

        </button>
    )
}

const Buttons =({
    activeStep,
    steps,
    previous,
}:{
    activeStep:number;
    steps:number;
    previous:()=>void
})=>{
    return (
        <div className="flex justify-end mt-8 gap-5">
          {activeStep > 0 && <Button label="Previous" onClick={previous} />}
    
          <Button label={activeStep < steps - 1 ? "Next" : "Submit"} />
        </div>
      );
}

export { Field, Buttons, ErrorField };