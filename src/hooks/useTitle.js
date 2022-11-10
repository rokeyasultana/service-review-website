
 import { useEffect } from "react"

 const useTitle = title => {
     useEffect(() => {
         document.title = `${title} - Guide Start `
     }, [title])
 }
 
 export default useTitle;