import { useEffect ,useState } from "react"

const useDark = () => {

    const [theme, setTheme] = useState("light")

    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[theme])



    return [theme , setTheme]
}

export default useDark;