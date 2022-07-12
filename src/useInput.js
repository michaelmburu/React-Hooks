import { useState } from "react";

export function useInput(initialValue) {
    const [value, setValue] = useState(
        initialValue
    );

    // Return array of value, onChange method and cleanUp method
    return [
        {
            value, 
            onChange: (e) => setValue(e.target.value)
        }, 
            
        () => setValue(initialValue)
    ]
}