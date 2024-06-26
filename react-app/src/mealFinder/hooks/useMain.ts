import { useEffect, useState } from "react";

const useMain = () => {
    const [selection, setSelection] = useState("Beef");

    // useEffect(() => {
    //     console.log(selection);
    //     setSelection(selection);
    // });

    return { selection, setSelection };
};

export default useMain;
